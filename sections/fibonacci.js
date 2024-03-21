import {Fibonacci} from '../classes.js';
let myFibonacci = new Fibonacci(13);
const section = document.createElement('section');
section.append(myFibonacci.generarCuadrado());
export default section;
