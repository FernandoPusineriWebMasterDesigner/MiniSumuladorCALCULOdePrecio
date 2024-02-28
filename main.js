
function calcularPrecio(precio, impuestos, descuento) {
    let impuestosAplicados = precio * (impuestos / 100);
    let precioConImpuestos = precio + impuestosAplicados;
    let descuentoAplicado = precioConImpuestos * (descuento / 100);
    return precioConImpuestos - descuentoAplicado;
}

function mostrarResultado(precioFinal) {

    let mostrarTotal = document.getElementById("mostrartotal");
    mostrarTotal.value = precioFinal;

}

function calcularPrecio(precio, impuestos, descuento) {
    let impuestosAplicados = precio * (impuestos / 100);
    let precioConImpuestos = precio + impuestosAplicados;
    let descuentoAplicado = precioConImpuestos * (descuento / 100);
    return precioConImpuestos - descuentoAplicado;
}

function mostrarResultado(precioFinal) {
    let mostrarTotal = document.getElementById("mostrartotal");
    mostrarTotal.value = precioFinal;
}

// function calcularPrecioFinal() {
//     let continuar = true;

//     while (continuar) {
//         let campoprecio = document.getElementById("precio");
//         let valorprecio = parseFloat(campoprecio.value);
//         let campoimpuestos = document.getElementById("impuestos");
//         let valorimpuestos = parseFloat(campoimpuestos.value);
//         let campodescuento = document.getElementById("descuento");
//         let valordescuento = parseFloat(campodescuento.value);

//         let precioProducto = valorprecio;
//         let impuestos = valorimpuestos;
//         let descuento = valordescuento;

//         if (isNaN(precioProducto) || isNaN(impuestos) || isNaN(descuento)) {
//             alert('Por favor, ingrese números válidos en todos los campos.');
//             break; 
//         }

//         let precioFinal = calcularPrecio(precioProducto, impuestos, descuento);
//         mostrarResultado(precioFinal);

//         let respuesta = prompt('¿Desea realizar otro cálculo? escriba SI en caso afirmativo y si no desea continuar pulse en CANCELAR');
//         if (respuesta === null || respuesta.toLowerCase() !== 'no') {
//             continuar = false; 
//         }
//     }

function calcularPrecioFinal() {
    let continuar = true;

    while (continuar) {
        let campoprecio = document.getElementById("precio");
        let campoimpuestos = document.getElementById("impuestos");
        let campodescuento = document.getElementById("descuento");
        

        let valorprecio = parseFloat(campoprecio.value);
        let valorimpuestos = parseFloat(campoimpuestos.value);
        let valordescuento = parseFloat(campodescuento.value);

        if (isNaN(valorprecio) || isNaN(valorimpuestos) || isNaN(valordescuento) || campoprecio.value === '' || campoimpuestos.value === '' || campodescuento.value === '') {
            alert('Por favor, ingrese números válidos en todos los campos.');
            break;
        }

        let precioProducto = valorprecio;
        let impuestos = valorimpuestos;
        let descuento = valordescuento;

        let precioFinal = calcularPrecio(precioProducto, impuestos, descuento);
        mostrarResultado(precioFinal);

        

        let respuesta = confirm('¿Desea realizar otro cálculo?');
        if (!respuesta) {
            continuar = false;
        } else {
            
            campoprecio.value = '';
            campoimpuestos.value = '';
            campodescuento.value = '';
            mostrarTotal.value = '';
        }
    }
}





