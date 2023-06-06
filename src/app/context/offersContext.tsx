import React, { createContext, useContext, useEffect, useState } from "react";
import { useOffers } from "../hooks/useOffers";
import { Offer } from "../domain/models/Offer";
import { Filter } from "../components/FiltersBar/FiltersBar";

export interface GetOffersParams {
  page?: string;
  q?: string;
  filters?: string;
}

interface OffersContextType {
  offers: Offer[];
  info: any;
  getInfoJobsOffers: (isUpdate?: boolean, params?: GetOffersParams) => void;
  isLoading: boolean;
  hasPagination: boolean;
  updateLoading: boolean;
  searchText: string;
  setSearchText: (text: string) => void;
  params: Record<string, string | number | undefined>;
  setParams: (params: Record<string, string | number | undefined>) => void;
  setSelectedFilter: (filter?: Filter) => void;
  selectedFilter?: Filter;
}

const OffersContext = createContext<OffersContextType>({} as OffersContextType);

const EMPTY_PARAMS = {
  page: 1,
  q: undefined,
  category: undefined,
  contractType: undefined,
  order: undefined,
  province: undefined,
  sinceDate: undefined,
  subcategory: undefined,
  teleworking: undefined,
};

export const OffersContainer = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const {
    offers,
    info,
    getInfoJobsOffers,
    isLoading,
    hasPagination,
    updateLoading,
  } = useOffers();
  const [searchText, setSearchText] = useState("");
  const [params, setParams] =
    useState<Record<string, string | number | undefined>>(EMPTY_PARAMS);
  const [selectedFilter, setSelectedFilter] = useState<Filter | undefined>(
    undefined
  );

  useEffect(() => {
    getInfoJobsOffers();
  }, []);

  useEffect(() => {
    getInfoJobsOffers(false, params);
  }, [params]);
  return (
    <OffersContext.Provider
      value={{
        offers,
        info,
        getInfoJobsOffers,
        isLoading,
        hasPagination,
        updateLoading,
        searchText,
        setSearchText,
        params,
        setParams,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </OffersContext.Provider>
  );
};

export const useOffersContext = (): OffersContextType =>
  useContext(OffersContext);
