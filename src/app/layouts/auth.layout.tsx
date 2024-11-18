import { Toaster } from "@/components/ui/toaster";
import { isLogin as isLoginService } from "@/services/auth.service";
import { LayoutComponent, Outlet, useNavigate } from "rasengan";
import React, { useEffect } from "react";

export const AuthLayout: LayoutComponent = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function isLogin() {
      const isLogin = await isLoginService();
      if (isLogin) navigate("/");
    }
    isLogin();
  }, []);

  return (
    <React.Fragment>
      <div className="mx-auto pt-6 md:pt-12 xl:pt-24 min-h-screen flex flex-col">
        <div className="h-full flex-1 border border-b-0 p-6 rounded-t-3xl bg-white shadow-2xl">
          <div className="w-full lg:w-2/3 xl:w-1/2 mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </React.Fragment>
  );
};
AuthLayout.path = "/auth";
