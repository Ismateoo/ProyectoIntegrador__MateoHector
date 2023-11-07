const contenedor = document.getElementById("contenedor")
const modal = document.getElementById("miModal");
const botonMostrar = document.getElementById("abrirModal");
const botonCerrar = document.getElementById("cerrarModal");
const caracteristicas = document.getElementById("caracteristicas2")


function mostrarModal () {
    modal.style.display = "block";
    contenedor.style.display = "none"
}

function cerrarModal() {
    modal.style.display = "none";
    contenedor.style.display = "flex"
}


caracteristicas.onclick = cerrarModal;
botonMostrar.onclick = mostrarModal;
botonCerrar.onclick = cerrarModal;