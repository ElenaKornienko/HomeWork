document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.formAnalog');
	let button = form.querySelector('.inputButton');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		let login = form.querySelector('login-field');
		let re = /\w+@\w+\.[a-z]{2,5}/i;
		let result = re.test(login.value);
		if (result == false) {
  			document.querySelector('div').innerHTML = 'Неправильно введён e-mail';
    		document.querySelector('div').style.display = 'block';
		}
	})
})














