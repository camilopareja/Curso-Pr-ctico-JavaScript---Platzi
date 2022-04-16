function promedio (listaNumeros){
    const calculoPromedio = listaNumeros.reduce(function(valorInicial = 0, elementoLista){
        return valorInicial + elementoLista
    })
    const promedio = calculoPromedio/listaNumeros.length;
    return promedio;
}

console.log(promedio([3,2,3,4]));