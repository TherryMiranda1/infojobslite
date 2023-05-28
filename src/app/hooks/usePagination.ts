import { useEffect, useState } from "react";

export enum UpdateStatusType {
  LOADING = "LOADING",
  COMPLETE = "COMPLETE",
}

interface UsePaginationReturnType<T> {
  getItems: (params?: any, isUpdate?: boolean) => void;
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

  const hasPagination = true;

  const getItems = (params: any, isUpdate = false) => {
    setIsUpdating(isUpdate);
    isUpdate ? call({ ...params, page: pagination }) : call(params);
  };

  useEffect(() => {
    if (data != null) {
      setItems(isUpdating ? [...items, ...data.items] : data.items);
      setPagination(data.currentPage + 1);
    }
  },[data]);

  useEffect(() => {
    isUpdating && setUpdateLoading(isLoading);
  }, [isUpdating, isLoading]);

  return {
    getItems,
    hasPagination,
    updateLoading,
    items,
  };
}
