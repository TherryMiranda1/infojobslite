const infoJobsToken = process.env.INFOJOBS_TOKEN ?? "";

async function getOffers(page: string, params: string) {
  console.log(params);
  const res = await fetch(
    `https://api.infojobs.net/api/9/offer?page=${page}${params}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${infoJobsToken}`,
      },
    }
  );

  const offers = await res.json();

  return offers;
}
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const q = searchParams.get("q");
  let offers;
  console.log(q);
  const paramsQuery = q ? `&q=${q}` : "";
  if (page === null) {
  } else {
    offers = await getOffers(`${page}`, paramsQuery);
  }

  const parsedResponse = JSON.stringify(offers);

  return new Response(parsedResponse, { status: 200 });
}
