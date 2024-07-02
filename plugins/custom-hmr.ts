import type { PluginOption } from "vite";

export default function CustomHmr(): PluginOption {
  return {
    name: "custom-hmr",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".rs")) {
        console.log("recompiling rust...");
        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  };
}
