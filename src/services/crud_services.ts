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


// Generic POST/create function
export const create = async <T>(url: string, body: Partial<T>): Promise<T> => {
  console.log("Posting to URL:", url, "with body:", body);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Failed to create at ${url}: ${res.status}`);
    }
    const data: T = await res.json();
    return data;
  } catch (err) {
    console.error("Create request failed", err);
    throw err;
  }
};
