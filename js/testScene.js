window.addEventListener( 'resize', onWindowResize, false );

var backgroundElement = document.getElementById("background");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, $(backgroundElement).width() / $(backgroundElement).height(), 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});


backgroundElement.appendChild( renderer.domElement );
renderer.setSize($(backgroundElement).width(),$(backgroundElement).height());
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var geometry = new THREE.TetrahedronGeometry(2, 0);


var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

camera.position.z = 5;

function animate(){
	requestAnimationFrame(animate);
	renderer.render( scene, camera);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
}

function onWindowResize(){
    camera.aspect = $(backgroundElement).width() / $(backgroundElement).height();
    camera.updateProjectionMatrix();

    renderer.setSize( $(backgroundElement).width() , $(backgroundElement).height() );
}

animate();