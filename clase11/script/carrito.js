const listaProductos = JSON.parse(localStorage.getItem("carrito"));

let listaCarrito = document.getElementById("listaCarrito");

for (const comic of listaProductos) {
    let articulo = document.createElement("div");

    articulo.classList.add("productoCarrito");

    articulo.innerHTML = `<div>
    <img  class="imagenCarrito" src=".${comic.imagen}" alt="">
            </div>
        <div class="descripcionCarrito">
         <h2>${comic.titulo}</h2>
         <p>Precio: ${comic.precio}</p>
         <p>Autor: ${comic.autor}</p>
        </div>
    `;


    listaCarrito.append(articulo);

}

let total = document.getElementById("precioTotal");
const listaPrecios = listaProductos.map((a) => a.precio);
const totalPrecio = listaPrecios.reduce((a,b) => a+b,0);

total.innerText = `TOTAL: ${totalPrecio}`;

let botonFinalizar = document.getElementById("botonFinalizar");
botonFinalizar.addEventListener("click",finalizar);

function finalizar(){
    carrito = [];
    const listaEnJsonCarrito = JSON.stringify(carrito);
localStorage.setItem("carrito", listaEnJsonCarrito);
document.location.reload(true)
}