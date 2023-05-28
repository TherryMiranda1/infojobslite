import { NO_IMAGE } from "@/app/static/assets/noImage";
import { OfferDTO } from "../dtos/offers";
import { Offer } from "@/app/domain/models/Offer";

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === "development";

export const url = `${process.env.NEXT_PUBLIC_URL}/api/v1/`;

export const mapToOffer = (offers: OfferDTO[]): Offer[] => {
  const mappedOffers = offers.map((item: OfferDTO) => {
    const {
      id,
      title,
      province,
      experienceMin,
      link,
      teleworking,
      contractType,
      category,
      salaryDescription,
      published,
      author,
    } = item;

    return {
      id,
      title,
      province: province.value,
      experienceMin: experienceMin.value,
      link,
      teleworking: teleworking?.value ?? undefined,
      contractType: contractType?.value ?? "No especificado",
      category: category.value,
      salaryDescription: salaryDescription || "No especificado",
      published: published.toString(),
      author: author.name,
      authorUri: author.uri,
      authorLogo: author.logoUrl ?? NO_IMAGE,
    };
  });

  return mappedOffers;
};

export async function getOffersRequest(options?: {
  page: number;
  filters?: any;
}) {
  const res = await fetch(`${url}/offers?page=${options?.page || 1}`);

  const data = await res.json();
  return {
    ...data,
    items: mapToOffer(data.items),
  };
}
