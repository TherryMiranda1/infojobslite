"use client";

import { useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { OffersContainer } from "../components/OfferCard/OfferCard.styled";

import { useOffers } from "../hooks/useOffers";
import { IntersectionTrigger } from "../components/IntersectionTrigger/IntersectionTrigger";
import OfferCard from "../components/OfferCard/OfferCard";
import { useOffersContext } from "../context/offersContext";
import { Offer } from "../domain/models/Offer";
import { cleanText } from "../utils/cleanText";

export function ListOfOffers() {
  const {
    offers,
    getInfoJobsOffers,
    isLoading,
    hasPagination,
    updateLoading,
    searchText,
  } = useOffersContext();

  useEffect(() => {
    getInfoJobsOffers();
  }, []);
  if (isLoading && updateLoading == false && !offers) {
    return (
      <OffersContainer>
        <PuffLoader color="#167DB7" speedMultiplier={2} />
      </OffersContainer>
    );
  }
  return (
    <>
      <OffersContainer>
        {offers?.map((item: Offer) => (
          <OfferCard key={item.id} item={item} />
        ))}
      </OffersContainer>
      {hasPagination && offers?.length > 0 && !isLoading && (
        <IntersectionTrigger
          isLoading={updateLoading}
          onIntercept={() =>
            getInfoJobsOffers(true, { q: cleanText(searchText) })
          }
        />
      )}
    </>
  );
}
