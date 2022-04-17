const colombia = [];
colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

//HELPERS
function esPar(cantidadDatos) {
    return ( cantidadDatos % 2 === 0);
};

//Datos organizados

const salarios = colombia.map ( (elemento) => {
    return elemento.salary;
});

const salariosSorted = salarios.sort((salarioA,salarioB) =>{
    return salarioA - salarioB;
})

// CALCULO MEDIANA

function medianaSalarios(listaSalarios) {
    const mitadLista = parseInt((listaSalarios.length)/2);
    const valorMitadLista1 = listaSalarios[mitadLista];
    const valorMitadLista2 = listaSalarios[mitadLista-1];
    
    if (esPar(listaSalarios.length)) {
        return (valorMitadLista1+valorMitadLista2)/2;
    } else {
        return salariosSorted[mitadLista];
    }
}


const spliceStart = parseInt(salariosSorted.length*0.9)
const spliceCount = salariosSorted.length - spliceStart;
const listatop10Ingresos = salariosSorted.slice(spliceStart, salariosSorted.length);

console.log( spliceStart, listatop10Ingresos)

const medianaTop10 = medianaSalarios(listatop10Ingresos);


console.log(medianaTop10)








