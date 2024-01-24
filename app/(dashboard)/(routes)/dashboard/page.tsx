"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { tools } from "@/app/navigations/tools";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-22 space-y-4 ">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-6 place-items-strach"
          )}
        >
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className={cn(
                "w-full shadow-md hover:scale-105 transition-all cursor-pointer"
              )}
            >
              {/* <Card onClick={() => router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"> */}
              <div
                className={cn(
                  "flex justify-between items-center p-4",
                  tool.bgColor
                )}
              >
                <div className={cn("flex gap-x-4 items-center")}>
                  <div className={cn("p-2 w-fit rounded-md")}>
                    <tool.icon
                      className={cn("w-20 h-20 md:w-24 md:h-24", tool.color)}
                    />
                  </div>
                  <div className="font-semibold tex-xl md:text-xl lg:text-2xl">
                    {tool.label}
                  </div>
                </div>
                <div className="flex flex-end">
                  <ArrowRight />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
