var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material, colour or image texture
// var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

// Game logic
var update = function()
{
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.005;
};

// Draw scene
var render = function()
{
	renderer.render(scene, camera);
};

// Run game loop (update, render, repeat)
var GameLoop = function()
{
	requestAnimationFrame(GameLoop);
	update();
	render();
};

GameLoop();