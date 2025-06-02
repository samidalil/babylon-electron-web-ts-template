import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.join(__dirname, "src_renderer"),
  base: "./", // Important for Electron file:// protocol
  build: {
    outDir: path.join(__dirname, "dist_renderer"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Ensures predictable asset names if needed, though hashes are good for caching
        assetFileNames: `assets/[name].[hash][extname]`,
        chunkFileNames: `assets/[name].[hash].js`,
        entryFileNames: `assets/[name].[hash].js`,
      },
    },
  },
  resolve: {
    // Usually not needed if workspace linking and tsconfig paths work
    // alias: {
    //   "@renderer-shared": path.resolve(__dirname, "../renderer-shared/src"),
    // },
  },
});
