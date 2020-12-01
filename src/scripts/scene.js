import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

export default class Scene extends THREE.Scene {
	constructor() {
		super();

		this.setScene();
	}

	setScene() {
		this.background = new THREE.Color(0xa0a0a0);

		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
		this.camera.position.set(0, 100, 200);

		this.plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 200), new THREE.MeshPhongMaterial({ color: 0xcfcfcf, side: THREE.DoubleSide }));
		this.plane.rotation.x = -Math.PI / 2;
		this.plane.receiveShadow = true;
		this.add(this.plane);
		
		this.setLights();
		this.setRenderer();
		this.setControls();
	}

	setLights() {
		this.light = new THREE.HemisphereLight(0xffffff, 0x404040, 1); 
		this.add(this.light);
	}

	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	setControls() {		
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.update();
	}
}
