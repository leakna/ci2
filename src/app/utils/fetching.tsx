// fetchData.ts
export async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("data cannot fetch");
  const data = await response.json();
  return data;
}
