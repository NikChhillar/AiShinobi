"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ClockIcon,
  QuoteIcon,
  StarIcon,
  UserIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Top Animes",
    icon: VideoIcon,
    href: "/animes",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Top Characters",
    icon: UserIcon,
    href: "/characters",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Top Quotes",
    icon: QuoteIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/quotes",
  },
  {
    label: "Watchlist",
    icon: ClockIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/watchlist",
  },
  {
    label: "Creator's Picks",
    icon: StarIcon,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    href: "/creator",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          AniHub Dashboard...
        </h2>
        <p className="text-muted-foreground font-light p-1 text-sm md:text-lg text-center">
          Curate, collect, and conquer your top 15 anime universe.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((t) => (
          <Card
            key={t.href}
            onClick={() => router.push(t.href)}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", t.bgColor)}>
                <t.icon className={cn("w-8 h-8", t.color)} />
              </div>
              <div className="font-semibold">{t.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
