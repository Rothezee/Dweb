document.addEventListener("DOMContentLoaded", () => {
    const pantallita = document.getElementById("display");
    const igual = document.getElementById("btn-igual");

    igual.addEventListener("click", () => {
        try {
            let resultado = eval(pantallita.textContent);
            pantallita.textContent = resultado;
        } catch (error) {
            pantallita.textContent = "Error";
        }
    });

    igual.addEventListener("dblclick", () => {
        pantallita.textContent = "";
    });

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
        "btn-dot": "."
    };

    for (const id in botones) {
        const boton = document.getElementById(id);
        const valor = botones[id];

        boton.addEventListener("click", () => {
            pantallita.textContent += valor;
        });
    }
});
