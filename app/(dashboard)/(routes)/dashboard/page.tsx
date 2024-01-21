import { UserButton } from "@clerk/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { tools } from "@/app/navigations/tools";

export default function DashboardPage() {
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
            "grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 gap-6 place-items-center"
          )}
        >
          {tools.map((tool) => (
            <Card
              className={cn("w-full shadow-md hover:scale-105 transition-all")}
            >
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
              </CardHeader>

              <CardFooter>
                <Button className="w-full">
                  {/* <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read */}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
