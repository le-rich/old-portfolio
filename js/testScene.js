window.addEventListener( 'resize', onWindowResize, false );

var backgroundElement = document.getElementById("background");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, $(backgroundElement).width() / $(backgroundElement).height(), 0.1, 10000 );
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

backgroundElement.appendChild( renderer.domElement );
renderer.setSize($(backgroundElement).width(),$(backgroundElement).height());
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
camera.position.z = 100;

var particleSystem = new THREE.GPUParticleSystem({
	maxParticles: 250000
});


function animate(){
	requestAnimationFrame(animate);
	renderer.render( scene, camera);	
}

function onWindowResize(){
    camera.aspect = $(backgroundElement).width() / $(backgroundElement).height();
    camera.updateProjectionMatrix();

    renderer.setSize( $(backgroundElement).width() , $(backgroundElement).height() );
}

animate();