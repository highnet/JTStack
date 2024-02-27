import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import styleX from "vite-plugin-stylex";
import path from "path";

export default defineConfig({
  plugins: [react(), styleX()],
  resolve: {
  alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})