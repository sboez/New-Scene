import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "./Scene";

let scene = new Scene();
export let gltfModel;

const loadFile = async function (path) {
   const loader = new GLTFLoader();
   const obj = await loader.loadAsync(path);
   return obj;
};

export const loadGltf = async (path) => {
   const model = await loadFile(path);
   gltfModel = model.scene;

   gltfModel.traverse((child) => {
      if (child.isMesh) {
         child.castShadow = true;
         child.receiveShadow = true;
      }
   });
   gltfModel.scale.multiplyScalar(40);
   scene.add(gltfModel);
};
