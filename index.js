import {handleNext, handlePrev} from './pagination.js';
handleNext();
handlePrev();
import {sections} from './sectionsManager.js';

const main = document.querySelector('#main-content');

main.append(...sections);
