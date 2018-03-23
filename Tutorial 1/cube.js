var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function()
{
	var width = window.innerWidth;
	var height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

// Control the mouse
controls = new THREE.OrbitControls(camera, renderer.domElement);

// Create the shape
var geometry = new THREE.BoxGeometry(1, 1, 1);
// Fill the shape with images, one image for each face
var cubeMaterials =
[
	new THREE.MeshBasicMaterial({colour: 0xFFFFFF, side: THREE.DoubleSide }), // RIGHT SIDE
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/texture2.jpg'), side: THREE.BackSide }), // LEFT SIDE
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/texture2.jpg'), side: THREE.FrontSide }), // TOP SIDE
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/texture2.jpg'), side: THREE.DoubleSide }), // BOTTOM SIDE
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/texture2.jpg'), side: THREE.DoubleSide }), // FRONT SIDE
	new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/texture2.jpg'), side: THREE.DoubleSide }) // BACK SIDE
];

// Create a material, colour or image texture
var material = new THREE.MeshFaceMaterial(cubeMaterials);
// var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: false});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Start position for camera
camera.position.z = 3;

// Game logic
var update = function()
{
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.005;
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