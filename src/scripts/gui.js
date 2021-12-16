import GUI from "lil-gui";
import { gltfModel } from "./load";

const gui = new GUI();

export default class Gui {
   constructor(load) {
      this.load = load;

      this.addGUI();
   }

   addGUI() {
      const params = {
         posX: 0,
         posY: 0,
         posZ: 0,
         scaleX: 0,
         scaleY: 0,
         scaleZ: 0,
         rotY: 0,
         rotX: 0,
         scaleUp: function () {
            gltfModel.scale.x += 1;
            gltfModel.scale.y += 1;
            gltfModel.scale.z += 1;
         },
         scaleDown: function () {
            gltfModel.scale.x -= 1;
            gltfModel.scale.y -= 1;
            gltfModel.scale.z -= 1;
         },
      };
      this.setGUI(params);
   }

   setGUI(params) {
      this.setPosition(params);
      this.setScale(params);
      this.setRotation(params);
   }

   setPosition(params) {
      const folderPos = gui.addFolder("Position");
      folderPos
         .add(params, "posX", -140, 140)
         .name("X")
         .onChange(() => {
            gltfModel.position.x = params.posX;
         });
      folderPos
         .add(params, "posY", -140, 140)
         .name("Y")
         .onChange(() => {
            gltfModel.position.z = params.posY;
         });
      folderPos
         .add(params, "posZ", -140, 140)
         .name("Z")
         .onChange(() => {
            gltfModel.position.y = params.posZ;
         });
   }

   setScale(params) {
      const folderScale = gui.addFolder("Scale");
      folderScale
         .add(params, "scaleX", -500, 500)
         .name("X")
         .onChange(() => {
            gltfModel.scale.x = params.scaleX;
         });
      folderScale
         .add(params, "scaleY", -500, 500)
         .name("Y")
         .onChange(() => {
            gltfModel.scale.y = params.scaleY;
         });
      folderScale
         .add(params, "scaleZ", -500, 500)
         .name("Z")
         .onChange(() => {
            gltfModel.scale.z = params.scaleZ;
         });
   }

   setRotation(params) {
      const folderRot = gui.addFolder("Rotation");
      folderRot
         .add(params, "rotY", -5, 5)
         .name("Y")
         .onChange(() => {
            gltfModel.rotation.y = params.rotY;
         });
      folderRot
         .add(params, "rotX", -5, 5)
         .name("X")
         .onChange(() => {
            gltfModel.rotation.x = params.rotX;
         });
   }
}
