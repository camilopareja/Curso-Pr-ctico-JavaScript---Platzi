function calcularMediana(listaNumeros){
    const listaOrdenada = listaNumeros.sort(function(a, b) {
        return a - b;
    });
    const mitadLista1 = parseInt((listaOrdenada.length)/2);
    const valorMitadLista1 = listaOrdenada[mitadLista1];
    const valorMitadLista2 = listaOrdenada[mitadLista1-1];
    const validacionEsPar = () => mitadLista1 % 2 === 0;

    if (validacionEsPar() == true){    
        const promedioValoresMitadLista = (valorMitadLista1+valorMitadLista2)/2;
        return promedioValoresMitadLista;
    } else {
        return valorMitadLista1;
    };
    
}

console.log(calcularMediana([3,2,4,1]));


    // 1. Organiza la lista de número de mayor a menor
    // 2. Calcular la mitad de la lista;
    // 2. Comprobar si el número de elemento es par o impar;
    // 3.1 Si es impar se debe tomar como mediana al número de lo mitad de la lista;
    // 3.2 Si es par:
    //     i. Identificar los dos valores de la mitad 
    //     ii. Sacar el promedio;
    // 4 devolver la mediana