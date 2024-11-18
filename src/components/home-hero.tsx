import image from "@/assets/images/home-illustraion.png";
import underline from "@/assets/images/underline.svg";
import Image from "@rasenganjs/image";
import { Link } from "rasengan";
import { FunctionComponent } from "react";
import { buttonVariants } from "./ui/button";
export const HomeHero: FunctionComponent = () => {
  return (
    <div className={"relative w-full min-h-screen"}>
      <div className="relative z-10 h-full bg-background/15 min-h-screen flex flex-col pt-40 pb-20">
        <div className="container relative mx-auto h-full flex-1 flex items-center justify-between overflow-hidden">
          <div className="lg:max-w-[700px] w-full space-y-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-dark font-medium">KIRA BUSINESS MANAGER</div>
            <div className="text-5xl text-title font-bold relative">
              <div className="absolute top-[70px] z-10 hidden lg:block">
                <Image
                  src={underline}
                  alt="underline"
                  width={180}
                  height={22}
                />
              </div>
              <span className="text-primary leading-loose z-20 relative">
                Digitize
              </span>{" "}
              your business with our solution 🚀
            </div>
            <div className="text-muted text-lg">
              Join the list of business owners who have chosen KIRA
            </div>
            <div className="flex items-center gap-6 pt-2">
              <Link
                to="/auth/sign-up"
                className={buttonVariants({ variant: "primary" })}
              >
                Try it now
              </Link>
              <span className="text-tertiary font-medium">
                No credit card needed. 30 day trial period
              </span>
            </div>
          </div>
          <div className="absolute right-0 hidden xl:block xl:translate-x-1/3 2xl:translate-x-1/4">
            <Image
              src={image}
              alt="image"
              width={500}
              height={500}
              className="xl:!w-[80%] 2xl:!w-[85%] !h-auto"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0 blur-3xl opacity-15 ">
        <div className="w-1/2 aspect-square rounded-full bg-primary absolute top-1/2 -translate-y-1/2"></div>
        <div className="w-1/3 aspect-square rounded-full bg-secondary absolute top-0 right-0"></div>
      </div>
    </div>
  );
};
