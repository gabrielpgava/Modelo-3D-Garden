import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap/all";

const modelURL = new URL("../models/controle.glb", import.meta.url);
const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const loader = new GLTFLoader();

var obj;
loader.load(modelURL.href, function (gltf) {
    obj = gltf.scene;
    scene.add(gltf.scene);

});

const orbit = new OrbitControls(camera,renderer.domElement);

//const axesHelper = new THREE.AxesHelper(3);
//scene.add(axesHelper);

camera.position.set(3,1,5);
orbit.update();


const light = new THREE.HemisphereLight(0xffffFF, 0x000000, 3);
scene.add(light);

const mouse = {
    x: 1,
    y: 0
};


function animate(){
    if (obj) {
        gsap.to(obj.rotation, {
            y: mouse.x,
            x: mouse.y,
            duration: 5
        });
    }
    renderer.render(scene,camera);
}

addEventListener('mousemove', () => {
    mouse.x = (event.clientX / innerWidth)*3-1;
    //mouse.y = (event.clientY / innerHeight);

});


renderer.setAnimationLoop(animate);





