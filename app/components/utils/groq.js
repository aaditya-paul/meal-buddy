import {createClient} from "@sanity/client";
export const client = createClient({
  projectId: "pswyinpv",
  dataset: "production",
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
