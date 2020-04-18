let gui = new dat.GUI();

function addGUI(object) {
	const params = {
		posX: 0,
	    posY: 0,
	    scaleX: 0,
	    scaleY: 0,
	    scaleZ: 0,
	    rotY: 0,
	    rotX: 0,
	    turn: true,
		rotate: function() {
			this.turn == false ? rotateOn = false : rotateOn = true;
		},
		scaleUp: function() {
			model.scale.x += 1;
			model.scale.y += 1;
			model.scale.z += 1;
		},
		scaleDown: function() {
			model.scale.x -= 1;
			model.scale.y -= 1;
			model.scale.z -= 1;
		}
	}
	setGUI(params);
}

function setGUI(params) {
	setPosition(params);
	setScale(params);
	setRotation(params);
}

function setPosition(params) {
	const folderPos = gui.addFolder('Position');
	folderPos.add(params, 'posX', -140, 140).name('X').onChange(() => { 
	    model.position.x = (params.posX);
	});
	folderPos.add(params, 'posY', -140, 140).name('Y').onChange(() => { 
	    model.position.z = (params.posY);
	});
}

function setScale(params) {
	const folderScale = gui.addFolder('Scale');
	folderScale.add(params, 'scaleX', -500, 500).name('X').onChange(() => { 
	    model.scale.x = (params.scaleX);
	});
	folderScale.add(params, 'scaleY', -500, 500).name('Y').onChange(() => { 
	    model.scale.y = (params.scaleY);
	});
	folderScale.add(params, 'scaleZ', -500, 500).name('Z').onChange(() => { 
	    model.scale.z = (params.scaleZ);
	});
	folderScale.add(params, 'scaleUp').name('+');
	folderScale.add(params, 'scaleDown').name('-');
}

function setRotation(params) {
	const folderRot = gui.addFolder('Rotation');
	folderRot.add(params, 'rotY', -5, 5).name('Y').onChange(() => { 
	    model.rotation.y = (params.rotY);
	});
    folderRot.add(params, 'rotX', -5, 5).name('X').onChange(() => { 
	    model.rotation.x = (params.rotX);
	});
	folderRot.add(params, 'turn').name('Rotate').onChange(() => {
		params.rotate();
	});
}
