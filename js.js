
(function toggleNavigation() {
	var toggle = document.querySelector('.toggleNav');
	toggle.addEventListener('click', toggleClass);

	function toggleClass() {
		var menu = document.querySelector('.menu');

		menu.classList.toggle('open');
	}

})();