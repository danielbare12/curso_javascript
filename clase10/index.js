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

let opcion;

//Luego se da la opcion de eliminar un articulo, cambiar el titulo de un comic o salir

do{
    opcion = parseInt(prompt("1) Eliminar un articulo.\n2) Cambiar titulo\n3) Salir\nIntroduce una opcion: "));

    switch(opcion){
        case 1: let i = parseInt(prompt("Ingrese la numero de fila del articulo a eliminar: "));
                i--;
        
                let comics = document.getElementsByTagName("li");
        
                comics[i].remove();
                break;
        case 2: let j = parseInt(prompt("Ingrese la numero de fila del titulo a cambiar: "));
                j--;

                let titulos = document.getElementsByClassName("titulo");

                titulos[j].innerText = prompt("Ingrese el nuevo titulo: ");
                break;
        case 3: break;
        default: alert("Opcion incorrecta!");
    }

} while(opcion != 3);


