
init();


function init(){
	var canvas = document.querySelector('#effectCanvas');
	var particleCanvas = document.querySelector('.particles-js-canvas-el');
	canvas.getContext('webgl');
	canvas.height = particleCanvas.height;
	canvas.width = particleCanvas.width;
	console.log(canvas.getContext('webgl'));

	var seriously = new Seriously();
	var src = seriously.source('.particles-js-canvas-el')
	var target = seriously.target('#effectCanvas');
	var grain = seriously.effect('filmgrain');
	grain.amount = 1;
	var vignette = seriously.effect('vignette');
	grain.source = src;
	vignette.source = grain;
	target.source = vignette;

	seriously.go();
}




