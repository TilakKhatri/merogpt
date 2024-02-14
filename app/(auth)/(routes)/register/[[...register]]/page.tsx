import { SignUp } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 ">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <p className="text-sm font-semibold text-gray-700">Back to home</p>
      </div>
      <SignUp />
    </div>
  );
}
