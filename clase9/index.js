class Comic{

    constructor(titulo, precio, autor){
        
        this.titulo = titulo;
        this.precio = precio;
        this.autor = autor;

    }
}




const batman1 = new Comic("Batman: La Broma Asesina",1800,"Alan Moore");
const batman2 = new Comic("Batman: El Regreso Del Caballero Oscuro",2300,"Frank Miller");
const batman3 = new Comic("Batman: Año Uno",1700,"Frank Miller");
const watchmen = new Comic("Watchmen",3000,"Alan Moore");
const spiderman1 = new Comic("Spiderman: La Última Cacería De Kraven",1400,"J. M. DeMatteis");
const onepiece = new Comic("One Piece Volumen 1",600,"Eichiro Oda");

const listaComics = [batman1,batman2,batman3,watchmen,spiderman1,onepiece];


let listaOrd = document.getElementById("lista");

//Primero agrego automaticamente todos los articulos para que se muestren en el html

for(const comic of listaComics){
    let articulo = document.createElement("li");

    articulo.innerHTML = `<h3 class = "titulo">${comic.titulo}</h3>
                        <p>Precio: ${comic.precio}</p>
                        <p>Autor: ${comic.autor}</p>`;

    listaOrd.append(articulo);
}

//Llamo al formulario para agregar nuevos comics a la lista y despues mostrarlos

let formulario = document.getElementById("formulario");
let tituloAgregado = document.getElementById("tituloAgregado");
let precioAgregado = document.getElementById("precioAgregado");
let autorAgregado = document.getElementById("autorAgregado");

formulario.addEventListener("submit",agregarComic);

function agregarComic(e){
    e.preventDefault();

    let articulo = document.createElement("li");

    listaComics.push(new Comic(tituloAgregado.value,precioAgregado.value,autorAgregado.value));

    articulo.innerHTML = `<h3 class = "titulo">${tituloAgregado.value}</h3>
                        <p>Precio: ${precioAgregado.value}</p>
                        <p>Autor: ${autorAgregado.value}</p>`;
    
    listaOrd.append(articulo);
    

    tituloAgregado.value = '';
    precioAgregado.value = "";
    autorAgregado.value = "";

}


//Aca se busca algun articulo en la lista y se muestra
let boton = document.getElementById("boton");
let busqueda = document.getElementById("busqueda");

boton.addEventListener("click",buscar);

function buscar(){
    
    
    const resultado = listaComics.filter((comic) => comic.titulo.toLowerCase().includes(busqueda.value.toLowerCase()));
    mostrarLista(resultado);
    resultado.splice(0,resultado.length);


}


function mostrarLista(listaComics){
    listaBuscada.innerHTML = "";
    for(const comic of listaComics){
        

        let articulo = document.createElement("article");
    
        articulo.innerHTML = `<h3 class = "titulo">${comic.titulo}</h3>
                            <p>Precio: ${comic.precio}</p>
                            <p>Autor: ${comic.autor}</p>`;
    
        listaBuscada.append(articulo);
    }

    busqueda.value = "";

}