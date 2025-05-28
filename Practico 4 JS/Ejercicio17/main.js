const canthijos = document.getElementById("canthijos");
const si = document.getElementById("si");
const no = document.getElementById("no");
const nombre = document.getElementById("nombrecompleto");
const boton = document.getElementById("enviarformulario");

let personas = [];
let tienehijos;
si.addEventListener("click", () =>{
    canthijos.style.display = "block";
    tienehijos = 1;
});

no.addEventListener("click", () =>{
    canthijos.style.display = "none";
    tienehijos = 0;
});

boton.addEventListener("submit",  (e) =>{
    e.preventDefault(e);
    let persona = {
        nombre: nombre.value,
        tienehijos : tienehijos,
        cantidad: canthijos.value
    }
    personas.push(persona);
    console.log(personas);
});