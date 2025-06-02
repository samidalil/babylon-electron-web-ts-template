import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // If using Yarn PnP, Vite might need a plugin for PnP resolution or careful pathing.
  // For standard node_modules linking via Yarn workspaces, this should be okay.
  // resolve: {
  //   alias: { // Not strictly needed if tsconfig paths and workspace linking work
  //     '@renderer-shared': path.resolve(__dirname, '../renderer-shared/src')
  //   }
  // },
  server: {
    port: 3000,
    open: true,
  },
});
