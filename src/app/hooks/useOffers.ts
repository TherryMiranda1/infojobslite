import { useState } from "react";
import { getOffersRequest } from "../infra/services/offers";
import { usePagination } from "./usePagination";
import { Offer } from "../domain/models/Offer";

export const useOffers = () => {
  const [data, setData] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const reset = () => {
    setIsLoading(false);
    setData(null);
    setError(null);
  };

  const call = async (options?: any) => {
    setIsLoading(true);
    setData(null);
    setError(null);

    try {
      const response = await getOffersRequest(options);
      setData(response);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  const { getItems, hasPagination, items, updateLoading } = usePagination<Offer>({
    call,
    isLoading,
    data,
  });
  console.log(items)

  return {
    getInfoJobsOffers: getItems,
    offers: items,
    reset,
    isLoading,
    error,
    hasPagination,
    updateLoading,
  };
};
