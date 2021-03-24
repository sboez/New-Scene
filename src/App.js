import Scene from './scripts/Scene';
import Load from './scripts/Load';
import Gui from './scripts/Gui';

class App {
	constructor() {
		this.scene = null;
		this.load = null;
		this.gui = null;

		this.letsPlay();
	}

	async letsPlay() {
		this.scene = new Scene();
		this.load = new Load(this.scene);
		this.gui = new Gui(this.load);

		await this.load.loadFile("./models/street_car.glb");

		this.init();
		this.animate();
	}

	init() {
		document.body.appendChild(this.scene.renderer.domElement);
		window.addEventListener('resize', this.onWindowResize.bind(this), false);
	}

	rotateModel() {
		this.load.model.rotation.y += 0.005;
	}

	onWindowResize() {
		this.scene.camera.aspect = window.innerWidth / window.innerHeight;
		this.scene.camera.updateProjectionMatrix();
		this.scene.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));
		this.scene.renderer.render(this.scene, this.scene.camera);
		// this.rotateModel();
	}
}

new App();
