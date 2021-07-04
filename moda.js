//let lista1=[1,2,3,1,4,,2,1,1,4,2,3,4,4,4];


function calcModa(lista){
    const countLista1={};
    let moda;

    lista.map(
        function(elemento){
            if (countLista1[elemento]){
                countLista1[elemento] += 1;
            }else{
                countLista1[elemento] = 1;
            }
    });

    const lista1Array = Object.entries(countLista1).sort(function (valorAcumulado,nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
    });

    return moda = lista1Array[lista1Array.length-1];
}