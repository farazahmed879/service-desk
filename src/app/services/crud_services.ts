<<<<<<< Updated upstream
// export const getAll = async <T>(url: string): Promise<T[]> => {
//   console.log("Fetching Url", url);
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`failed to fetch from ${url}: ${res.status}`);
//     }
//     const data = await res.json();
//     return Array.isArray(data) ? data : [data];
//   } catch (err) {
//     console.error("fetch failed", err);
//     throw err;
//   }
// };


// // Generic POST/create function
// export const create = async <T>(url: string, body: Partial<T>): Promise<T> => {
//   console.log("Posting to URL:", url, "with body:", body);
//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to create at ${url}: ${res.status}`);
//     }
//     const data: T = await res.json();
//     return data;
//   } catch (err) {
//     console.error("Create request failed", err);
//     throw err;
//   }
// };



=======
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

/* export const getAll = async <T>(url: string): Promise<T[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`failed to fetch from ${url}: ${res.status}`);
  }

  return (await res.json()) as T[];
}; */

/* export const getAll = async <T>(url: string): Promise<T[]> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`failed to fetch from ${url}: ${res.status}`);
    }

    const result = await res.json();

    // backend me data array ke andar aa raha hai
    return Array.isArray(result.data) ? result.data : [];
  } catch (err) {
    console.error("fetch failed", err);
    throw err;
  }
}; */

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
>>>>>>> Stashed changes


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
