//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parOImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log(`El ${numero} es par`);
  } else {
    console.log(`El ${numero} es impar`);
  }
};

parOImpar(10);
parOImpar(5);

//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const comparacion = (num1, num2) => {
  if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que el numero ${num2}`);
  } else if (num1 < num2) {
    console.log(`El numero ${num2} es mayor que el numero ${num1}`);
  } else {
    console.log(`Ambos numeros son iguales`);
  }
};

comparacion(8, 3);
comparacion(4, 4);
comparacion(-1, 5);

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiplo = (num) => {
  if (num % 5 === 0) {
    console.log(`El numero ${num} es multiplo de 5`);
  } else {
    console.log(`El numero ${num} no es multiplo de 5`);
  }
};

multiplo(15);
multiplo(18);

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const imprimirNumeros = (numerito) => {
  for (let i = 0; i <= numerito; i++) console.log(`El numero actual es ${i}`);
};

imprimirNumeros(8);

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(texto, n_veces) {
  for (let i = 1; i <= n_veces; i++) console.log(texto);
}
imprimirPalabra("hola", 3);
imprimirPalabra("Ale", 2);

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

let cosas = [0, "Ale", "Hola", 10, "Perro",false];

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) 
  console.log(array[i]);
};

imprimirArray(cosas);

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mostrarArray = (array) => {
  for (let i = 0; i < array.length; i++)
    if (i === 4) {
      continue;
    } else {
      console.log(array[i]);
    }
};
mostrarArray(numeros);

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

let numbers = [1, 2, 3, 4];

const multiplicando = (arr, n1) => {
  let i = 0;
  while (i < arr.length) {
    resultado = arr[i] * n1;
    console.log(resultado);
    i++;
  }
}

multiplicando(numbers, 5);
