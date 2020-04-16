class LoadInit {
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
		const loader = new THREE.GLTFLoader()
    	loader.load(path, function(gltf) {
			gltf.scene.traverse(function(child) {
				if (child.isMesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			model = gltf.scene;
			model.scale.multiplyScalar(40);
			Scene.scene.add(gltf.scene);
		});
	}
	loadFbx(path) {
		const loader = new THREE.FBXLoader();
		loader.load(path, function(object) {
			object.traverse(function(child) {
				if (child.isMesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});
			Scene.scene.add(object);
		});
	}
}
