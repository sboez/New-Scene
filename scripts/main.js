let Scene;

function letsPlay() {
	init();
	animate();
}

function init() {
	Scene = new SceneInit();
	Scene.createScene();
	Scene.createRenderer();

	document.body.appendChild(Scene.renderer.domElement);
}

function animate() {
	requestAnimationFrame( animate );
	Scene.renderer.render( Scene.scene, Scene.camera );
}

letsPlay();
