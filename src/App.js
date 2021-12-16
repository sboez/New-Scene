import Scene from "./scripts/Scene";
import Load from "./scripts/Load";
import Gui from "./scripts/Gui";

let scene = null;
let load = null;
let gui = null;

const App = async () => {
   scene = new Scene();
   load = new Load(scene);
   gui = new Gui(load);

   await load.loadFile("./models/street_car.glb");

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
