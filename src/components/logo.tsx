import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/Capture-removebg-preview.png";
import Image from "next/image";
import * as Icons from "@/components/_custom-components/Layouts/sidebar/icons";
import { useSidebarContext } from "@/components/_custom-components/Layouts/sidebar/sidebar-context";

export function Logo() {
  const { toggleSidebar, isOpen } = useSidebarContext();

  return (
    <div className="relative flex h-8 items-center overflow-visible">
      <div
        className={`relative transition-all duration-300 ${isOpen ? "w-[240px] opacity-100" : "w-0 opacity-0 overflow-hidden"}`}
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
        className={`ml-auto shrink-0 text-dark-4 hover:text-primary dark:text-dark-6 duration-300 ${!isOpen && "mx-auto"}`}
      >
        <Icons.HomeIcon />
      </button>
    </div>
  );
}
