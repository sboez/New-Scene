import * as dat from 'dat.gui';

const gui = new dat.GUI();

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
			scaleUp: function() {
				this.load.model.scale.x += 1;
				this.load.model.scale.y += 1;
				this.load.model.scale.z += 1;
			},
			scaleDown: function() {
				this.load.model.scale.x -= 1;
				this.load.model.scale.y -= 1;
				this.load.model.scale.z -= 1;
			}
		}
		this.setGUI(params);
	}
	
	setGUI(params) {
		this.setPosition(params);
		this.setScale(params);
		this.setRotation(params);
	}
	
	setPosition(params) {
		const folderPos = gui.addFolder('Position');
		folderPos.add(params, 'posX', -140, 140).name('X').onChange(() => { 
			this.load.model.position.x = (params.posX);
		});
		folderPos.add(params, 'posY', -140, 140).name('Y').onChange(() => { 
			this.load.model.position.z = (params.posY);
		});
		folderPos.add(params, 'posZ', -140, 140).name('Z').onChange(() => { 
			this.load.model.position.y = (params.posZ);
		});
	}
	
	setScale(params) {
		const folderScale = gui.addFolder('Scale');
		folderScale.add(params, 'scaleX', -500, 500).name('X').onChange(() => { 
			this.load.model.scale.x = (params.scaleX);
		});
		folderScale.add(params, 'scaleY', -500, 500).name('Y').onChange(() => { 
			this.load.model.scale.y = (params.scaleY);
		});
		folderScale.add(params, 'scaleZ', -500, 500).name('Z').onChange(() => { 
			this.load.model.scale.z = (params.scaleZ);
		});
	}
	
	setRotation(params) {
		const folderRot = gui.addFolder('Rotation');
		folderRot.add(params, 'rotY', -5, 5).name('Y').onChange(() => { 
			this.load.model.rotation.y = (params.rotY);
		});
		folderRot.add(params, 'rotX', -5, 5).name('X').onChange(() => { 
			this.load.model.rotation.x = (params.rotX);
		});
	}	
}
