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

var loader = new THREE.ObjectLoader();

loader.load
(
	'models/Head.json',
	function(object)
	{
		scene.add(object);
	}
);

// Start position for camera
camera.position.z = 3;

var ambientLight = new THREE.AmbientLight(0xFFFFFF, 2.0); // Color, intensity
// scene.add(ambientLight);

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