//funcion para calcular la media aritmetica de los array pares
function calcularMediaAritmetica(lista){
    //     let sumaLista=0;
    // for(let i=0;i<lista.length;i++){
    //     sumaLista= sumaLista+ lista[i];
    // }

    const sumaLista= lista.reduce( 
        function (valorAcumulado = 0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    )
    const promedioLista= sumaLista/lista.length;
    return promedioLista;
}
// //array a evaluar
// const lista =[
//     100,
//     200,
//     500,
//     40000000,
// ];



//funcion para ver si el array es par o impar
function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }        
}

//funcion para calcular la mediana
function calcMediana(lista){
    const mitadlista1 = parseInt(lista.length /2);
    var mediana;
    if(esPar(lista.length)){
        const elemento1=lista[mitadlista1];
        const elemento2=lista[mitadlista1-1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
        mediana=promedioElemento1y2;
    }else{
        mediana=lista[mitadlista1];
    }
    return mediana;
}

//main
    //funcion para ordenar la lista de numeros.
    let lista=[3,1,5,63,24,8]
    const listaOrdenada = lista.sort(function(a, b){
        return a-b;
        });
    let prueba = calcMediana(listaOrdenada);
    console.log(prueba)
    

