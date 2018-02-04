document.addEventListener('DOMContentLoaded', function() {
	let trap = document.querySelector('.block-trap');

	trap.addEventListener('mousemove', function() {
		X = event.pageX;
		trap.style.left = X + 'px';
	})
	let one = document.querySelector('.block1');
	let y=0;
	let start = setInterval (move, 5);
	function move() {
		if (y == screen.availHeight-32) {
			clearInterval (start);
		} else {
			y++;
			one.style.top = y +'px';
		}
	}	
})




