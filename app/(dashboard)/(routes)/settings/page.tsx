import { Settings } from "lucide-react";

import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";
import Heading from "@/components/Heading";

const SettingsPage = async () => {
  //   const isPro = await checkSubscription();
  const isPro = false;
  return (
    <div className="px-4 lg:px-8">
      <Heading title="Settings" description="Manage account settings." />
      <div className=" space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
