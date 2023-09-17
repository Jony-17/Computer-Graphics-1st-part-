'use strict';

class Armazem extends THREE.Object3D {
  
  constructor(l, a, p, e) {//largura, altura, profundidade, espessura
    super();
  
    let pa = Armazem.createMesh(new THREE.BoxGeometry(l,a,e,16,16,16), 0xF5DEB3); //plano anterior
    pa.translateX(l/2);
    pa.translateY(a/2);
    pa.translateZ(0);

    let pe = Armazem.createMesh(new THREE.BoxGeometry(e, a, p, 16,16,16), 0xF5DEB3); //plano esquerdo
    pe.translateX(0);
    pe.translateY(a/2);
    pe.translateZ(p/2);

    let pd = Armazem.createMesh(new THREE.BoxGeometry(e, a, p, 16,16,16), 0xF5DEB3); //plano direito
    pd.translateX(l);
    pd.translateY(a/2);
    pd.translateZ(p/2);

    let pp = Armazem.createMesh(new THREE.BoxGeometry(l, a, e, 16,16,16), 0xF5DEB3); //plano posterior
    pp.translateX(l/2);
    pp.translateY(a/2);
    pp.translateZ(p);

    let tampo = Armazem.createMesh(new THREE.BoxGeometry(l, e, p, 16,16,16), 0x664228); //tampo
    tampo.translateX(l/2);
    tampo.translateY(e/2);
    tampo.translateZ(p/2);

    this.add(pa);
    this.add(pd);
    this.add(pe);
    this.add(pp);
    this.add(tampo);
  }
  
  static createMesh(geom, color) {

    var material = new THREE.MeshBasicMaterial({color: color, wireframe: false});
    var mesh = new THREE.Mesh(geom, material);
  
    return mesh;
  }
  
}
