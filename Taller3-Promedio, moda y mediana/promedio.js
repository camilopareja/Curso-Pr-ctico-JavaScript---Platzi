// CALCULAR UN PROMEDIO ARITMETICO SIMPLE
function promedio (listaNumeros){
    const calculoPromedio = listaNumeros.reduce(function(valorInicial = 0, elementoLista){
        return valorInicial + elementoLista
    })
    const promedio = calculoPromedio/listaNumeros.length;
    return promedio;
}

console.log(promedio([3,2,3,4]));

// CALCULAR UN PROMEDIO PONDERADO

const listaNotas = [
    {
        course: "Python",
        note: 10,
        credit: 2,
    },
    {
        course: "JS",
        note: 10,
        credit: 5,
    },
    {
        course: "Crossfit",
        note: 7,
        credit: 5,
    },
];

function promedioPonderado(lista) {
    const calculoPonderado = lista.map((elementosLista) => {
        return elementosLista.note * elementosLista.credit;
    });
    const sumatoriaNotasPonderadas = calculoPonderado.reduce((elemetoInicial = 0, valor) =>{
        return elemetoInicial + valor;
    } )

    console.log(sumatoriaNotasPonderadas);

    const creditos = lista.map((elementosLista) => {
        return elementosLista.credit;
    });
    const sumatoriaCreditos = creditos.reduce((elemetoInicial = 0, valor) =>{
        return elemetoInicial + valor;
    } )

    const promedioPonderado = sumatoriaNotasPonderadas/sumatoriaCreditos;
    return promedioPonderado;
}

console.log(promedioPonderado(listaNotas));