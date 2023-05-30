const infoJobsToken = process.env.INFOJOBS_TOKEN ?? "";

const PARAMS = [
  "q",
  "category",
  "contractType",
  "order",
  "province",
  "sinceDate",
  "subcategory",
  "teleworking",
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const buildQ = (key: string) =>
    searchParams.get(key) ? `&${key}=${searchParams.get(key)}` : "";

  const paramsQ = PARAMS.map((param) => buildQ(param)).join("");

  console.log(paramsQ);
  const offers = await fetch(
    `https://api.infojobs.net/api/9/offer?page=${page}${paramsQ}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${infoJobsToken}`,
      },
    }
  );

  const res = await offers.json();

  const parsedResponse = JSON.stringify(res);

  return new Response(parsedResponse, { status: 200 });
}
