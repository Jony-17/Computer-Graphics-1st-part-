'use strict';

class Webgl {

  constructor() {
        
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();        
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x607475);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    //Posição da camera
    this.camera.position.x = 150;
    this.camera.position.y = 450;
    this.camera.position.z = 1000;
    this.camera.lookAt(this.scene.position);

    //Cor ambiente
    var ambiColor = "#0c0c0c";
    var ambientLight = new THREE.AmbientLight(ambiColor);
    this.scene.add(ambientLight);

    this.trackballControls = new THREE.TrackballControls(this.camera);
    this.trackballControls.enabled = false;

    this.orbitControls = new THREE.OrbitControls(this.camera);
    this.orbitControls.enabled = false;

    this.camControls = new THREE.FirstPersonControls(this.camera);
    this.camControls.enabled = false;
    
    this.flyControls = new THREE.FlyControls(this.camera);
    this.flyControls.enabled = false;

    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new GUI(this);
  }
  
  render () {
    let delta = this.clock.getDelta();

    this.trackballControls.update(delta);
    this.orbitControls.update(delta);
    //this.camControls.update(delta);
    this.flyControls.update(delta);

    //render the scene
    this.renderer.render(this.scene, this.camera);
  }
}