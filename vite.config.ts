// @lovable.dev/vite-tanstack-config already includes the required plugins.
// Do not add duplicate TanStack/Vite plugins manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
    },
  },
});
