import React, { createContext, useContext, useEffect, useState } from "react";
import { useOffers } from "../hooks/useOffers";
import { Offer } from "../domain/models/Offer";

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
}

interface Props {
  children: JSX.Element | JSX.Element[];
}
const OffersContext = createContext<OffersContextType>({} as OffersContextType);

export const OffersContainer = ({
  children,
}: {
  children: JSX.Element;
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
  
  useEffect(() => {
    getInfoJobsOffers();
  }, []);
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
      }}
    >
      {children}
    </OffersContext.Provider>
  );
};

export const useOffersContext = (): OffersContextType =>
  useContext(OffersContext);
