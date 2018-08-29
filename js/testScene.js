window.addEventListener( 'resize', onWindowResize, false );

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});

renderer.setClearColor(0x000000, 0.0)
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.id = 'threeCanvas';
var backgroundDiv = document.querySelector('#background');
backgroundDiv.appendChild( renderer.domElement );

var loader = new THREE.OBJLoader();


loader.load('assets/editedHead.obj', function(object){
	object.x = 2.5;
	object.rotation.y = 90;
	scene.add(object);
	
},function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	});
var geometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
var material = new THREE.MeshStandardMaterial( { color: 0xff0051 } );
var cube = new THREE.Mesh( geometry, material );
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
var pointLight = new THREE.PointLight(0xffffff, 1);


var icoGeo = new THREE.IcosahedronGeometry(3, 1);
var icoMaterial = new THREE.MeshBasicMaterial({ color: 0x606060, wireframe: true, transparent: true});
var wireFrameIco = new THREE.Mesh(icoGeo, icoMaterial);


var textureLoader = new THREE.TextureLoader();
var partSprite = textureLoader.load('assets/circle.png');

var partGeo = new THREE.Geometry();

for(var i = 0; i < 10000; i++){
	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2000 );
	star.y = THREE.Math.randFloatSpread( 2000 );
	star.z = THREE.Math.randFloatSpread( 2000 );

	partGeo.vertices.push( star );
}

var partMaterial = new THREE.PointsMaterial({size: 1, map: partSprite, color: 0x000000});
var particles = new THREE.Points(partGeo, partMaterial);
particles.position.z = -5;
pointLight.position.set(25, 50, 25);

scene.add(wireFrameIco);
scene.add(pointLight);
scene.add(ambientLight);
scene.add(cube);
scene.add(particles);

cube.position.x = 2.5;
bust.position,x = 2.5;
wireFrameIco.position.x = 2;
camera.position.z = 5;

var clock = new THREE.Clock(true);

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	bust.rotation.x += 0.01;
	bust.rotation.y += 0.01;

	cube.position.y = Math.sin(clock.getElapsedTime()) / 2;
	wireFrameIco.rotation.x -= 0.001;
	wireFrameIco.rotation.y -= 0.001;

	particles.rotation.y += 0.0002;

	renderer.render( scene, camera );
}

animate();


function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    $(".sideNav").height($("#interactionArea").height());
}


$(document).ready(function(){
	$(".sideNav").height($("#background").height());
	$("#menuToggle").click(function() {  //use a class, since your ID gets mangled
    	$(this).toggleClass("is-active");      //add the class to the clicked element
    	$(".sideNav").toggleClass("fadeInLeft");
    	$(".sideNav").toggleClass("fadeOutLeft");
  	});

	$("#aboutButton").click(function(){
		$("#about").fadeToggle("300");
	});

	$("#projectsButton").click(function(){
		$("#projects").fadeToggle("300");
	});

	$("#cvButton").click(function(){
		$("#cv").fadeToggle("300");
	});

});





