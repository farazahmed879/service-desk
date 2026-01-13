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



/* 
export const getAll = async <T>(url: string): Promise<T[]> => {
  console.log("Fetching Url", url);

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`failed to fetch from ${url}: ${res.status}`);
    }

    const json = await res.json();

    if (json.success && Array.isArray(json.data)) {
      return json.data;
    }

    return [];
  } catch (err) {
    console.error("fetch failed", err);
    throw err;
  }
};

export const createPassport = async (formData: FormData) => {
  try {
    const res = await fetch("http://localhost:8080/services/createPassport", {
      method: "POST",
      body: formData, 
    });

    if (!res.ok) {
      throw new Error("Failed to create passport");
    }

    return await res.json();
  } catch (err) {
    console.error("Create passport error", err);
    throw err;
  }
}; */
