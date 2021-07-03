// const precioOriginal =120;
// const descuento=18;

//funcion que calcula el porcentaje
function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

//funcion para llamar desde el boton de calcular
function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;
    const inputCoupon=document.getElementById("inputCoupon");
    const CouponValue=inputCoupon.value;

    let descuento;

    // //condicional que verifica que el cupon sea valido
    // if(!coupons.includes(CouponValue)){//funcion .cinludes solo funciona con arrays de elementos.
    //        alert("El cupon "+CouponValue+" no es válido")
    // }else{
    
    //     //este es el swith que comprueba que descuento aplica segun el codigo del bono
    //     switch(CouponValue){
    //         case "Juan_DC_es_Batman":
    //             descuento=15;
    //             break;
            
    //         case "pero_no_le_digas_a_nadie":
    //             descuento=30;
    //             break;

    //         case "es_un_secreto":
    //             descuento=25;
    //             break;
    //     }

    // }

    //funcion para validar que el parametro enviado está en nuestro array de objetos en la name.
    
    //FUncion válida que exista el cupon ingresado, retornado un true(o el bono ingresado)
    const isCouponValueValid = function (coupons){
        return coupons.name === CouponValue;
    }

    const userCoupon = coupons.find(isCouponValueValid);//encuentra el bono en el array de objetos

    if (!userCoupon){//envia el error si no está en el array de bonos.
        alert("El cupon ´"+CouponValue+"´ no es válido.")
    }else{
        descuento= userCoupon.discount; //aplica a descuento el bono que está en el array de objetos

        const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento);
        const resultP=document.getElementById("ResultP");
        resultP.innerText="El precio con descuento que tienes es: "+precioConDescuento;
    }



}
//creamos un array de cupones
const coupons=[

    {
        name:"juanDC_es_Batman",
        discount:15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount:30,
    },
    {
        name:"es_un_secreto",
        discount:25
    },
]

