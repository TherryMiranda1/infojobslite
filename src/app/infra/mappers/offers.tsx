import { Offer } from "@/app/domain/models/Offer";
import { OfferDTO } from "../dtos/offers";
import { NO_IMAGE } from "@/app/static/assets/noImage";

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