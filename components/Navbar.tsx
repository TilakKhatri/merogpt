import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="flex p-4 items-center">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/login" />
      </div>
    </div>
  );
}
