import { useState } from "react";
import { getOffersRequest } from "../infra/services/offers";
import { usePagination } from "./usePagination";
import { Offer } from "../domain/models/Offer";
import { removeDuplicated } from "../utils";

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

  const { getItems, hasPagination, items, updateLoading, info } =
    usePagination<Offer>({
      call,
      isLoading,
      data,
    });

  return {
    getInfoJobsOffers: getItems,
    offers: items,
    reset,
    isLoading,
    error,
    hasPagination,
    updateLoading,
    info,
  };
};
