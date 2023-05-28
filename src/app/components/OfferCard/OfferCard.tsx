import { Offer } from "@/app/domain/models/Offer";
import React from "react";
import {
  CardTextsContainer,
  CardTitleContainer,
  OfferCardStyled,
} from "./OfferCard.styled";

type Props = {
  item: Offer;
};

const OfferCard = ({ item }: Props) => {
  return (
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
  );
};

export default OfferCard;
