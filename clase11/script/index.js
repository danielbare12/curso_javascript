//inicializando clases

class Comic {

    constructor(id,titulo, precio, autor, imagen) {
        this.id = id;
        this.titulo = titulo;
        this.precio = precio;
        this.autor = autor;
        this.imagen = imagen;

    }
}


const batman1 = new Comic(1,"Batman: La Broma Asesina", 1800, "Alan Moore", "./media/batman1.webp");
const batman2 = new Comic(2,"Batman: El Regreso Del Caballero Oscuro", 2300, "Frank Miller", "./media/batman2.jpg");
const batman3 = new Comic(3,"Batman: Año Uno", 1700, "Frank Miller", "./media/batman3.jpg");
const watchmen = new Comic(4,"Watchmen", 3000, "Alan Moore", "./media/watchmen.png");
const spiderman1 = new Comic(5,"Spiderman: La Última Cacería De Kraven", 1400, "J. M. DeMatteis", "./media/spiderman.webp");
const onepiece = new Comic(6,"One Piece Volumen 1", 600, "Eichiro Oda", "./media/onepiece.jpg");

const listaComics = [batman1, batman2, batman3, watchmen, spiderman1, onepiece];

//guardando en el storage

const listaEnJson = JSON.stringify(listaComics);

localStorage.setItem("listaDeProductos", listaEnJson);


let listaOrd = document.getElementById("listaProductos");
//mostrando en la pagina

for (const comic of listaComics) {
    let articulo = document.createElement("div");

    articulo.classList.add("card");

    articulo.innerHTML = `
    <img src="${comic.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${comic.titulo}</h5>
      <p class="card-text">Precio: ${comic.precio}</p>
      <button type="button" id="${comic.id}" class="boton btn btn-primary">Comprar</button>   
      </div>`;


    listaOrd.append(articulo);

}

//agregando al carrito

const botones = document.querySelectorAll(".boton");

botones.forEach(element => { element.addEventListener("click",agregarProducto)
});


const carrito = [];

function agregarProducto(e){
    const producto = e.target.closest(".card");
    const tituloProducto = producto.querySelector(".card-title").textContent;

    console.log(tituloProducto);

    for(let i = 0; i < listaComics.length; i++){
        if(listaComics[i].titulo == tituloProducto){
            carrito.push(listaComics[i]);
        }
    }

    const listaEnJsonCarrito = JSON.stringify(carrito);
localStorage.setItem("carrito", listaEnJsonCarrito);


}

