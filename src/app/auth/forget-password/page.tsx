"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { forgetPassword } from "@/services/authServices";

export default function FP() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  console.log(email);

  const handleforgetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        email,
      };

      const res = await forgetPassword(payload);
      if (!res) {
        alert("something went wrong");
      } else {
        alert("otp has been sent to your email");
      }

      router.push("/auth/save-new-password")
    } catch (error: any) {
      console.log(error?.message);
      console.log(error?.response);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Recover Account" />

      <div className="rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex flex-wrap items-center">
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-15">
              {/* Your Signin component — injecting form fields inside */}

              <form onSubmit={handleforgetPassword} className="mt-4 space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-stroke p-3 dark:border-dark-3 dark:bg-dark-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary p-3 text-white hover:bg-opacity-90"
                >
                  Forget password
                </button>

                <div className="mt-4 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link
                      href="/auth/sign-up"
                      className="text-primary underline"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
            <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/">
                <Image
                  className="hidden dark:block"
                  src={"/images/logo/logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
                <Image
                  className="dark:hidden"
                  src={"/images/logo/logo-dark.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>

              <p className="mb-3 text-xl font-medium text-dark dark:text-white">
                Recover your account
              </p>

              <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
                Forget password
              </h1>

              <p className="max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
                Reset your account by completing the necessary fields below
              </p>

              <div className="mt-31">
                <Image
                  src={"/images/grids/grid-02.svg"}
                  alt="Grid"
                  width={405}
                  height={325}
                  className="mx-auto dark:opacity-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
