import {
	handleNext,
	handlePrev,
	parsedSections as sections,
} from './pagination.js';
handleNext();
handlePrev();

const main = document.querySelector('#main-content');

main.append(...sections);
