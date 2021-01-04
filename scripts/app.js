/**
 * Punto de entrada de la aplicación.
 */

/**
 * 1. Llamar a la API y obtener una película
 * 2. Setear todas las variables de estado (intentos, palabra a adivinar, etc)
 * 3. Hacer un primer "pintado" del DOM
 * 4. Añadir listener para que cada vez que el usuario pulse una tecla, se genere un evento y se actualice el estado de toda nuestra aplicación
 */

document.addEventListener('keydown', checkNewLetter);

function checkNewLetter(event) {
    // Actualizar estado...
    // Repintar el DOM...
    console.log(event)
}
