import { Engine } from "@babylonjs/core";
import { createScene, startRenderLoop } from "@ws/main";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
if (!canvas) throw new Error("Render canvas not found!");

const engine = new Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
  disableWebGL2Support: false, // Set to true to force WebGL1 if needed
});

const scene = createScene(engine, canvas);
startRenderLoop(engine, scene);
