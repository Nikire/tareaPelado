import {sections} from './sectionsManager.js';
var page = 1;
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const pageSpan = document.querySelector('#page');

checkPage();

export function handleNext() {
	nextBtn.addEventListener('click', () => {
		page++;
		checkPage();
		pageSpan.innerText = page;
	});
}

export function handlePrev() {
	prevBtn.addEventListener('click', () => {
		page--;
		checkPage();
		pageSpan.innerText = page;
	});
}

function checkPage() {
	if (page == 1) {
		prevBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
	}
	if (page >= sections.length) {
		nextBtn.disabled = true;
	} else {
		nextBtn.disabled = false;
	}
}

export {page};
