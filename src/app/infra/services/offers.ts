import { GetOffersParams } from "@/app/context/offersContext";
import { mapToOffer } from "../mappers/offers";

export const url = `${process.env.NEXT_PUBLIC_URL}/api/v1/`;

export async function getOffersRequest(params?: GetOffersParams) {
  const queryPage = params?.page ? params.page : 1;
  const queryQ = params?.q ? `&q=${params.q}` : "";

  const res = await fetch(`${url}/offers?page=${queryPage}${queryQ}`);

  const data = await res.json();
  return {
    ...data,
    items: mapToOffer(data.items),
  };
}
