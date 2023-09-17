'use strict';

class Estante extends THREE.Object3D {

  constructor(l, a, p, lb, ab, pb, eb) {//(largura, altura, profundidade, largurab, alturab, profundidadeb, espessurab)
    super();

    let est1 = Estante.createMesh(new THREE.BoxGeometry(l, a, p, 16,16,16), 0x112233); // estante 1 (baixo)
    est1.translateY(20);
    est1.rotateZ(2 * Math.PI / 180);

    let est2 = Estante.createMesh(new THREE.BoxGeometry(l, a, p, 16,16,16), 0x112233); // estante2 (meio)
    est2.translateX(30);
    est2.translateY(60);
    est2.rotateZ(2 * Math.PI / 180);

    let est3 = Estante.createMesh(new THREE.BoxGeometry(l, a, p, 16,16,16), 0x112233); // estante 3 (cima)
    est3.translateY(100);
    est3.rotateZ(-2 * Math.PI / 180);

    let ave = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical esquerdo
    ave.translateY(75);
    ave.translateZ((-p-5)/2);

    let ave1 = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical esquerdo 1
    ave1.translateX(-15);
    ave1.translateY(75);
    ave1.translateZ(-p/2);
    ave1.rotateZ(-10 * Math.PI / 180);

    let ave2 = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical esquerdo 2
    ave2.translateX(15);
    ave2.translateY(75);
    ave2.translateZ(-p/2);
    ave2.rotateZ(10 * Math.PI / 180);

    let avd = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical direito
    avd.translateX(0);
    avd.translateY(75);
    avd.translateZ((p+5)/2);

    let avd1 = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical direito 1
    avd1.translateX(-15);
    avd1.translateY(75);
    avd1.translateZ(p/2);
    avd1.rotateZ(-10 * Math.PI / 180);

    let avd2 = Estante.createMesh(new THREE.BoxGeometry(5, 150, 5, 16,16,16), 0x848282); // apoio vertical direito 2
    avd2.translateX(15);
    avd2.translateY(75);
    avd2.translateZ(p/2);
    avd2.rotateZ(10 * Math.PI / 180);

    let ale1 = Estante.createMesh(new THREE.BoxGeometry(5, a*2, p, 16,16,16), 0x848282); // apoio lateral estante 1
    ale1.translateX(-l/2-2,5);
    ale1.translateY(a/2);

    let ale2 = Estante.createMesh(new THREE.BoxGeometry(5, a*2, p, 16,16,16), 0x848282); // apoio lateral estante 2
    ale2.translateX(-l/2-2,5);
    ale2.translateY(a/2);

    let ale3 = Estante.createMesh(new THREE.BoxGeometry(5, a*2, p, 16,16,16), 0x848282); // apoio lateral estante 3
    ale3.translateX(l/2-2,5);
    ale3.translateY(a/2);

    var caixa1est1 = new Caixa(lb, ab, pb, eb); //caixa 1 (direita) estante 1 (estante de baixo)
    caixa1est1.translateX(-l/6);
    caixa1est1.translateY(2,5);
    caixa1est1.translateZ(-10);

    var caixa2est1 = new Caixa(lb, ab, pb, eb); //caixa 2 (esquerda) estante 1 (estante de baixo)
    caixa2est1.translateX(-l/3);
    caixa2est1.translateY(2,5);
    caixa2est1.translateZ(-10);

    var caixa1est2 = new Caixa(lb, ab, pb, eb); //caixa 1 (direita) estante 2 (estante do meio)
    caixa1est2.translateX(-l/6);
    caixa1est2.translateY(2,5);
    caixa1est2.translateZ(-10);

    var caixa2est2 = new Caixa(lb, ab, pb, eb); //caixa 2 (esquerda) estante 2 (estante do meio)
    caixa2est2.translateX(-l/3);
    caixa2est2.translateY(2,5);
    caixa2est2.translateZ(-10);

    var caixa1est3 = new Caixa(lb, ab, pb, eb); //caixa 1 (direita) estante 3 (estante de cima)
    caixa1est3.translateX(l/3);
    caixa1est3.translateY(2,5);
    caixa1est3.translateZ(-10);

    var caixa2est3 = new Caixa(lb, ab, pb, eb); //caixa 2 (esquerda) estante 3 (estante de cima)
    caixa2est3.translateX(l/6);
    caixa2est3.translateY(2,5);
    caixa2est3.translateZ(-10);

    var spotLight = new THREE.SpotLight(0xcccccc);
    spotLight.shadowCameraNear = 2;
    spotLight.shadowCameraFar = 200;
    spotLight.shadowCameraFov = 30;
    spotLight.distance = 0;
    spotLight.angle = 1;
    spotLight.translateY(300);
    spotLight.target = est3;

    this.add(est1);
    this.add(est2);
    this.add(est3);
    this.add(ave);
    this.add(ave1);
    this.add(ave2);
    this.add(avd);
    this.add(avd1);
    this.add(avd2);
    est1.add(ale1);
    est2.add(ale2);
    est3.add(ale3);
    est1.add(caixa1est1);
    est1.add(caixa2est1);
    est2.add(caixa1est2);
    est2.add(caixa2est2);
    est3.add(caixa1est3);
    est3.add(caixa2est3);
    est3.add(spotLight);
  }

  static createMesh(geom, color) {

    var material = new THREE.MeshLambertMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
    
    return mesh;
  }

}
