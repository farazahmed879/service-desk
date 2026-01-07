/* import type { Service } from "@/app/dashboard/users/types";

// GET ALL
export const getAllServices = async (): Promise<Service[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(services), 300);
  });
};

// CREATE
export const createService = async (data: Omit<Service, "id">) => {
  const newService: Service = {
    id: Date.now().toString(),
    ...data,
  };

  services.push(newService);
  return newService;
};


 */