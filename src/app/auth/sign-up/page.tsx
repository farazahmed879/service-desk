"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signUpService } from "@/services/authServices";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        email,
        password,
        role,
      };

      const res = await signUpService(payload);

      alert(`account created sucess with this ${role} `);
      console.log("backend response", res);

      console.log(res.message);

      router.push("/auth/sign-in");
    } catch (error: any) {
      if (error?.response?.data) {
        console.log(error.response.data.message);
      
      
      }
      
      alert("signup fail");
    }

    // const stored = localStorage.getItem("users");
    // const users = stored ? JSON.parse(stored) : [];

    // const existingUser = users.find((u: any) => u.email === email);
    // if (existingUser) {
    //   alert("Email already registered. Please sign in.");
    //   return;
    // }

    // const newUser = {
    //   id: Date.now().toString(),
    //   fullName,
    //   email,
    //   password,
    // };

    // users.push(newUser);
    // localStorage.setItem("users", JSON.stringify(users));

    // alert("Account created successfully! Please sign in.");
    // router.push("/auth/sign-in");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Create Your Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="mb-1 block text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              placeholder="Iqrar Ahmed"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-700 dark:text-gray-200">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-gray-700 dark:text-gray-200">
              role
            </label>
            <input
              type="role"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              placeholder="********"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="hover:bg-primary-dark w-full rounded-lg bg-primary p-3 font-semibold text-white transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <a
            onClick={() => router.push("/auth/sign-in")}
            className="cursor-pointer font-medium text-primary hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
