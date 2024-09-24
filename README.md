Lista de Compras
Este proyecto es una aplicación de lista de compras interactiva que permite al usuario agregar artículos con su precio, eliminar artículos por nombre, ver la lista completa, ver el costo total de los artículos, y salir de la aplicación. Todo esto se realiza a través de un menú interactivo dentro de una función JavaScript.

Funcionalidades
Agregar un artículo a la lista: El usuario puede añadir un artículo junto con su precio. El artículo se agrega a la lista con el formato "Nombre del artículo - $precio".

Eliminar un artículo por nombre: El usuario puede eliminar un artículo de la lista ingresando el nombre exacto del artículo. El precio del artículo eliminado se resta del costo total.

Ver la lista de compras: El usuario puede ver todos los artículos agregados a la lista en formato de texto, mostrando cada artículo con su precio.

Ver costo total: Muestra el costo total de todos los artículos en la lista hasta el momento.

Salir de la aplicación: Permite al usuario finalizar la ejecución de la aplicación.

Uso
Iniciar la aplicación: Al ejecutar la función listaDeCompras(), se mostrará un menú interactivo con las siguientes opciones:

Opción 1: Agregar un nuevo artículo ingresando su nombre y precio.
Opción 2: Eliminar un artículo existente por su nombre.
Opción 3: Ver la lista completa de artículos y sus precios.
Opción 4: Ver el costo total acumulado de los artículos en la lista.
Opción 5: Salir de la aplicación.
Operaciones adicionales:

Validaciones: Se verifica que el nombre del artículo no esté vacío y que el precio ingresado sea un número positivo. Si no se cumple, se muestra un mensaje de error.
Actualización automática: Cada vez que se agrega o elimina un artículo, el costo total se actualiza automáticamente.

