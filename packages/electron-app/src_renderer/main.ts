import { Engine } from "@babylonjs/core";
import {
  createScene,
  startRenderLoop,
} from "@babylon-universal/renderer-shared";

// Example of using the exposed API from preload
async function logAppVersion() {
  if (
    window.electronAPI &&
    typeof window.electronAPI.getAppVersion === "function"
  ) {
    try {
      const version = await window.electronAPI.getAppVersion();
      console.log("Electron App Version (from preload):", version);
    } catch (error) {
      console.error("Error getting app version via preload:", error);
    }
  } else {
    console.warn(
      "window.electronAPI.getAppVersion is not available. Preload script might not have exposed it correctly."
    );
  }
}

logAppVersion();

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
if (!canvas) {
  throw new Error("Render canvas not found in Electron renderer!");
}

const engine = new Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
  disableWebGL2Support: false,
});

const scene = createScene(engine, canvas);
startRenderLoop(engine, scene);
