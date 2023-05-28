// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from "react";
import { GetOffersParams } from "../context/offersContext";

export enum UpdateStatusType {
  LOADING = "LOADING",
  COMPLETE = "COMPLETE",
}

interface UsePaginationReturnType<T> {
  getItems: (isUpdate?: boolean, params?: any) => void;
  hasPagination: boolean;
  items: T[];
  updateLoading: boolean;
}

interface Props {
  call: (...args: any) => Promise<any>;
  isLoading: boolean;
  data: any;
}

export function usePagination<T>({
  isLoading,
  call,
  data,
}: Props): UsePaginationReturnType<T> {
  const [isUpdating, setIsUpdating] = useState(false);
  const [items, setItems] = useState<T[]>(data?.items);
  const [pagination, setPagination] = useState<Number | undefined>(undefined);
  const [updateLoading, setUpdateLoading] = useState(false);

  const hasPagination = data?.totalPages > data?.currentPage;

  const getItems = (isUpdate = false, params: GetOffersParams) => {
    setIsUpdating(isUpdate);
    if (isUpdate) {
      call({ ...params, page: pagination });
    } else {
      if (params?.q) {
        setItems([]);
      }
      call(params);
    }
  };

  useEffect(() => {
    if (data != null) {
      setItems(isUpdating ? [...items, ...data.items] : data.items);
      setPagination(data.currentPage + 1);
    }
  }, [data]);

  useEffect(() => {
    isUpdating && setUpdateLoading(isLoading);
  }, [isLoading]);

  return {
    getItems,
    hasPagination,
    updateLoading,
    items,
  };
}
