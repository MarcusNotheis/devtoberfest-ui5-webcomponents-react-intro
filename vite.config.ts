import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/devtoberfest-ui5-webcomponents-react-intro/",
  plugins: [react()],
});
