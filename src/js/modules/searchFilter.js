export const searchFilter = () => {
	// get the input data
	const fnFilter = (inputElement, selector, selectorContainer) =>{
		inputElement.addEventListener('keyup', e =>{
			if(e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer)
		})
	};
	const fnCompareElements = (filterText, selector, selectorContainer) =>{
		let searchElements = document.querySelectorAll(selector);
		let searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(el =>{
			el.textContent.toUpperCase().includes(filterText)
			? el.style.display = 'block'
			: el.style.display = 'none'
		});
		searchContainers.forEach(el =>{
			el.textContent.toUpperCase().includes(filterText)
				? el.style.display = 'block'
				: el.style.display = 'none'
		})
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};
