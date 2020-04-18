let Scene, Load, model, rotateOn = true;

function letsPlay() {
	init();
	animate();
}

async function init() {
	Scene = new SceneInit();
	Scene.createScene();

	Load = new LoadInit();
	await Load.loadFile("assets/models/street_car.glb");

	let controls = new THREE.OrbitControls(Scene.camera, Scene.renderer.domElement);
	controls.update();

	addGUI(model);

	window.addEventListener('resize', onWindowResize, false);
	document.body.appendChild(Scene.renderer.domElement);
}

function rotateModel() {
	if (rotateOn == true) model.rotation.y += 0.005;
}

function onWindowResize() {
	Scene.camera.aspect = window.innerWidth / window.innerHeight;
	Scene.camera.updateProjectionMatrix();
	Scene.renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	Scene.renderer.render(Scene.scene, Scene.camera);
	rotateModel();
}

letsPlay();
