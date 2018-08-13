window.addEventListener( 'resize', onWindowResize, false );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({alpha: true});

renderer.setClearColor(0x000000, 0.0)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = 'threeCanvas';
var backgroundDiv = document.querySelector('#background');
backgroundDiv.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}






