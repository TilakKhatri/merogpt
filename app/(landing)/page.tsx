import OurClients from "@/components/clients";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

export default function Home() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <div className="max-w-lg mx-auto my-24">
        <OurClients />
      </div>
    </div>
  );
}
