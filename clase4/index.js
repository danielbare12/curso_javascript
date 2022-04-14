/* Simulador de tienda online donde tenes que ingresar los productos que deseas comprar y luego el metodo de pago, los pagos en efectivo se los tomara
como pagos con solo una cuota*/

let opcion = 0;
let total = 0;
let tarjeta;
let cuotas = 1;

alert("Buenos dias, bienvenido a nuestra tienda online!! \nPrimero seleccione los productos que desea comprar.\nSegundo, seleccione el metodo de pago, si desea pagar con tarjeta de credito debera seleccionar despues las cuotas.")

do {
    opcion = parseInt(prompt("1)Zapatillas marca Nike_____________$1000\n2)Remera marca Tokyo________________$2000\n3)Jeans marca Cultura________________$500\n4)Pantalones marca Flow______________$2000\n5)Remera marca Bros____________$1400\n0)Siguiente\nIntroduzca el numero del articulo que desee comprar: "));
    switch (opcion) {
        case 1: acumularTotal(1000);
            break;
        case 2: acumularTotal(2000);
            break;
        case 3: acumularTotal(500);
            break;
        case 4: acumularTotal(2000);
            break;
        case 5: acumularTotal(1400);
            break;
        case 0: break;
        default: alert("Opcion incorrecta!! Vuelva a introducer el codigo de un producto.");
    }
} while (opcion != 0)

let pago = parseInt(prompt("1)Efectivo/Contado \n2)Credito \nElija el metodo de pago: "));
let band = true;

while (pago == 2 && band == true) {
    tarjeta = parseInt(prompt("1) 1 Cuota (sin interes) \n2) 3 Cuotas (5% interes) \n3) 6 Cuotas (15% interes) \n4) 12 Cuotas (30% interes)"));
    switch (tarjeta) {
        case 2: calcularInteres(0.5);
            cuotas = 3;
            band = false;
            break;
        case 3: calcularInteres(0.15);
            cuotas = 6;
            band = false;
            break;
        case 4: calcularInteres(0.3);
            cuotas = 12;
            band = false;
            break;
        default: alert("Opcion incorrecta, ingrese la opcion nuevamente.");
            break;
    }

}



alert(`El total a pagar son ${total} en ${cuotas} cuotas de ${total / cuotas}`);


function acumularTotal(producto) {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));
    total = producto * cantidad + total;
}

function calcularInteres(interes) {
    total = total + total * interes;
}