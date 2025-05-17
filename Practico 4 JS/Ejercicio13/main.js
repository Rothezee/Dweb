let boton = document.getElementById("crear");
let tabla = document.getElementById("table");

boton.addEventListener("click", () => {
    let cantfilas = document.getElementById("filas").value;
    let cantcolumnas = document.getElementById("columnas").value;

    console.log(cantfilas, cantcolumnas);

    tabla.innerHTML = ""; // limpia la tabla anterior

    for (let i = 0; i < cantfilas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < cantcolumnas; j++) {
            let celda = document.createElement("td");
            celda.textContent = `Fila ${i + 1} Columna ${j + 1}`;
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
});
