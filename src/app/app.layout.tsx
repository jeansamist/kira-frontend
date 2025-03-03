import { Topbar } from "@/components/topbar";
import { LayoutComponent, Outlet } from "rasengan";
import React from "react";

const AppLayout: LayoutComponent = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Outlet />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
