import Scene from "./scripts/Scene";
import Gui from "./scripts/Gui";
import { loadGltf, gltfModel } from "./scripts/load";

let scene = null;
let gui = null;

const App = async () => {
   scene = new Scene();
   gui = new Gui();

   await loadGltf("./models/street_car.glb");
   scene.add(gltfModel);

   init();
   animate();
};

const init = () => {
   document.body.appendChild(scene.renderer.domElement);
   window.addEventListener("resize", onWindowResize, false);
};

const rotateModel = () => {
   load.model.rotation.y += 0.005;
};

const onWindowResize = () => {
   scene.camera.aspect = window.innerWidth / window.innerHeight;
   scene.camera.updateProjectionMatrix();
   scene.renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
   requestAnimationFrame(animate);
   scene.renderer.render(scene, scene.camera);
   // this.rotateModel();
};

App();
