/* eslint-disable react-hooks/exhaustive-deps */
import { Company } from "@/domain/entities/Company";
import { VCard } from "@/domain/entities/VCard";
import { hexToRgba } from "@/infrastructure/lib/utilities/hex-to-rgba";
import { cn } from "@/lib/utils";
import { Call, Location, Sms } from "iconsax-react";
import QRCodeStyling from "qr-code-styling";
import { FunctionComponent, HTMLAttributes, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "./avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

export type BusinessCardProps = HTMLAttributes<HTMLDivElement> & {
  company: Company;
  vCard: VCard;
};

const BACKEND = import.meta.env.VITE_BACKEND_SERVER_URL + "/api/";
export const ElegantBusinessCard: FunctionComponent<BusinessCardProps> = ({
  vCard,
  company,
  className,
  ...props
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const { theme, cover, user } = vCard;
  const qrCode = new QRCodeStyling({
    width: 120,
    height: 120,
    dotsOptions: {
      color: theme.colors.primary,
      type: "rounded",
    },
  });

  useEffect(() => {
    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, [theme]);
  useEffect(() => {
    if (!user) return;
    qrCode.update({
      data:
        window.location.host +
        "/guest/employee/" +
        user.id +
        "/vcard/" +
        vCard.id,
    });
  }, [vCard]);
  return (
    <>
      <Card className={cn("w-full flex flex-col", className)} {...props}>
        <CardHeader className="flex-row items-center justify-between">
          <svg
            width="40"
            height="26"
            viewBox="0 0 40 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.639038"
              width="40"
              height="24.7219"
              rx="2"
              fill={theme.colors.primary}
            />
            <rect
              x="2.57129"
              y="3.33374"
              width="6.65019"
              height="6.65019"
              rx="3.32509"
              fill="white"
            />
            <rect
              x="30"
              y="16"
              width="6.65019"
              height="6.65019"
              rx="1"
              fill="white"
            />
            <rect
              x="10.5562"
              y="4.52039"
              width="22.1261"
              height="1.82942"
              rx="0.914709"
              fill="white"
            />
            <rect
              x="10.5562"
              y="7.23975"
              width="18.8134"
              height="1.55748"
              rx="0.778739"
              fill="white"
            />
          </svg>

          <CardTitle
            className="flex gap-4 items-center text-nowrap text-lg md:text-xl lg:text-2xl"
            style={{ color: theme.colors.primary }}
          >
            {company.name}
            <img
              src={BACKEND + company.logo}
              alt="Company logo"
              className="w-12 h-12 rounded-full"
            />
          </CardTitle>
        </CardHeader>
        <div className="h-px bg-border w-full"></div>
        <CardContent className="p-2 md:p-6">
          <div
            className="p-6 rounded-lg min-h-40"
            style={{
              background: `linear-gradient(90deg, ${hexToRgba(
                theme.colors.primary,
                0.5
              )}, ${hexToRgba(theme.colors.primary, 0)}), url(${
                cover?.startsWith("blob") ? cover : BACKEND + cover
              }) no-repeat center/cover`,
            }}
          ></div>
          <div>
            {user && (
              <div className="flex flex-col px-6">
                <Avatar className="w-32 h-32 -translate-y-1/2 border-white border-4">
                  <AvatarImage src={user?.avatar && BACKEND + user.avatar} />
                </Avatar>
                <div className="-translate-y-12 space-y-1">
                  <div className="text-2xl font-bold text-title">
                    {user.fullnameWithTitle()}
                  </div>
                  <div>{user.jobtitle}</div>
                  {user.socials && (
                    <div className="flex items-center gap-2 text-sm underline opacity-75">
                      {user.socials.map((s, key) => (
                        <Link
                          to={s.url}
                          key={key}
                          className="flex items-center gap-1"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4 px-2 items-end md:items-start">
            {user && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div
                  className={cn(
                    "p-4 bg-background border rounded-md gap-4 flex items-center"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full text-white flex items-center justify-center"
                    )}
                    style={{ background: vCard.theme.colors.primary }}
                  >
                    <Sms size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-bold text-title">Email</h3>
                    <span>{user.email}</span>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-4 bg-background border rounded-md gap-4 flex items-center"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full text-white flex items-center justify-center"
                    )}
                    style={{ background: vCard.theme.colors.primary }}
                  >
                    <Call size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-bold text-title">Phone</h3>
                    <span>{user.phoneNumber}</span>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-4 bg-background border rounded-md gap-4 flex items-center"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full text-white flex items-center justify-center"
                    )}
                    style={{ background: vCard.theme.colors.primary }}
                  >
                    <Location size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-bold text-title">Address</h3>
                    <span>{user.address}</span>
                  </div>
                </div>
                <div
                  className={cn(
                    "p-4 bg-background border rounded-md gap-4 flex items-center"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full text-white flex items-center justify-center"
                    )}
                    style={{ background: vCard.theme.colors.primary }}
                  >
                    <Location size={18} />
                  </div>
                  <div className="space-y-1 text-sm">
                    <h3 className="font-bold text-title">Work at</h3>
                    <span>{user.workaddress}</span>
                  </div>
                </div>
              </div>
            )}
            <div
              className="hidden w-32 h-32 rounded-md bg-white items-center justify-center"
              style={{
                border: `1px solid ${theme.colors.primary}`,
              }}
            >
              <div id="qr-code" ref={qrRef}></div>
            </div>
          </div>
          <span className="flex flex-col items-start md:items-center gap-2 px-4 pb-4 md:pb-0 md:flex-row text-title mt-6 pt-6 border-t">
            <span className="text-title font-bold text-sm">
              {company.name}:
            </span>
            <a
              href={"mailto:" + company.email}
              target="_blank"
              className="text-xs text-primary underline"
              style={{ color: vCard.theme.colors.primary }}
            >
              {company.email}
            </a>
            <span className="text-muted text-xs">{company.phoneNumber}</span>

            <span className="text-muted text-xs">{company.address}</span>
          </span>
        </CardContent>
      </Card>
    </>
  );
};

export const ModernBusinessCard: FunctionComponent<BusinessCardProps> = ({
  vCard,
  company,
  className,
  ...props
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const { theme, cover, user } = vCard;
  const qrCode = new QRCodeStyling({
    width: 120,
    height: 120,
    dotsOptions: {
      color: theme.colors.primary,
      type: "rounded",
    },
  });

  useEffect(() => {
    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, [theme]);
  useEffect(() => {
    if (!user) return;
    qrCode.update({
      data:
        window.location.host +
        "/guest/employee/" +
        user.id +
        "/vcard/" +
        vCard.id,
    });
  }, [vCard]);
  return (
    <Card className={cn("w-full flex flex-col", className)} {...props}>
      <CardHeader className="flex-row items-center justify-between">
        <svg
          width="40"
          height="26"
          viewBox="0 0 40 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.639038"
            width="40"
            height="24.7219"
            rx="2"
            fill={theme.colors.primary}
          />
          <rect
            x="2.57129"
            y="3.33374"
            width="6.65019"
            height="6.65019"
            rx="3.32509"
            fill="white"
          />
          <rect
            x="30"
            y="16"
            width="6.65019"
            height="6.65019"
            rx="1"
            fill="white"
          />
          <rect
            x="10.5562"
            y="4.52039"
            width="22.1261"
            height="1.82942"
            rx="0.914709"
            fill="white"
          />
          <rect
            x="10.5562"
            y="7.23975"
            width="18.8134"
            height="1.55748"
            rx="0.778739"
            fill="white"
          />
        </svg>

        <CardTitle
          className="flex gap-4 items-center text-nowrap text-lg md:text-xl lg:text-2xl"
          style={{ color: theme.colors.primary }}
        >
          {company.name}
          <img
            src={BACKEND + company.logo}
            alt="Company logo"
            className="w-12 h-12 rounded-full"
          />
        </CardTitle>
      </CardHeader>
      <div className="h-px bg-border w-full"></div>
      <CardContent className="p-2 md:p-6">
        <div className="rounded-lg overflow-hidden">
          <div
            className="p-6 min-h-40"
            style={{
              background: `linear-gradient(90deg, ${hexToRgba(
                theme.colors.primary,
                0.5
              )}, ${hexToRgba(theme.colors.primary, 0.5)}), url(${
                cover?.startsWith("blob") ? cover : BACKEND + cover
              }) no-repeat center/cover`,
            }}
          ></div>
          <div
            className="p-4 md:p-6 min-h-40 pt-0 relative"
            style={{
              background: hexToRgba(theme.colors.primary, 0.15),
              color: theme.colors.primary,
            }}
          >
            {user && (
              <div className="absolute bottom-4 right-1/2 translate-x-1/2 md:translate-x-0 md:right-4 text-sm">
                {user.jobtitle}
              </div>
            )}
            {user && (
              <div className="flex flex-col px-6 items-center">
                <Avatar className="w-32 h-32 -translate-y-1/2 border-white border-4">
                  <AvatarImage src={user?.avatar && BACKEND + user.avatar} />
                </Avatar>
                <div className="-translate-y-12 space-y-1 text-center">
                  <div className="text-2xl font-bold">
                    {user.fullnameWithTitle()}
                  </div>
                  <div>{user.email}</div>
                  <div>{user.phoneNumber}</div>
                  {user.socials && (
                    <div className="flex items-center gap-2 text-sm underline opacity-75">
                      {user.socials.map((s, key) => (
                        <Link
                          to={s.url}
                          key={key}
                          className="flex items-center gap-1"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div>
          {user && (
            <div className="flex flex-col px-6">
              <Avatar className="w-32 h-32 -translate-y-1/2 border-white border-4">
                <AvatarImage src={user?.avatar && BACKEND + user.avatar} />
              </Avatar>
              <div className="-translate-y-12 space-y-1">
                <div className="text-2xl font-bold text-title">
                  {user.fullnameWithTitle()}
                </div>
                <div>{user.jobtitle}</div>
                {user.socials && (
                  <div className="flex items-center gap-2 text-sm underline opacity-75">
                    {user.socials.map((s, key) => (
                      <Link
                        to={s.url}
                        key={key}
                        className="flex items-center gap-1"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 px-2 items-end md:items-start">
          {user && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div
                className={cn(
                  "p-4 bg-background border rounded-md gap-4 flex items-center"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full text-white flex items-center justify-center"
                  )}
                  style={{ background: vCard.theme.colors.primary }}
                >
                  <Sms size={18} />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-bold text-title">Email</h3>
                  <span>{user.email}</span>
                </div>
              </div>
              <div
                className={cn(
                  "p-4 bg-background border rounded-md gap-4 flex items-center"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full text-white flex items-center justify-center"
                  )}
                  style={{ background: vCard.theme.colors.primary }}
                >
                  <Call size={18} />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-bold text-title">Phone</h3>
                  <span>{user.phoneNumber}</span>
                </div>
              </div>
              <div
                className={cn(
                  "p-4 bg-background border rounded-md gap-4 flex items-center"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full text-white flex items-center justify-center"
                  )}
                  style={{ background: vCard.theme.colors.primary }}
                >
                  <Location size={18} />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-bold text-title">Address</h3>
                  <span>{user.address}</span>
                </div>
              </div>
              <div
                className={cn(
                  "p-4 bg-background border rounded-md gap-4 flex items-center"
                )}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full text-white flex items-center justify-center"
                  )}
                  style={{ background: vCard.theme.colors.primary }}
                >
                  <Location size={18} />
                </div>
                <div className="space-y-1 text-sm">
                  <h3 className="font-bold text-title">Work at</h3>
                  <span>{user.workaddress}</span>
                </div>
              </div>
            </div>
          )}
          <div
            className="hidden w-32 h-32 rounded-md bg-white items-center justify-center"
            style={{
              border: `1px solid ${theme.colors.primary}`,
            }}
          >
            <div id="qr-code" ref={qrRef}></div>
          </div>
        </div> */}
        <span className="flex flex-col items-start md:items-center gap-2 px-4 pb-4 md:pb-0 md:flex-row text-title mt-6 pt-6 border-t">
          <span className="text-title font-bold text-sm">{company.name}:</span>
          <a
            href={"mailto:" + company.email}
            target="_blank"
            className="text-xs text-primary underline"
            style={{ color: vCard.theme.colors.primary }}
          >
            {company.email}
          </a>
          <span className="text-muted text-xs">{company.phoneNumber}</span>

          <span className="text-muted text-xs">{company.address}</span>
        </span>
      </CardContent>
    </Card>
  );
};

export const BusinessCard: FunctionComponent<BusinessCardProps> = (props) => {
  switch (props.vCard.structure) {
    case "ELEGANT": {
      return <ElegantBusinessCard {...props} />;
    }
    case "MODERN": {
      return <ModernBusinessCard {...props} />;
    }
    case "MINIMAL": {
      return <>Card</>;
    }
    case "SIMPLE": {
      return <>Card</>;
    }
    case "FLAT": {
      return <>Card</>;
    }
  }
};
