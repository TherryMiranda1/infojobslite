"use client";

import { useEffect } from "react";
import { PuffLoader } from "react-spinners";
import {
  CardTextsContainer,
  CardTitleContainer,
  OfferCardStyled,
  OffersContainer,
} from "../components/OfferCard/OfferCard.styled";

import { useOffers } from "../hooks/useOffers";
import { IntersectionTrigger } from "../components/IntersectionTrigger/IntersectionTrigger";
import { UpdateStatusType } from "../hooks/usePagination";

export function ListOfOffers() {
  const { offers, getInfoJobsOffers, isLoading, hasPagination, updateLoading } =
    useOffers();

  useEffect(() => {
    //   getInfoJobsOffers();
  }, []);

  if (isLoading && !updateLoading) {
    return (
      <OffersContainer>
        <PuffLoader color="#167DB7" speedMultiplier={2} />
      </OffersContainer>
    );
  }
  return (
    <>
      <button onClick={() => getInfoJobsOffers()}>get</button>
      <OffersContainer>
        {offers?.map((item) => (
          <OfferCardStyled key={item.id}>
            <img alt={`Logo de ${item.author}`} src={item.authorLogo} />
            <CardTextsContainer>
              <p>{item.province} </p>
              <p>|</p>
              <p>
                {new Date(item.published).toLocaleString("es-ES", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {item.teleworking && (
                <>
                  <p>|</p>
                  <p>{item.teleworking}</p>
                </>
              )}
            </CardTextsContainer>
            <CardTitleContainer>
              <a href={item.link} target="blank">
                <h3>{item.title}</h3>
              </a>
              <a href={item.authorUri} target="blank">
                {item.author}
              </a>
            </CardTitleContainer>

            <p>{item.category}</p>
            <CardTextsContainer>
              <p>{item.contractType} </p>
              {item.salaryDescription ? (
                <>
                  <p>|</p>

                  <p>{item.salaryDescription}</p>
                </>
              ) : (
                <p>Salario no especificado</p>
              )}
            </CardTextsContainer>
          </OfferCardStyled>
        ))}
      </OffersContainer>
      {hasPagination && offers?.length > 0 && !isLoading && (
        <IntersectionTrigger
          isLoading={updateLoading}
          onIntercept={() => getInfoJobsOffers({ page: undefined }, true)}
        />
      )}
    </>
  );
}
