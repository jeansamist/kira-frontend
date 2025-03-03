import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "rasengan";

export default defineConfig(async () => {
  return {
    vite: {
      plugins: [tailwindcss()],
    },
    reactStrictMode: true,
    server: {
      host: "0.0.0.0",
    },
  };
});
