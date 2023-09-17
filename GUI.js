'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;
        
    var guiVars = {
      "Limpar ecrã" : () => {
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);  
        },

      "Ver caixa" : () => {
        //Criação da caixa inicial sem tampo
        var table = new Caixa(100, 30, 30, 1);
        this.webgl.scene.add(table);
      },
      
      "Câmera em perspetiva" : () => {
          this.webgl.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
          this.webgl.camera.position.x = 100;
          this.webgl.camera.position.y = 500;
          this.webgl.camera.position.z = 600;
          this.webgl.camera.lookAt(this.webgl.scene.position);
      },

      "Câmera ortográfica" : () => { 
          this.webgl.camera = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 1, 1000);
          this.webgl.camera.position.x = 120;
          this.webgl.camera.position.y = 60;
          this.webgl.camera.position.z = 180;
          this.webgl.camera.lookAt(this.webgl.scene.position);
      },

      "Ativar TrackBall" : () => {
        this.webgl.trackballControls = new THREE.TrackballControls(this.webgl.camera);
        this.webgl.orbitControls = new THREE.OrbitControls(this.webgl.camera);
        this.webgl.camControls = new THREE.FirstPersonControls(this.webgl.camera);
        this.webgl.flyControls = new THREE.FlyControls(this.webgl.camera);
        
        //Inicialização do controlo trackball a true
        this.webgl.trackballControls.enabled = true;
        //Caso o que foi iniciado na linha anterior seja verdade, prossegue
        if (this.webgl.trackballControls.enabled === true){
        //Propriedades do modo trackball
        this.webgl.trackballControls.rotateSpeed = 1.0;
        this.webgl.trackballControls.zoomSpeed = 1.0;
        this.webgl.trackballControls.panSpeed = 1.0;
        this.webgl.trackballControls.staticMoving = true;

        //Colocação dos outros controlos a false para que não haja conflito entre eles
        this.webgl.orbitControls.enabled = false;
        this.webgl.camControls.enabled = false;
        this.webgl.flyControls.enabled = false;
        
        //this.webgl.trackballControls.update(delta);
        console.log("Trackball ativada!");
      }
      else {
        console.log("Trackball desativada!");
      }

      },
      
      "Ativar Orbit" : () => {
        this.webgl.orbitControls = new THREE.OrbitControls(this.webgl.camera);
        this.webgl.trackballControls = new THREE.TrackballControls(this.webgl.camera);
        this.webgl.camControls = new THREE.FirstPersonControls(this.webgl.camera);
        this.webgl.flyControls = new THREE.FlyControls(this.webgl.camera);

        //Inicialização do controlo orbit a true
        this.webgl.orbitControls.enabled = true;
        //Caso o que foi iniciado na linha anterior seja verdade, prossegue
        if (this.webgl.orbitControls.enabled === true){
        //Propriedades do modo orbit
        this.webgl.orbitControls.autoRotate = true;

        //Colocação dos outros controlos a false para que não haja conflito entre eles
        this.webgl.trackballControls.enabled = false;
        this.webgl.camControls.enabled = false;
        this.webgl.flyControls.enabled = false;

        console.log("Orbit ativada!");
      }
      else {
        console.log("Orbit desativada!");
      }

      },

      "Ativar FirstPerson" : () => {
        /*this.webgl.camControls = new THREE.FirstPersonControls(this.webgl.camera);
        this.webgl.trackballControls = new THREE.TrackballControls(this.webgl.camera);
        this.webgl.orbitControls = new THREE.OrbitControls(this.webgl.camera);
        this.webgl.flyControls = new THREE.FlyControls(this.webgl.camera);

        //Inicialização do controlo first person a true
        this.webgl.camControls.enabled = true;
        //Caso o que foi iniciado na linha anterior seja verdade, prossegue
        if (this.webgl.camControls.enabled === true){
        //Propriedades do modo first person
        this.webgl.camControls.lookSpeed = 0.4;
        this.webgl.camControls.movementSpeed = 20;
        this.webgl.camControls.noFly = true;
        this.webgl.camControls.lookVertical = true;
        this.webgl.camControls.constrainVertical = true;
        this.webgl.camControls.verticalMin = 1.0;
        this.webgl.camControls.verticalMax = 2.0;
        this.webgl.camControls.lon = -150;
        this.webgl.camControls.lat = 120;

        //Colocação dos outros controlos a false para que não haja conflito entre eles
        this.webgl.trackballControls.enabled = false;
        this.webgl.orbitControls.enabled = false;
        this.webgl.flyControls.enabled = false;

        console.log("FirstPerson ativado!");
      }
      else {
        console.log("FirstPerson desativado!");
      }*/
      },

      "Ativar Fly" : () => {
        this.webgl.flyControls = new THREE.FlyControls(this.webgl.camera);
        this.webgl.trackballControls = new THREE.TrackballControls(this.webgl.camera);
        this.webgl.orbitControls = new THREE.OrbitControls(this.webgl.camera);
        this.webgl.camControls = new THREE.FirstPersonControls(this.webgl.camera);

        this.webgl.flyControls.enabled = true;

        if (this.webgl.flyControls.enabled === true){
          //Propriedades do modo fly
          this.webgl.flyControls.movementSpeed = 100;
          this.webgl.flyControls.domElement = document.querySelector('#WebGL-output');
          this.webgl.flyControls.rollSpeed = Math.PI / 24;
          this.webgl.flyControls.autoForward = true;
          this.webgl.flyControls.dragToLook = false;

          //Colocação dos outros controlos a false para que não haja conflito entre eles
          this.webgl.trackballControls.enabled = false;
          this.webgl.orbitControls.enabled = false;
          this.webgl.camControls.enabled = false;

        console.log("Fly ativada!");
      }
      else {
        console.log("Fly desativada!");
      }

      },

      "Ver estante" : () => {
        //Criação de apenas uma estante
        var estante = new Estante(320, 5, 44, 40, 25, 20, 1);
        this.webgl.scene.add(estante);
      },

      "Ver armazém" : () => { 
          //Criação da caixa para o Armazem
          var armazem = new Armazem(1000, 300, 1000, 1);
          this.webgl.scene.add(armazem);
          armazem.translateX(-500);
          armazem.translateZ(-500);
          
          //Criação das 3 estantes
          for (let x = 0; x < 3; x++) {
            var estantes = new Estante(320, 5, 44, 40, 25, 20, 1);
            estantes.translateZ(140*x);
            this.webgl.scene.add(estantes);
        }
      },

      "Ver robot" : () => {
        //Criação do robot com translações de modo a ficar perto da primeira estante
        this.robot = new Robot(100, 200, 90, 1);
        this.robot.translateX(-400);
        this.robot.translateY(130);
        this.robot.translateZ(-20);
        this.webgl.scene.add(this.robot);
      }, 

      "Ativar robot" : () => {
        //Chamada do método de movimentação do robot
        if (this.robot) {
          this.robot.moveRobotContinuously();
        }
      }
    };

    var gui = new dat.GUI( { autoPlace: false, width: 300} );
    gui.domElement.id = 'gui';

    gui.add(guiVars, 'Limpar ecrã');
    gui.add(guiVars, 'Ver caixa');
    gui.add(guiVars, 'Câmera em perspetiva');
    gui.add(guiVars, 'Câmera ortográfica');  
    gui.add(guiVars, 'Ativar TrackBall');
    gui.add(guiVars, 'Ativar Orbit');
    gui.add(guiVars, 'Ativar FirstPerson');
    gui.add(guiVars, 'Ativar Fly');
    gui.add(guiVars, 'Ver estante'); 
    gui.add(guiVars, 'Ver armazém');
    gui.add(guiVars, 'Ver robot');
    gui.add(guiVars, 'Ativar robot');

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
    
    //Ortografia
    console.log(encodeURI("á é í ó ú"));
    console.log(decodeURI("%C3%A1%20%C3%A9%20%C3%AD%20%C3%B3%20%C3%BA"));
    
  }
}