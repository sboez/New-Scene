import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default class Load {
	constructor(scene) {
		this.scene = scene;
	}

	loadFile(path) {
		this.extension = path.split('.').pop().toLowerCase();
		switch (this.extension) {
			case 'glb':
			case 'gltf': 
				this.loadGltf(path);
				break;
			case 'fbx':
				this.loadFbx(path);
				break;
		}
	}

	loadGltf(path) {
		return new Promise((resolve) => {
			const loader = new GLTFLoader()
	    	loader.load(path, gltf => {
				this.model = gltf.scene;
				this.model.traverse((object) => {
					if (object.isMesh) {
						object.castShadow = true;
						object.receiveShadow = true;
					}
				});
				this.model.scale.multiplyScalar(40);
				this.scene.add(this.model);
				resolve(this.model);
			});
		});
	}

	loadFbx(path) {
		const loader = new FBXLoader();
		loader.load(path, object => {
			object.traverse((child) => {
				if (child.isMesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			this.scene.add(object);
		});
	}
}
