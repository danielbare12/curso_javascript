/*Este es un simulador de compras online donde hay un catalogo y un carrito, una vez que se compra unos determinados articulos 
se borra todo del carrito y se guarda en el historial*/

//Clase para los Comics

class Comic{

    constructor(id, titulo, precio, autor){
        
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.autor = autor;
        this.stock = 2;

    }

    vender(){
        this.stock -= 1;
    }

    devolver(){
        this.stock += 1;
    }

    estaDisponible(){
        return (this.stock > 0);
    }
}

//Clase para el historial de compras

class Historial{
    constructor(nombre,documento,lista,total){
        this.nombre = nombre;
        this.documento = documento;
        this.lista = lista;
        this.total = total;
        this.fecha = new Date;
    }
}


//Inicializando los comics
const batman1 = new Comic(1,"Batman: La Broma Asesina",1800,"Alan Moore");
const batman2 = new Comic(2,"Batman: El Regreso Del Caballero Oscuro",2300,"Frank Miller");
const batman3 = new Comic(3,"Batman: Año Uno",1700,"Frank Miller");
const watchmen = new Comic(4,"Watchmen",3000,"Alan Moore");
const spiderman1 = new Comic(5,"Spiderman: La Última Cacería De Kraven",1400,"J. M. DeMatteis");
const onepiece = new Comic(6,"One Piece Volumen 1",600,"Eichiro Oda");

const listaComics = [batman1,batman2,batman3,watchmen,spiderman1,onepiece];



let opcion;
const carrito = []; // lista de compras del carrito
const miHistorial = []; // lista de historial de compras


alert("Bienvenidos a nuestra tienda de comics. Elija la opcion que desea realizar. Para salir de la tienda pulse 0.");

do{

    opcion = parseInt(prompt("1) Mostrar todo el catalogo.\n2) Realizar Busqueda por nombre\n3) Añadir producto al carrito\n4) Mirar Carrito\n5) Eliminar producto del carrito\n6) Comprar productos del carrito\n7) Historial de compras\n0) Salir\n Introduzca una opcion: "));
    
    switch(opcion){
        //Se muestran todos los productos de la tienda
        case 1: console.log("---------------- CATALOGO COMPLETO ---------------------")
                mostrarLista(listaComics);
                break;
        //Se busca algun producto con algun nombre 
        case 2: console.log("---------------------------------------------------------")
                let busqueda = prompt("Instroduzca el titulo del libro que desea buscar: ");
                const resultado = listaComics.filter((comic) => comic.titulo.toLowerCase().includes(busqueda.toLowerCase()));
                mostrarLista(resultado);
                break;
        //Se añade los productos que se desean al carrito, si no esta en stock se avisa y no se hace nada
        case 3: console.log("---------------------------------------------------------")
                let codigoProducto = prompt("Introduzca el Id del producto para agregar al carrito: ");
                for(let i = 0; i < listaComics.length; i++){
                    if(listaComics[i].id == codigoProducto && listaComics[i].estaDisponible() == true){
                        carrito.push(listaComics[i]);
                        listaComics[i].vender();
                    } else if (listaComics[i].id == codigoProducto && listaComics[i].estaDisponible() == false){
                        alert(listaComics[i].titulo + " no esta en Stock!!!");
                    }
                }
                break;
        //Se muestra lo que hay en el carrito
        case 4: console.log("--------------------- CARRITO --------------------------")
                mostrarLista(carrito);
                console.log("Total: " + mostrarTotal());
                break;
        //Se elimina algun producto del carrito por su Id

        case 5: let codigo = parseInt(prompt("Introduzca el Id del comic que desea eliminar del carrito: "));
                for(let i = 0; i < carrito.length; i++){
                    if(codigo == carrito[i].id){
                        carrito.splice(i,1);
                        for(let j = 0; j < listaComics.length; j++){
                            if(listaComics[j].id == codigo){
                                listaComics[j].devolver(); //Se vuelve a sumar el stock
                            }
                        }
                    }
                }
                break;
        //Se compra el producto para despues vaciar el carrito y guardar en el historial
        case 6: let usuario = prompt("Introduzca su numbre completo");
                let documento = prompt("Introduzca su documento");

                //---------------------------------------------
                console.log("-----------------------------Informacion de Compra-----------------------");
                console.log("Nombre Completo: " + usuario + "\nDocumento: " + documento);
                mostrarLista(carrito);
                let total = mostrarTotal();
                console.log("Total: " + mostrarTotal());
                console.log("Fecha: " + new Date());

                //----------------------------------------

                let miLista = carrito.map(comic => comic.titulo);
                carrito.splice(0,carrito.length); // Se borra lo que hay en el carrito
                miHistorial.push(new Historial(usuario,documento,miLista,total));
                break;
        //Se muestra el historial
        case 7: console.log(miHistorial);
                console.log("------------------------ MI HISTORIAL ----------------");
                for(const historial of miHistorial){
                    console.log("Nombre Completo: " + historial.nombre + "\nDocumento: " + historial.documento);
                    console.log("Articulos comprados: " + historial.lista.join(", "));
                    console.log("Total: " + historial.total);
                    console.log("Fecha: " + historial.fecha);
                    console.log("---------------------------------------------------------");
                }
                break;

        case 0: break;
        default: alert("Opcion incorrecta!! Vuelva a introducir una opcion.");
    }

} while(opcion != 0);


//Funcion para mostrar la lista de objetos
function mostrarLista(listaComics){
    for(const comic of listaComics){
        console.log("Id: " + comic.id + ", Titulo: " + comic.titulo + ", Precio: " + comic.precio + ", Autor: " + comic.autor);
    }
}

//Funcion que muestra el total de los precios del carrito

function mostrarTotal(){
    const totalCarrito = carrito.reduce((acumulador, comic) => acumulador + comic.precio, 0);
    return totalCarrito;
}