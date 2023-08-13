"use client";

import { cn } from "@/lib/utils";
import {
  ClockIcon,
  Code,
  LayoutDashboard,
  QuoteIcon,
  UserIcon,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Animes",
    icon: VideoIcon,
    href: "/animes",
    color: "text-violet-500",
  },
  {
    label: "Characters",
    icon: UserIcon,
    color: "text-pink-700",
    href: "/characters",
  },
  {
    label: "Quotes",
    icon: QuoteIcon,
    color: "text-orange-700",
    href: "/quotes",
  },
  {
    label: "Watchlist",
    icon: ClockIcon,
    color: "text-emerald-500",
    href: "/watchlist",
  },
  {
    label: "About",
    icon: Code,
    color: "text-gray-500",
    href: "/about",
  },
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4 text-sky-500">
            <Image fill alt="shinobi-logo" src={"/logo.png"} />
          </div>
          <h1 className={"text-2xl font-bold"}>AniHub</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full justify-center">
        <span className="text-sm text-neutral-500">King of the Pirates ❤️</span>
      </div>
    </div>
  );
};

export default Sidebar;
