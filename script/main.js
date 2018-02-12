document.addEventListener('DOMContentLoaded', function() {
	let cube = document.getElementById('cube');
	let platform = document.getElementById('platform');
    let step = 1;
    let screenH = window.innerHeight;
 	let cubeH = cube.clientHeight;
 	let platformH = platform.clientHeight;
 	let conditionH = screenH - cubeH;
 	let posTop = screenH - platformH;
	
    cube.style.top = 0 + 'px';
    cube.style.left = 0 + 'px';
    platform.style.left = 0 + 'px';
    platform.style.top = posTop + 'px';

    let moveCube = setInterval (() => {
    	let topCube = cube.style.top.slice(0,-2);
        topCube = parseInt(topCube);
        topCube = topCube + step;
    	cube.style.top = topCube + 'px';
    	let leftCube = parseInt(cube.style.left.slice(0,-2));
    	let leftPlatform = parseInt(platform.style.left.slice(0,-2));
        let topPlatform = parseInt(platform.style.top.slice(0,-2));
        //console.log(topCube, leftCube, topPlatform, leftPlatform);	
        if(topCube === conditionH) {
          cube.style.top = 0;
        }
        if (topCube === topPlatform && leftCube === leftPlatform) {
        	alert('Victory!');
        }
    }, 20);

    document.addEventListener('mousemove', function(e) {
        //console.log(e.clientX, e.clientY);    
        platform.style.left = e.clientX + 'px';
    });
})    

