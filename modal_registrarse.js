const modalRegistrarse = document.getElementById("modal_registrarse");
const botonRegistrarse = document.getElementById("boton__registrarse");
const xCerrarModal = document.getElementById("cerrarModalRegistrarse");
const boton__registrarseModal = document.getElementById("boton__registrarseModal");


function mostrarModalRegistrarse () {
    modalRegistrarse.style.display = "block";
    contenedor.style.display = "none"
    modal.style.display = "none";
}

function  ocultarModalRegistrarse() {
    modalRegistrarse.style.display = "none";
    contenedor.style.display = "flex"
}

botonRegistrarse.onclick = mostrarModalRegistrarse
xCerrarModal.onclick = ocultarModalRegistrarse
boton__registrarseModal.onclick = mostrarModalRegistrarse