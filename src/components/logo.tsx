import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/Capture-removebg-preview.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import * as Icons from "@/components/_custom-components/Layouts/sidebar/icons";
import { useSidebarContext } from "@/components/_custom-components/Layouts/sidebar/sidebar-context";

export function Logo() {
  const { toggleSidebar, isOpen } = useSidebarContext();

  return (
    <div className="relative flex h-8 items-center overflow-visible">
      <div
        className={`relative transition-all duration-300 ${isOpen ? "w-[240px] opacity-100" : "w-0 overflow-hidden opacity-0"}`}
      >
        <Image
          src={logo}
          alt="ServiceDesk logo"
          width={220}
          height={32}
          className="scale-120 origin-left object-contain dark:hidden"
          quality={100}
          priority
        />

        <Image
          src={darkLogo}
          fill
          className="hidden dark:block"
          alt="NextAdmin logo"
          role="presentation"
          quality={100}
        />
      </div>
      <button
        onClick={toggleSidebar}
        className={`ml-auto shrink-0 text-dark-4 duration-300 hover:text-primary dark:text-dark-6 ${!isOpen && "mx-auto"}`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-transform duration-300",
            !isOpen && "rotate-180",
          )}
        >
          <g clipPath="url(#clip0_245_553)">
            <rect
              x="1.04907e-06"
              y="24"
              width="24"
              height="24"
              rx="4"
              transform="rotate(-90 1.04907e-06 24)"
              fill="#E9E9E9"
            />
            <path
              d="M9.375 7.625L5 12M5 12L9.375 16.375M5 12L16.375 12"
              stroke="#222842"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 17.25L19 6.75"
              stroke="#222842"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_245_553">
              <rect
                x="1.04907e-06"
                y="24"
                width="24"
                height="24"
                rx="4"
                transform="rotate(-90 1.04907e-06 24)"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
