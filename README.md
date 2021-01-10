# El Joc del Penjat (versió películes)

Completa el proyecto siguiendo los requisitos descritos en __requisitos.txt__
[Demo](https://hangman-ajax-app.vercel.app/) del proyecto.
[Demo en Github Pages](https://omiras.github.io/hangman-ajax-app/)

## Pasos para afrontar el proyecto

0. Renombra la carpeta __script__ que contiene la solución al prpoyecto.
1. Implementad primero el fichero requests.js. Cread la función y comprobad que hace lo que tiene que hacer (devolver un objeto con la película recupera de la API)
2. Seteis manualmente el estado de la aplicación (palabra a resolver, número de intentos, etc). Implementad el **dom.js**; hasta que consigais que en función de las letras probadas os muestre correctamente la información gráfica.
   1. Primera implementación: Dada una frase cualquiera, que muestre tantos asteríscos como letras tiene la frase. Además, que haga el seprado de las palabras con un espacio
   2. Implementad la funcionalidad que comprueba las letras ya probadas, y cambie los asteríscos por letras.
3. Unir todas las partes: actualizar el estado usando las funciones de cambio de estado, modificar el DOM después de pulsar una tecla, etc.
