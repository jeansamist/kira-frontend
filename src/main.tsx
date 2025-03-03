import AppRouter from "@/app/app.router";
import "@/styles/index.css";
import "@rasenganjs/image/css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type AppProps } from "rasengan";

const queryClient = new QueryClient();
export default function App({ Component, children }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component router={AppRouter}>{children}</Component>
    </QueryClientProvider>
  );
}
