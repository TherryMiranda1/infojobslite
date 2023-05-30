"use client";

import { PuffLoader } from "react-spinners";
import { OffersContainer } from "../components/OfferCard/OfferCard.styled";

import { IntersectionTrigger } from "../components/IntersectionTrigger/IntersectionTrigger";
import OfferCard from "../components/OfferCard/OfferCard";
import { useOffersContext } from "../context/offersContext";
import { Offer } from "../domain/models/Offer";
import { cleanText } from "../utils/cleanText";
import { PageContainer } from "../components/App.styled";
import { ResultsStyled } from "../components/Navbar/Navbar.styled";

export function ListOfOffers() {
  const {
    offers,
    getInfoJobsOffers,
    isLoading,
    hasPagination,
    updateLoading,
    searchText,
    info,
  } = useOffersContext();

  if (isLoading && updateLoading == false && !offers) {
    return (
      <OffersContainer>
        <PuffLoader color="#167DB7" speedMultiplier={2} />
      </OffersContainer>
    );
  }

  return (
    <PageContainer>
      {info && (
        <ResultsStyled>
          {`${info.totalResults} Resultados`}
          {Boolean(info.dataLayer.search_terms) &&
            ` para ${info.dataLayer.search_terms}`}
        </ResultsStyled>
      )}
      <OffersContainer>
        {offers &&
          offers?.map((item: Offer) => <OfferCard key={item.id} item={item} />)}
      </OffersContainer>
      {hasPagination && offers?.length > 0 && !isLoading && (
        <IntersectionTrigger
          isLoading={updateLoading}
          onIntercept={() =>
            getInfoJobsOffers(true, { q: cleanText(searchText) })
          }
        />
      )}
    </PageContainer>
  );
}
