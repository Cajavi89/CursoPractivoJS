

function calcularAltura(){

    const inputa= document.getElementById("inputa");
const inputb= document.getElementById("inputb");
const imputBase= document.getElementById("inputBase");

const ladoa=inputa.value;
const ladob=inputb.value;
const Base= imputBase.value;

    if(ladoa != ladob){ 
        alert("Tiene que tener los 2 lados iguales.");
        
    }else{

        let baseReal= Base/2;
        let restpot= ((ladoa*ladoa)-(baseReal*baseReal));
        let altura = Math.sqrt(restpot);
        alert("la altura es: "+altura);
    }
}

Math.sqrt()