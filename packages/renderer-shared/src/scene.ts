import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Texture,
} from "@babylonjs/core";

export function createScene(engine: Engine, canvas: HTMLCanvasElement): Scene {
  const scene = new Scene(engine);

  const camera = new ArcRotateCamera(
    "camera1",
    -Math.PI / 2,
    Math.PI / 2.5,
    10,
    new Vector3(0, 0, 0),
    scene
  );
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  const light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;

  const sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene
  );
  sphere.position.y = 1;

  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene
  );

  const sphereMaterial = new StandardMaterial("sphereMat", scene);
  sphereMaterial.diffuseColor = new Color3(0.8, 0.2, 0.2);
  sphere.material = sphereMaterial;

  const groundMaterial = new StandardMaterial("groundMat", scene);
  // Ensure this texture is accessible or use a local one for Electron packaging.
  // For simplicity, using a playground texture. For a real app, host it or include it.
  try {
    groundMaterial.diffuseTexture = new Texture(
      "https://www.babylonjs-playground.com/textures/ground.jpg",
      scene,
      undefined,
      undefined,
      undefined,
      () => {
        // Texture loaded successfully
      },
      (message, exception) => {
        console.error("Failed to load ground texture:", message, exception);
        // Fallback color if texture fails
        groundMaterial.diffuseColor = new Color3(0.5, 0.5, 0.3);
      }
    );
  } catch (e) {
    console.error("Error creating texture:", e);
    groundMaterial.diffuseColor = new Color3(0.5, 0.5, 0.3); // Fallback
  }
  ground.material = groundMaterial;

  return scene;
}

export function startRenderLoop(engine: Engine, scene: Scene): void {
  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });
}
