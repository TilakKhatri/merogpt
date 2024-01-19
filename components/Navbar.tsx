import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Ghost, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex p-4 justify-center">
      <Button className="md:hidden" variant="ghost" size={"icon"}>
        <Menu />
      </Button>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/login" />
      </div>
    </div>
  );
}
