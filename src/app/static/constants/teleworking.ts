export const TELEWORKING = {
  title: "Modalidad",
  query: "teleworking",
  type: "object",
  items: [
    {
      id: 1,
      value: "Presencial",
      order: 1,
      key: "trabajo-solo-presencial",
    },
    {
      id: 2,
      value: "Solo teletrabajo",
      order: 2,
      key: "solo-teletrabajo",
    },
    {
      id: 3,
      value: "Híbrido",
      order: 3,
      key: "teletrabajo-posible",
    },
    {
      id: 4,
      value: "Sin especificar",
      order: 4,
      key: "no-se-sabe-no-esta-decidido",
    },
  ],
};
