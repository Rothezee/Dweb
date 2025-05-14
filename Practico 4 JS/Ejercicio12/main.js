const botones = {
    "btn-1": "1",
    "btn-2": "2",
    "btn-3": "3",
    "btn-4": "4",
    "btn-5": "5",
    "btn-6": "6",
    "btn-7": "7",
    "btn-8": "8",
    "btn-9": "9",
    "btn-0": "0",
    "btn-suma": "+",
    "btn-resta": "-",
    "btn-multiplicacion": "*",
    "btn-division": "/",
    "btn-punto": ".",
    "btn-igual": "="
};

const pantallita = document.getElementById("display");
const igual = document.getElementById("btn-igual");

// Agrega listeners a todos los botones salvo "="
for (const id in botones) {
    const boton = document.getElementById(id);
    const valor = botones[id];

    boton.addEventListener("click", () => {
        console.log(`Button ${valor} clicked`);
        pantallita.textContent += valor;
    });
}


function limpiarPantalla() {
    igual.addEventListener("dblclick", () => {
        pantallita.textContent = "";
    });
}


limpiarPantalla();