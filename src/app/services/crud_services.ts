import type { DogImage } from "@/app/dashboard/users/types";



export const getAll = async <T>(url: string): Promise<T[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }

  const data = await res.json();

  // If API returns a single object, wrap it in an array
  return Array.isArray(data) ? data : [data];
};

