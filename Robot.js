'use strict';

class Robot extends THREE.Object3D {
  
  constructor(l, a, p, e) {//largura, altura, profundidade, espessura
    super();

    this.corpo = Robot.createMesh(new THREE.BoxGeometry(l, a, p, 16, 16, 16), 0x003366); //corpo
    this.corpo.translateX(l/2);
    this.corpo.translateY(e/2);
    this.corpo.translateZ(p/2);

    this.r1 = Robot.createMesh(new THREE.CylinderGeometry(30, 30, 10, 16), 0x9c9898); // roda dianteira esquerda
    this.r1.translateX(105);
    this.r1.translateY(-100);
    this.r1.translateZ(90);
    this.r1.rotateZ(90 * Math.PI / 180);

    this.r2 = Robot.createMesh(new THREE.CylinderGeometry(30, 30, 10, 16), 0x9c9898); //roda traseira esquerda
    this.r2.translateX(105);
    this.r2.translateY(-100);
    this.r2.translateZ(2);
    this.r2.rotateZ(90 * Math.PI / 180);

    this.r3 = Robot.createMesh(new THREE.CylinderGeometry(30, 30, 10, 16), 0x9c9898); //roda dianteira direita
    this.r3.translateX(-5);
    this.r3.translateY(-100);
    this.r3.translateZ(90);
    this.r3.rotateZ(90 * Math.PI / 180);

    this.r4 = Robot.createMesh(new THREE.CylinderGeometry(30, 30, 10, 16), 0x9c9898); //roda traseira direita
    this.r4.translateX(-5);
    this.r4.translateY(-100);
    this.r4.translateZ(2);
    this.r4.rotateZ(90 * Math.PI / 180);

    this.b11 = Robot.createMesh(new THREE.BoxGeometry(5, 50, 5, 16,16,16), 0x9c9898); //braço esquerdo
    this.b11.translateX(25);
    this.b11.translateY(120);
    this.b11.translateZ(50);

    this.b12 = Robot.createMesh(new THREE.BoxGeometry(5, 50, 5, 16,16,16), 0x9c9898); //antebraço esquerdo
    this.b12.translateX(25);
    this.b12.translateY(145);
    this.b12.translateZ(72,5);
    this.b12.rotateX(90 * Math.PI / 180);

    this.b21 = Robot.createMesh(new THREE.BoxGeometry(5, 50, 5, 16,16,16), 0x9c9898); //braço direito
    this.b21.translateX(75);
    this.b21.translateY(120);
    this.b21.translateZ(50);

    this.b22 = Robot.createMesh(new THREE.BoxGeometry(5, 50, 5, 16,16,16), 0x9c9898); //antebraço direito
    this.b22.translateX(75);
    this.b22.translateY(145);
    this.b22.translateZ(72,5);
    this.b22.rotateX(-90 * Math.PI / 180);
    
    this.add(this.corpo);
    this.add(this.r1);
    this.add(this.r2);
    this.add(this.r3);
    this.add(this.r4);
    this.add(this.b11);
    this.add(this.b12);
    this.add(this.b21);
    this.add(this.b22);
  }

  //Criação do método que fará com que o robot se movimente entre as estantes existentes
  moveRobotContinuously() {
    if (!this.isMoving) {
      this.isMoving = true;
      this.move();
    }
    else {
      this.isMoving = false;
      this.stopRobot();
    }
  }

  move() {
    var speed = 3;
    const self = this;

    function animate() {
      if (self.position.z > 180 || self.position.z < -90) {
        speed = speed*-1;
        self.position.z += speed;
      }
      else {
        self.position.z += speed;
      }

      if (self.isMoving) {
        requestAnimationFrame(animate);
      }
    }
    animate();
  }

  stopRobot() {
    this.isMoving = false;
  }
  
  static createMesh(geom, color) {

    var material = new THREE.MeshBasicMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
  
    return mesh;
  }
  
}