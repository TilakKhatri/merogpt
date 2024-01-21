"use client";

import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Link from "next/link";

import { routes } from "@/app/navigations/sidebarNavigations";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-white shadow-md">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            {/* <Image fill alt="Logo" src="/logo.png" /> */}
          </div>
          <h1 className={cn("text-2xl font-bold", roboto.className)}>6Ai</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg hover:bg-violet-button hover:text-white transition",
                pathname === route.path
                  ? "text-white bg-violet-button"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3 group-hover:text-white",
                    pathname === route.path ? "text-white" : "text-violet-icon "
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
