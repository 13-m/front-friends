import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@page": path.resolve(__dirname, "./src/page"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pageComponents": path.resolve(__dirname, "./src/components/pages"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@svg": path.resolve(__dirname, "./src/assets/svg"),
    },
  },
  plugins: [react()],
});
