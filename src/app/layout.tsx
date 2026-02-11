"use client";

import "@/css/satoshi.css";
import "@/css/style.css";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-gray-dark">
        {isAuthPage ? (
          <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-dark flex flex-col">
            {children}
          </div>
        ) : (
          <SidebarProvider>
            <div className="flex min-h-screen">
              <Sidebar />
              <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
                {/* <Header /> */}
                <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p2 2xl:p-10">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        )}
      </body>
    </html>
  );
}



