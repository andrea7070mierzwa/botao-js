import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["w76ch3-5173.csb.app", "w76ch3-50003.csb.app", ".csb.app"],
  },
});
