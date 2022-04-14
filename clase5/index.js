/*En este algoritmo la idea es que se calcule el factorial de un numero hasta que el
usuario desee salir. Ejemplo de factorial de un numero !5 = 1x2x3x4x5 = 120. y el factorial de 0! es 1.*/

let band = "a";

do{
    let valor = parseInt(prompt("Ingrese un numero para averiguar su factorial: "));
    let aux = 1;


    if(valor != 0){
        for(let i = 1; i <= valor; i++){
            aux = aux*i;
            };
    }

    alert("El factorial de " + valor + " es " + aux);

    band = prompt("Desea realizar otra operacion?\na)Si \nb)No ");

} while (band != "b" && band != "B");

alert("Gracias por usar nuestro servicio");

