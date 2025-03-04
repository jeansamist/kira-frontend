import underline from "@/assets/images/underline.svg";
import { Features } from "@/components/features";
import { HomeHero } from "@/components/home-hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "@rasenganjs/image";
import { PageComponent } from "rasengan";

const Home: PageComponent = () => {
  return (
    <div>
      <HomeHero />
      <Features />

      <div className={"relative w-full min-h-screen"}>
        <div className="relative z-10 h-full bg-background/15 min-h-screen flex flex-col items-center justify-center py-20 gap-6">
          <div className="text-center max-w-4xl w-full space-y-6">
            <div className="text-5xl text-title font-bold">
              You choose the{" "}
              <span className="text-primary relative">
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 z-10 hidden lg:block">
                  <Image
                    src={underline}
                    alt="underline"
                    width={100}
                    height={22}
                  />
                </div>
                best
              </span>
            </div>
            <div className="text-xl text-balance">
              Kira is an application allowing owners of any category of business
              to digitize and manage their activity more easily.
            </div>
          </div>
          <Tabs
            defaultValue="yearly"
            className="max-w-2xl w-full space-y-6 flex flex-col items-center"
          >
            <TabsList className="self-center">
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            <TabsContent value="yearly">
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle className="text-primary">
                    What do you want ?
                  </CardTitle>
                  <CardDescription>
                    Choose the features you need{" "}
                    <span className="text-primary">
                      (5,000FCFA/feature yearly)
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="">
                      <div className="text-primary font-medium">
                        Inventory management and services
                      </div>

                      <div className="text-[10px]">
                        Order management, Service creation, Real-time tracking
                        of stock levels, Automatic replenishment alerts
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="">
                      <div className="text-primary font-medium">
                        Sales and service management
                      </div>

                      <div className="text-[10px]">
                        Real-time sales tracking, Transaction history, Discount
                        and promotion management, Automated invoicing
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="">
                      <div className="text-primary font-medium">
                        Customer management
                      </div>

                      <div className="text-[10px]">
                        Customer database, Customer purchase history, Loyalty
                        program, Marketing communication tools
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="">
                      <div className="text-primary font-medium">Accounting</div>

                      <div className="text-[10px]">
                        Generation of financial reports, Monitoring of expenses
                        and income, Management of VAT and taxes
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Checkbox />
                    </div>
                    <div className="">
                      <div className="text-primary font-medium">
                        Store management
                      </div>

                      <div className="text-[10px]">
                        Performance monitoring by store, Employee and schedule
                        management
                      </div>
                    </div>
                  </div>
                  <div className="text-muted">Coming soon</div>
                  <div className="flex gap-2">
                    <div>
                      <Checkbox disabled />
                    </div>
                    <div className="">
                      <div className="text-foreground font-medium">
                        Multi-stores
                      </div>

                      <div className="text-[10px]">
                        Centralized management of several points of sale
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monthly">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0 blur-3xl opacity-70">
          <div className="w-1/2 aspect-square rounded-full bg-primary absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20"></div>
          <div className="w-1/2 aspect-square rounded-full bg-primary absolute top-1/2 left-1/2 -translate-y-2/3  opacity-20"></div>
          <div className="w-1/3 aspect-square rounded-full bg-secondary absolute top-0 right-0 opacity-15 "></div>
          <div className="w-1/3 aspect-square rounded-full bg-secondary absolute bottom-0 left-0 opacity-15 "></div>
        </div>
      </div>
    </div>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
