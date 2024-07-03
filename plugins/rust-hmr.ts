import subprocess from "node:child_process";
import type { PluginOption } from "vite";

export default function RustHmr(): PluginOption {
  return {
    name: "rust-hmr",
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".rs")) {
        console.log("recompiling wasm binary...");
        subprocess.execSync("npm run wasm:build");
        server.ws.send({
          type: "full-reload",
          path: "*",
        });
      }
    },
  };
}
