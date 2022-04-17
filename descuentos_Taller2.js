function calcularDescuento (precioOriginal, descuento) {
    let porcentajePrecioConDescuento = 100-descuento;
    let precioConDescuento = ((precioOriginal * porcentajePrecioConDescuento/100));
    return precioConDescuento ;
}

const cuponesValidos = [
    {
        name: "descuento10",
        descuento: 10,
    },
    {
        name: "descuento20",
        descuento: 20,
    },
    {
        name: "descuento30",
        descuento: 30,
    }
]
    function cuponDescuento() {
        const inputPrecio = document.getElementById("precioProducto");
        const valuePrecio = inputPrecio.value;
    
        const inputcuponDescuento = document.getElementById("cuponDescuentoProducto");
        const cuponDescuento = inputcuponDescuento.value;

        const validaciónDescuento = cuponesValidos.find(cupon => cupon.name == cuponDescuento)

        if (!validaciónDescuento) {
            resultadoPrecioDescuento.innerText = "El precio de tu producto es: " + valuePrecio + "USD. No posees un cupón de descuento valido para esta compra."
        } else {
            const precioConDescuento = calcularDescuento(valuePrecio, validaciónDescuento.descuento);
            resultadoPrecioDescuento.innerText = "Tu producto con descuento queda en: " + precioConDescuento + "USD";
        }
    }


//Esta es otra forma de hacer, creo que es más dificil de escalar si se tiene más cupones
    // switch (cupon) {
    //     case "descuento10":
    //         return 10;
    //     case "descuento20":
    //         return 20;
    //     case "descuento30":
    //         return 30;
    //     default:
    //         return 0;
// }
// }