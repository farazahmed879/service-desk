export const getAll = async <T>(url: string): Promise<T[]> => {
  console.log("Fetching Url", url);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`failed to fetch from ${url}: ${res.status}`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : [data];
  } catch (err) {
    console.error("fetch failed", err);
    throw err;
  }
};
