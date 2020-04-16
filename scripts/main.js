let Scene, Load;

function letsPlay() {
	init();
	animate();
}

function init() {
	Scene = new SceneInit();
	Scene.createScene();

	Load = new LoadInit();

	let controls = new THREE.OrbitControls(Scene.camera, Scene.renderer.domElement);
	controls.update();

	window.addEventListener('resize', onWindowResize, false);
	document.body.appendChild(Scene.renderer.domElement);
}

function onWindowResize() {
	Scene.camera.aspect = window.innerWidth / window.innerHeight;
	Scene.camera.updateProjectionMatrix();
	Scene.renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	Scene.renderer.render(Scene.scene, Scene.camera);
}

letsPlay();
