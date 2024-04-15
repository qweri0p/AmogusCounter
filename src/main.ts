import './style.css'
import * as THREE from 'three';
import imga from './sus.png';
import susSFX from './amogus.ogg';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
let sussus: number = 0;
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#c')!,
  antialias: true
});
camera.position.z = 30;
renderer.setPixelRatio(window.devicePixelRatio);

window.addEventListener('resize', onWindowResize);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
const texture = new THREE.TextureLoader().load(imga);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  map: texture
});
let susSpread = 30;
const ambientlight = new THREE.AmbientLight(0xffffff);
scene.add(ambientlight);

if (localStorage.getItem('sussus')) {
  sussus = Number(localStorage.sussus);
  for (let i = 0; i < sussus; i++) {
    camera.position.z += 0.1;
    susSpread += 0.03;
  }
} else {
  sussus = 0;
}
Array(sussus).fill(undefined).forEach(createAmogus);

function createAmogus() {
  const amogus = new THREE.Mesh(geometry, material);
  const [xr, yr, zr] = Array(3).fill(undefined).map(() => THREE.MathUtils.randFloatSpread(360));
  amogus.rotation.x = xr;
  amogus.rotation.y = yr;
  amogus.rotation.z = zr;
  const [x, y, z] = Array(3).fill(undefined).map(() => THREE.MathUtils.randFloatSpread(susSpread));
  amogus.position.x = x;
  amogus.position.y = y;
  amogus.position.z = z;
  scene.add(amogus);
  document.querySelector('#counter')!.innerHTML = sussus.toString();
  localStorage.sussus = Number(sussus);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

onWindowResize();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
animate();
setInterval(() => {
  document.onkeydown = function(e) {
    if (e.keyCode !== 32) return;
    const listener = new THREE.AudioListener();
    const sound = new THREE.Audio(listener);
    const audioLoader = new THREE.AudioLoader();
    sussus++;
    createAmogus();
    audioLoader.load(susSFX, function(buffer) {
      sound.setBuffer(buffer);
      sound.setVolume(0.5);
      sound.play();
    });
    console.log(sussus);
  }
}, 1);
