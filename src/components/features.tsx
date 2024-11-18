import accounting from "@/assets/images/accounting.png";
import customers from "@/assets/images/customers.png";
import inventory from "@/assets/images/inventory.png";
import underline from "@/assets/images/underline.svg";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "@rasenganjs/image";
import { FunctionComponent } from "react";
export type FeaturesProps = {};

export const Features: FunctionComponent<FeaturesProps> = () => {
  return (
    <div className="py-14 container mx-auto space-y-20">
      <div className="text-5xl text-title font-bold text-center ">
        Core{" "}
        <span className="text-primary relative">
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden lg:block">
            <Image src={underline} alt="underline" width={180} height={22} />
          </div>
          features
        </span>{" "}
        for you
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 flex gap-6">
          <Image src={inventory} alt="illustration" width={80} height={80} />
          <div className="flex-1 space-y-1 text-foreground">
            <CardTitle>Inventory and services</CardTitle>
            <div className="line-clamp-2  text-balance">
              Monitor your inventory levels in real time and easily create new
              services, while receiving automatic alerts for restocks.
            </div>
          </div>
        </Card>
        <Card className="p-6 flex gap-6">
          <Image src={accounting} alt="illustration" width={80} height={80} />
          <div className="flex-1 space-y-1 text-foreground">
            <CardTitle>Accounting</CardTitle>
            <div className="line-clamp-2 text-balance">
              Simplify accounting with automatic financial reporting from a
              central interface.
            </div>
          </div>
        </Card>
        <Card className="p-6 flex gap-6 lg:col-span-2">
          <Image src={customers} alt="illustration" width={80} height={80} />
          <div className="flex-1 space-y-1 text-foreground">
            <CardTitle>Sales and customers</CardTitle>
            <div className="line-clamp-2   text-balance ">
              Track your sales up to the minute and keep a complete transaction
              history, while pampering your customers with integrated loyalty
              programs.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
