import { Topbar } from "@/components/topbar";
import { LayoutComponent, Outlet, useLocation } from "rasengan";
import React, { useEffect, useRef } from "react";

const AppLayout: LayoutComponent = () => {
  const { pathname } = useLocation();
  const { current: loaded } = useRef<boolean>(false);
  useEffect(() => {
    console.log("log");
  }, [pathname]);
  return (
    <React.Fragment>
      <Topbar />
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
