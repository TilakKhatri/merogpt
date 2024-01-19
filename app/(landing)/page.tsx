import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex justify-center items-center gap-4">
      <div>
        <Button variant={"link"}>
          <Link href="/register">Register</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
