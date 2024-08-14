import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const canvas = document.querySelector("canvas.test");
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
const axishelper = new THREE.AxesHelper(2);
scene.add(axishelper);

const orbit = new OrbitControls(camera, canvas);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
scene.add(cube);

camera.position.z = 5;
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    camera.position.z += 1;
  } else {
    camera.position.z -= 1;
  }
  camera.position.z = Math.max(1, camera.position.z);
});

let boolx = true;
cube.position.x = 0;
cube.position.y = -2;

let angle = 0;

function animate() {
  angle += 0.05;

  cube.position.x = 2 * Math.cos(angle);
  cube.position.y = 2 * Math.sin(angle);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
