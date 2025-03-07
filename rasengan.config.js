import { configure } from "@rasenganjs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "rasengan";
import { rasengan } from "rasengan/plugin";

export default defineConfig(async () => {
  return {
    vite: {
      plugins: [tailwindcss(), rasengan({ adapter: configure() })],
    },
    reactStrictMode: true,
    server: {
      host: "0.0.0.0",
    },
  };
});
