document.getElementById('nombre-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const genero = document.getElementById('genero').value;
    const idioma = document.getElementById('idioma').value;
    const mensajeDiv = document.getElementById('mensaje-div');
    
    const hora = new Date().getHours();
    let saludoHora;
    if (hora < 12) {
        saludoHora = idioma === 'es' ? 'Buenos días' : 'Good morning';
    } else if (hora < 18) {
        saludoHora = idioma === 'es' ? 'Buenas tardes' : 'Good afternoon';
    } else {
        saludoHora = idioma === 'es' ? 'Buenas noches' : 'Good evening';
    }

    let saludoGenero;
    if (edad > 40) {
        saludoGenero = genero === 'masculino' ? (idioma === 'es' ? 'Señor' : 'Mr.') : (idioma === 'es' ? 'Señora' : 'Mrs.');
    } else {
        saludoGenero = genero === 'masculino' ? (idioma === 'es' ? 'Señorito' : 'Young man') : (idioma === 'es' ? 'Señorita' : 'Miss');
    }

    const saludoFinal = `${saludoHora}, ${saludoGenero} ${nombre}`;
    mensajeDiv.innerHTML = `<p>${saludoFinal}</p>`;
});