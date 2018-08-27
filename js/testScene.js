window.addEventListener( 'resize', onWindowResize, false );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

renderer.setClearColor(0x000000, 0.0)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = 'threeCanvas';
var backgroundDiv = document.querySelector('#background');
backgroundDiv.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 } );
var cube = new THREE.Mesh( geometry, material );
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
var pointLight = new THREE.PointLight(0xffffff, 1);


var icoGeo = new THREE.IcosahedronGeometry(3, 1);
var icoMaterial = new THREE.MeshBasicMaterial({ color: 0x606060, wireframe: true, transparent: true});
var wireFrameIco = new THREE.Mesh(icoGeo, icoMaterial);


pointLight.position.set(25, 50, 25);

scene.add(wireFrameIco);
scene.add(pointLight);
scene.add(ambientLight);
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	wireFrameIco.rotation.x -= 0.001;
	wireFrameIco.rotation.y -= 0.001;

	renderer.render( scene, camera );
}

animate();


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}






