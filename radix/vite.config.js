import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    console.clear();
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
