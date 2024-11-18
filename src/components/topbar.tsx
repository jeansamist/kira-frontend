import logo from "@/assets//images/logo-svg.svg";
import { cn } from "@/lib/utils";
import Image from "@rasenganjs/image";
import { Link, useLocation } from "rasengan";
import { FunctionComponent } from "react";
import { buttonVariants } from "./ui/button";
export type TopbarProps = {};

const LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/#features",
    label: "Features",
  },
  {
    to: "/#pricing",
    label: "Pricing",
  },
  {
    to: "/#release",
    label: "Release",
  },
  {
    to: "/#about",
    label: "About us",
  },
];
export const Topbar: FunctionComponent<TopbarProps> = () => {
  const location = useLocation();
  return (
    <div
      className={
        "fixed top-0 left-0 right-0 bg-background/10 backdrop-blur h-20 border-b border-white z-20"
      }
    >
      <div className="container mx-auto flex items-center h-full justify-between">
        <Image src={logo} alt="Logo" width={72} height={29.62} />
        <div className="flex gap-6 items-center">
          {LINKS.map((link, key) => (
            <Link
              to={link.to}
              key={key}
              className={cn(
                "text-muted",
                location.hash ===
                  new URL("https://example.com" + link.to).hash &&
                  "text-title font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/auth/sign-up"
            className={buttonVariants({ variant: "primary" })}
          >
            Try now
          </Link>
          <Link
            to="/auth/sign-in"
            className={buttonVariants({ variant: "secondary" })}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};
