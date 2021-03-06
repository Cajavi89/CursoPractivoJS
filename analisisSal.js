//Helpers
//comprobar si es par para la MEDIANA de salarios
function esPar(numerito){
    // if(numerito%2 ===0){
    //     return true;
    // }else{
    //     return false;
    // }
    return (numerito % 2===0);
}

//tomar el valor de cada salario por cada persona
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

//organizar en orden ascendente los sueldos de las personas
const salariosColSorted = salariosCol.sort(
    function (salaryA,SalaryB){
        return salaryA-SalaryB;
    }
);


//calcular la media aritmetica de todos los salarios
function calcularMediaAritmetica(lista){
    const sumaLista= lista.reduce( 
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista= sumaLista/lista.length;
    return promedioLista;
}

//calcula la MEDIANA de todos los salarios
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1= lista[mitad - 1];
        const personitaMitad2= lista[mitad];
        const mediana= calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad= lista[mitad];
        return poersonitaMitad; 
    }
}

const medianaGeneralCol= medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length - spliceStart;
const salariosColTop10=salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col=medianaSalarios(salariosColTop10);

console.log(
    medianaSalarios(salariosCol)
)