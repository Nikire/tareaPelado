export const Fibonacci = class {
	constructor(pos) {
		this.pos = pos;
	}
	generarCuadrado = () => {
		let container = document.createElement('div');
		container.classList.add('container-cuadrados');
		let paddings = Array(this.pos)
			.fill(0)
			.map((_, i) => this.obtenerValor(i));
		let cuadradosDiv = paddings.map((padding) => {
			let div = document.createElement('div');
			div.classList.add('cuadrado');
			div.style.padding = `${padding}px`;
			return div;
		});
		for (let i = 1; i < cuadradosDiv.length; i++) {
			cuadradosDiv[i - 1].appendChild(cuadradosDiv[i]);
		}
		container.appendChild(cuadradosDiv[0]);
		return container;
	};
	obtenerValor = (pos) => {
		if (pos <= 0) return 0;
		if (pos === 1) return pos;
		return this.obtenerValor(pos - 2) + this.obtenerValor(pos - 1);
	};
};
