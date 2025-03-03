import { defineConfig } from 'rasengan';
import tailwindcss from '@tailwindcss/vite';

<<<<<<< HEAD
export default defineConfig(async () => {
  return {
    vite: {
      plugins: [tailwindcss()],
    },
  };
=======
export default defineConfig({
  reactStrictMode: true,
  server: {
    host: "0.0.0.0",
  },
>>>>>>> 464aa4626ae71763fdf2f4cbe943f1745524aa6f
});
