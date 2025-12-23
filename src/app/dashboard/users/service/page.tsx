"use client";

import { useRouter } from "next/navigation";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function UserServicePage() {
  const router = useRouter();

  const services = [
    {
      id: 1,
      fullName: "Iqrar Ahmed Soomro",
      service: "Vehicle Transfer Application",
      status: "Completed",
      fees: 1000,
    },

    {
      id: 1,
      fullName: "Faraz Ahmed ",
      service: "new Passport Application",
      status: "Failed",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Asif Ali",
      service: "Passport Application",
      status: "Pending",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Abdullah",
      service: " vehicle Transfer and Passport Application",
      status: "Failed",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Shabeeh  Haider ",
      service: " vehicle Transfer and Passport Application",
      status: "Failed",

      fees: 1000,
    },
    {
      id: 1,
      fullName: "Muhammad Ahmed",
      service: "Vehicle Transfer Application",
      status: "Completed",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Muhammad Zafar",
      service: "new Passport Application",
      status: "Failed",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "M Zubabir",
      service: "Passport Application",
      status: "Pending",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Mir Naseeb",
      service: " vehicle Transfer and Passport Application",
      status: "Failed",
      fees: 1000,
    },
    {
      id: 1,
      fullName: "Muneeb ",
      service: " vehicle Transfer and Passport Application",
      status: "Completed",

      fees: 1000,
    },
  ];

  return (
    <div className="grid rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
        User Service list
      </h2>

      <div className="overflow-x-auto">
        
        <table className="w-full min-w-[500px] table-auto">
          <thead>
            <tr className="border-none bg-gray-100   dark:bg-gray-200">
            

              <th className="w-[25%] px-1 py-2 text-left text-black font-weight:200 text-sm ">Full Name</th>
              <th className="w-[25%] px-1 py-2 text-center text-black font-weight:200 text-sm ">Service</th>
              <th className="w-[20%] px-1 py-2 text-center  text-black font-weight:200 text-sm">Status</th>
              <th className="w-[20%] px-1 py-2 text-center  text-black font-weight:200 text-sm">Fees</th>
            </tr>
          </thead>

          <tbody>
            {services.map((item, i) => (
              <tr
                key={i}
                className="text-base font-medium text-dark hover:bg-gray-50 dark:text-white dark:hover:bg-gray-600"
              >
                <td className="w-1/4 break-words px-4 py-2 text-left">
                  {item.fullName}
                </td>
                <td className="w-1/4 break-words px-4 py-2 text-center">
                  {item.service}
                </td>

                <td className="flex items-center justify-center px-4 py-3">
                 {/*  <div className="mx-auto flex w-5 space-x-2">
                    {item.status.trim() === "Completed" && (
                      <div className="group relative inline-block cursor-pointer">
                        <FaCheckCircle className="text-green-500" size={25} />
                        <span className="absolute left-full top-1/2 ml-2 w-max -translate-y-1/2 rounded bg-gray-200 px-2 py-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Completed
                        </span>
                      </div>
                    )}

                    {item.status.trim() === "Failed" && (
                      <div className="group relative inline-block cursor-pointer">
                        <FaTimesCircle className="text-red-500" size={25} />
                        <span className="absolute left-full top-1/2 ml-2 w-max -translate-y-1/2 rounded bg-gray-200 px-2 py-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Un-completed
                        </span>
                      </div>
                    )}

                    {item.status.trim() === "Pending" && (
                      <div className="group relative inline-block cursor-pointer">
                        <FaClock className="text-yellow-500" size={25} />
                        <span className="absolute left-full top-1/2 ml-2 w-max -translate-y-1/2 rounded bg-gray-200 px-2 py-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Pending
                        </span>
                      </div>
                    )}
                  </div> */}

                  {/* Without Icons */}

                  <div className="group relative inline-block cursor-pointer">
                    <div
                      className={cn(
                        "max-w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                        {
                          "bg-[#219653]/[0.08] text-[#219653]":
                            item.status === "Completed",
                          "bg-[#D34053]/[0.08] text-[#D34053]":
                            item.status === "Failed",
                          "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                            item.status === "Pending",
                        },
                      )}
                    >
                      {item.status}
                    </div>

                    <span className="absolute left-full top-1/2 ml-2 w-max -translate-y-1/2 rounded bg-gray-200 px-2 py-1 text-xs text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {item.status}
                    </span>
                  </div>

                </td>

                <td className="whitespace-nowrap px-2 py-2 text-center text-green-500">
                  {item.fees}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => router.back()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
