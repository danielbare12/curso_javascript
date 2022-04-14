/*Bienvenidos al simulador de repocision y venta, primero se va a simular agregar o eliminar libros de una tienda
 y luego se va simular la venta y si esta disponible en stock, cada vez que se agrega un nuevo libro siempre va a comenza con 3 de stock*/

class Libro{

    constructor(id, titulo, precio, editorial){
        
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.editorial = editorial;
        this.stock = 2;

    }

    vender(){
        this.stock -= 1;
    }

    estaDisponible(){
        return (this.stock > 0);
    }
}

const juegoTronos = new Libro(1, "Juego de Tronos", 1500, "Salamandra");
const ultimoDeseo = new Libro(2, "El Ultimo Deseo", 2000, "Salamandra");


const listaLibros = [juegoTronos,ultimoDeseo];

let opcion;

alert("Elija la opcion que desea realizar, luego si desea pulse continuar para ir al siguiente paso.");

do{

    opcion = parseInt(prompt("1) Agregue un Libro.\n2) Mostrar todos los libros.\n3) Eliminar un Producto\n4) Cantidad de Libros en la tienda\n0) Continuar\n Introduzca una opcion: "));
    
    switch(opcion){
        case 1: let idLibro = parseInt(prompt("Agregue id del producto: "));
                let nombreLibro = prompt("Agregue un nuevo nombre: ");
                let precioLibro = parseInt(prompt("Agregue el precio del libro: "));
                let editorialLibro = prompt("Agregue la editorial del libro: ");
    
                listaLibros.push(new Libro(idLibro,nombreLibro,precioLibro,editorialLibro));
                break;
        case 2: 
                for(const libro of listaLibros){
                    alert("Id: " + libro.id + ", Titulo: " + libro.titulo + ", Precio: " + libro.precio + ", Editorial: " + libro.editorial);
                }
                break;
        case 3:  let codigo = parseInt(prompt("Introduzca el Id del libro que desea eliminar: "));
                for(let i = 0; i < listaLibros.length; i++){
                    if(codigo == listaLibros[i].id){
                        listaLibros.splice(i,1);
                    }
                }
                break;
        case 4: alert("Cantidad de libros en la tienda son: " + listaLibros.length);
                break;

        case 0: break;
        default: alert("Opcion incorrecta!! Vuelva a introducer el codigo de un producto.");
    }

} while(opcion != 0);

let total = 0
let band = "s";

alert("Ahora elija los libros que desea vender por el Id y despues se vera si esta disponible por stock.");

do{
    for(const libro of listaLibros){
        console.log("Id: " + libro.id + ", Titulo: " + libro.titulo + ", Precio: " + libro.precio + ", Editorial: " + libro.editorial);
    }

    let venta = prompt("Indique el Id del producto que desea vender: ");

    for(let i = 0; i < listaLibros.length; i++){
        if(venta == listaLibros[i].id && listaLibros[i].estaDisponible() == true){
            total = listaLibros[i].precio + total;
            listaLibros[i].vender();
        } else if (venta == listaLibros[i].id && listaLibros[i].estaDisponible() == false){
            alert(listaLibros[i].titulo + " no esta en Stock!!!");
        }
    }



    band = prompt("Desea realizar otra venta? (s/n): ");

}while(band != "n" && band != "N");

alert(`El total a cobrar son ${total}`);




