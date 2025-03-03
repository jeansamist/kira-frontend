import AppLayout from "@/app/app.layout";
import Home from "@/app/home.page";
import { RouterComponent, defineRouter } from "rasengan";

class AppRouter extends RouterComponent {}

export default defineRouter({
  imports: [],
  layout: AppLayout,
  pages: [Home],
})(AppRouter);
