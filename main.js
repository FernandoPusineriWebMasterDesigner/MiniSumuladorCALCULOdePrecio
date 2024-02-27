
function obtenerPrecioProducto() {
    return parseFloat(prompt('Ingrese el precio del producto:'));
}

function obtenerImpuestos() {
    return parseFloat(prompt('Ingrese el porcentaje de impuestos (%):'));
}

function obtenerDescuento() {
    return parseFloat(prompt('Ingrese el porcentaje de descuento (%):'));
}

function calcularPrecio(precio, impuestos, descuento) {
    var impuestosAplicados = precio * (impuestos / 100);
    var precioConImpuestos = precio + impuestosAplicados;
    var descuentoAplicado = precioConImpuestos * (descuento / 100);
    return precioConImpuestos - descuentoAplicado;
}

function mostrarResultado(precioFinal) {
    var resultadoHTML = 'El precio final del producto es: $' + precioFinal.toFixed(2);
    alert(resultadoHTML);
}

function calcularPrecioFinal() {
    var continuar = true;

    while (continuar) {
        var precioProducto = obtenerPrecioProducto();
        var impuestos = obtenerImpuestos();
        var descuento = obtenerDescuento();

        if (isNaN(precioProducto) || isNaN(impuestos) || isNaN(descuento)) {
            alert('Por favor, ingrese números válidos en todos los campos.');
            continue;
        }

        var precioFinal = calcularPrecio(precioProducto, impuestos, descuento);
        mostrarResultado(precioFinal);

        continuar = confirm('¿Desea realizar otro cálculo?');
    }
}
