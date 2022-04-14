const listaComics = JSON.parse(localStorage.getItem("listaDeProductos"));

let formulario = document.getElementById("formulario");
let busqueda = document.getElementById("buscador");


formulario.addEventListener("submit",buscar);

function buscar(e){
    e.preventDefault();
   
    const resultado = listaComics.filter((comic) => comic.titulo.toLowerCase().includes(busqueda.value.toLowerCase()));
    mostrarLista(resultado);
    resultado.splice(0,resultado.length);


}

function mostrarLista(listaComics){
    listaBuscada.innerHTML = "";
    for(const comic of listaComics){
        let articulo = document.createElement("div");
    
        articulo.classList.add("card");
    
        articulo.innerHTML = `
        <img src=".${comic.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${comic.titulo}</h5>
          <p class="card-text">Precio: ${comic.precio}</p>
        </div>`;
    
        listaBuscada.append(articulo);
    }
}
