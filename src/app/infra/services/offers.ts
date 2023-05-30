import { mapToOffer } from "../mappers/offers";
import { OfferParams, buildOfferParams } from "@/app/utils/buildQuery";

export const url = `${process.env.NEXT_PUBLIC_URL}/api/v1/`;

export async function getOffersRequest(params: OfferParams) {
  const queryPage = params?.page ? params.page : 1;

  console.log(params);
  const paramsString = buildOfferParams(params);
  const res = await fetch(`${url}/offers?page=${queryPage}&${paramsString}`);

  const data = await res.json();
  return {
    ...data,
    items: mapToOffer(data.items),
  };
}
