export const topNav = () => {
	let myFunction = ()=> {
		document.querySelector('.hamburger').addEventListener('click', function(e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function(el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function(el) {
				el.classList.toggle('show-top-nav');
			});
			
		}); 
	};
	myFunction();
};
