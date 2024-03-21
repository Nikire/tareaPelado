# Ejercicio integrador hasta ahora

En este ejercicio vas a tener que usar

- Clases
- Callbacks
- Recursivas
- Tu segunda peor pesadilla (la primera son las llaves) , bucles
- Conceptos técnicos que todavía no viste pero tenés la capacidad de hacer

## Dada la intro, el ejercicio en cuestión :

1. Preparar un template de html de toda la vida, con styles css,y un index js con tipo módulo

- Pensar el código que vas a hacer en módulos, intentar separar los archivos lo mejor posible y de la forma más ordenada posible (también se puede usar carpetas, lo recomiendo por si tenés muchos archivos JS)
- Tambien se puede modularizar el css pero no es necesario

2. Mediante scripts vamos a hacer trabajar con la creación de varios sections, estos se van a modificar más adelante así que simplemente hace la creación individual de uno y después podes separar el mismo proceso en diferentes archivos js
3. Crear un sistema de "paginación" (nuevo concepto) , consiste en dos botones (podes hacerlo en el body directamente, en HTML) donde van a funcionar como "selector" de que section se va a mostrar
   -hint- utilizar la etiqueta hidden de html (en los elementos también se encuentra)
4. Primer section:
   Crear una clase Fibonacci, esta clase va a tomar como parámetro en su constructor "posición"
   La idea de esta clase es generar un cuadrado mediante un método, así como cuando hicimos los cuadrados que cambiaban de color, la posición determina la cantidad de bordes (pues claro, cada posición te devuelve un valor) y cada valor que te devuelve, tiene que ser representado como padding en ese cuadrado
   Osea, para la creación del cuadrado , por cada valor devuelto en cada posición hasta la del constructor se debe generar un cuadrado dentro de otro con un borde y con un padding variable dependiendo el valor que devuelve la posición

- **Ejemplo:**

```js
const miFibonacci = new Fibonacci(5);
miFibonacci.generarCuadrado();
// Devuelve 5 cuadrados, con un padding de 0,1,1,2 y 3 respectivamente
```

5. Segundo section:
   Crear una serie de divs, representados como quieras, preferentemente con cuadrados por la facilidad de trabajarlos (usar min-width y min-height)
   El objetivo de este section es que logres de alguna manera hacer que únicamente se muestre un cuadrado, que al hacerle click haga aparecer a los demás divs cuadrados con un retraso de 300 milisegundos entre uno y otro , osea, si son 10 divs, va a tardar un total de 3 segundos en mostrar todos los elementos desde que se apretó el click
   -hint- usar timeout y css opacity
6. Tercer y último section:
   Hacer un formulario que tenga;
   Nombre , apellido, edad y la posibilidad de subir un URL de imagen (texto)
   Cuando se submiteé el formulario, crear una Card debajo del formulario, si se agrega otro agregarlo a su lado (utilizar una clase Persona para su creación)
