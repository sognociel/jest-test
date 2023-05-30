export const fetchData = async (url: string): Promise<any> => {
  if (!url) throw new Error("API does not exist.");
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
