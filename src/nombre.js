document.getElementById('nombre-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const mensajeDiv = document.getElementById('mensaje-div');
    
    mensajeDiv.innerHTML = `<p>Hola ${nombre}</p>`;
});