//1. Recibir lista de números
//2. Identificar cuantas veces se repite cada número. Crear un objeto donde se vayan acumulando las repeticiones.
//3. Identificar cual numero se repite la mayor cantidad de veces


function calcularModa(listaNumeros){
    const numerosRepeticion = {};
    listaNumeros.map((numero) => {
        if (numerosRepeticion[numero]){
            return numerosRepeticion[numero] += 1;
        } else {
            return numerosRepeticion[numero] = 1;
        };
    });

    const listaOrdenadaNumeros =  Object.entries(numerosRepeticion).sort((elementoA, elementoB) => { //Object.entries convierte el objeto que traigo en un array de arrays//
        return elementoA[1] - elementoB[1];
    });

    const moda = listaOrdenadaNumeros[listaOrdenadaNumeros.length - 1];
    return ("La moda en esta lista es el número " + moda[0] + " el cual se repite " + moda[1] + " veces.");

}

console.log(calcularModa([1,2,3,3,3,3,3,3,4,2,1]))