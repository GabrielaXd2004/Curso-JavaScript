/* 
    =======================================================
    ==== CREAR UN NUEVO ARREGLO CON EL SPREAD OPERATOR ====
    =======================================================
*/

const carrito =[];

const producto = {
    nombre: 'Monitor 36 pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;

resultado = [ ...carrito, producto ];
resultado = [ ...resultado, producto2 ];
resultado = [ producto3, ...resultado ];

console.table(resultado);