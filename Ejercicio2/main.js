let boton = document.getElementById("boton1");
boton.addEventListener("click", function() {
    if(boton.textContent === "pulsar"){
        boton.textContent = "pulsado";
    }else{
        boton.textContent = "pulsar";
    }
});
