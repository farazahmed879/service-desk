import darkLogo from "@/assets/logos/dark.svg";
import logo from "@/assets/logos/Capture-removebg-preview.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative flex h-8 w-[240px] items-center overflow-visible">
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
  );
}
