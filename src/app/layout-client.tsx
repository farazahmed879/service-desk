/* "use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Check authentication on mount
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsAuthenticated(!!auth);
  }, []);

  // Redirect if not logged in and trying to access dashboard
  useEffect(() => {
    if (isAuthenticated === false && !pathname.startsWith("/auth")) {
      router.push("/auth/sign-in");
    }
  }, [isAuthenticated, pathname]);

  const isAuthPage = pathname.startsWith("/auth");

  // Prevent flashing
  if (isAuthenticated === null) return null;

  return (
    <>
      {isAuthenticated && !isAuthPage ? (
        // Dashboard layout
        <div className="flex min-h-screen">
          <Sidebar />

          <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
            <Header />
            <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
              {children}
            </main>
          </div>
        </div>
      ) : (
        // Auth pages layout (No sidebar/header)
        <main className="w-full">{children}</main>
      )}
    </>
  );
}
 */