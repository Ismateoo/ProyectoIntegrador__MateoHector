const contenedor = document.getElementById("contenedor")
const modal = document.getElementById("miModal");
const botonMostrar = document.getElementById("abrirModal");
const botonCerrar = document.getElementById("cerrarModal");
const caracteristicas = document.getElementById("modal__caracteristicas");
const producto = document.getElementById("modal__producto");
const precios = document.getElementById("modal__precios");


function mostrarModal () {
    modal.style.display = "block";
    contenedor.style.display = "none"
}

function cerrarModal() {
    modal.style.display = "none";
    contenedor.style.display = "flex"
}


caracteristicas.onclick = cerrarModal;
producto.onclick = cerrarModal;
precios.onclick = cerrarModal;
botonMostrar.onclick = mostrarModal;
botonCerrar.onclick = cerrarModal;