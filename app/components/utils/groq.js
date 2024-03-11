import {createClient} from "@sanity/client";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  useCdn: true,
  apiVersion: "2023-05-03",
});

export async function GetFood(query) {
  if (!query) {
    const foods = await client.fetch('*[_type == "food"]');
    return foods;
  } else {
    const foods = await client.fetch(query);
    return foods;
  }
}
export async function GetFoodImage(query) {}
export async function CustomQuery(query) {
  const custom = await client.fetch(query);
  return custom;
}
