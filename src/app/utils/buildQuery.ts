export interface OfferParams {
  page: number;
  q?: string;
  category?: string;
  contractType?: string;
  order?: string;
  province?: string;
  sinceDate?: string;
  subcategory?: string;
  teleworking?: string;
}

export const buildQuery = (params: any) => {
  const queryValues = Object.values(params);
  return queryValues.length > 0 ? new URLSearchParams(params).toString() : "";
};

export const buildOfferParams = (params: OfferParams) => {
  const {
    q,
    category,
    contractType,
    order,
    province,
    sinceDate,
    subcategory,
    teleworking,
  } = params;

  const querys = {
    ...(q && { q }),
    ...(category && { category }),
    ...(contractType && { contractType }),
    ...(order && { order }),
    ...(province && { province }),
    ...(sinceDate && { sinceDate }),
    ...(subcategory && { subcategory }),
    ...(teleworking && { teleworking }),
  };

  return buildQuery(querys);
};
