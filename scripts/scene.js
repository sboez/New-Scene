class SceneInit {
	createScene() {
		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
		this.camera.position.z = 5;

		this.geometry = new THREE.BoxGeometry();
		this.material = new THREE.MeshBasicMaterial({color: 0xff00ff});
		this.cube = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.cube)
	}
	createRenderer() {
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}
}
