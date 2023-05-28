
const infoJobsToken = process.env.INFOJOBS_TOKEN ?? "";

async function getOffers(page: string) {
  const res = await fetch(`https://api.infojobs.net/api/${page}/offer`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${infoJobsToken}`,
    },
  });

  const offers = await res.json();

  return offers;
}
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  let offers;

  if (page === null) {
    offers = await getOffers("1");
  } else {
    offers = await getOffers(page);
  }

  const parsedResponse = JSON.stringify(offers);
  console.log(parsedResponse);
  return new Response(parsedResponse, { status: 200 });
}
