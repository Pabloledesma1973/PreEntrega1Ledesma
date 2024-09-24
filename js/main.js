function listaDeCompras() {
    let lista = ""; // Lista de compras como cadena
    let costoTotal = 0; // Total acumulado del costo
    let opcion; // Opción del usuario

    while (true) {
        // Mostrar el menú y obtener la opción del usuario
        opcion = prompt(
            "Elige una opción:\n" +
            "1. Agregar un artículo a la lista\n" +
            "2. Eliminar un artículo por nombre\n" +
            "3. Ver la lista de compras\n" +
            "4. Ver costo total\n" +
            "5. Salir"
        );

        switch (opcion) {
            case '1':
                // Agregar un artículo y su precio
                let nuevoArticulo = prompt("Ingresa el nombre del artículo:");
                if (nuevoArticulo) {
                    let precio = parseFloat(prompt("Ingresa el precio del artículo:"));
                    if (!isNaN(precio) && precio > 0) {
                        // Concatenamos el artículo y su precio a la cadena
                        lista += `${nuevoArticulo} - $${precio.toFixed(2)}\n`;
                        costoTotal += precio; // Sumar al costo total
                        alert(`"${nuevoArticulo}" ha sido añadido a la lista con un precio de $${precio.toFixed(2)}.`);
                    } else {
                        alert("El precio debe ser un número positivo.");
                    }
                } else {
                    alert("El artículo no puede estar vacío.");
                }
                break;

            case '2':
                // Eliminar un artículo por nombre y actualizar el costo total
                let articuloAEliminar = prompt("Ingresa el nombre del artículo que deseas eliminar:");
                if (lista.includes(articuloAEliminar)) {
                    // Buscar el artículo con su precio
                    let eliminar = new RegExp(`${articuloAEliminar} - \\$\\d+(\\.\\d{2})?`);
                    let articuloEncontrado = lista.match(eliminar);

                    if (articuloEncontrado) {
                        // Obtener el precio del artículo a eliminar
                        let precioAEliminar = parseFloat(articuloEncontrado[0].match(/\d+(\.\d{2})?/)[0]);
                        costoTotal -= precioAEliminar; // Restar el precio del costo total
                        lista = lista.replace(articuloEncontrado[0] + "\n", ""); // Eliminar el artículo de la cadena
                        alert(`"${articuloAEliminar}" ha sido eliminado de la lista y el costo total ha sido actualizado.`);
                    }
                } else {
                    alert(`"${articuloAEliminar}" no se encuentra en la lista.`);
                }
                break;

            case '3':
                // Ver la lista de compras
                if (lista.length > 0) {
                    alert("Lista de Compras:\n" + lista);
                } else {
                    alert("La lista de compras está vacía.");
                }
                break;

            case '4':
                // Ver el costo total
                if (costoTotal > 0) {
                    alert(`El costo total de los artículos en la lista es: $${costoTotal.toFixed(2)}`);
                } else {
                    alert("No hay artículos en la lista para calcular el costo total.");
                }
                break;

            case '5':
                // Salir
                alert("Saliendo de la aplicación.");
                return; // Salir de la función

            default:
                alert("Opción no válida. Por favor, elige una opción del 1 al 5.");
                break;
        }
    }
}

// Llamamos a la función
listaDeCompras();