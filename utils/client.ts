import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "a7cn478a",
  dataset: "production",
  apiVersion: "2022-11-23",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
