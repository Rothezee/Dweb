document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");

    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;

        const centerX = h1.offsetLeft + h1.offsetWidth / 2;
        const centerY = h1.offsetTop + h1.offsetHeight / 2;

        // Distancia desde el centro del h1 al mouse (inversa para simular sombra)
        const offsetX = (centerX - clientX) / 20;
        const offsetY = (centerY - clientY) / 20;

        // Sombra proyectada en dirección contraria al cursor (como si el sol fuera el mouse)
        h1.style.boxShadow = `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.6)`;

        // Efecto de brillo (cambia gradiente según ángulo del "sol")
        const gradX = (clientX / window.innerWidth) * 100;
        const gradY = (clientY / window.innerHeight) * 100;

        h1.style.background = `radial-gradient(circle at ${gradX}% ${gradY}%, #fdd, #a12b2b)`;
    });
});