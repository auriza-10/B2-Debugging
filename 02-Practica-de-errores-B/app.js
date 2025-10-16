/* Práctica 02. */
console.log('02. Práctica de errores B.');

// "Debuggeando el rebote"
// 🧩 Hay errores de tipo, sintaxis, referencia y lógica.

const canvas = document.querySelector("canvas");

// Tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

// Propiedades de la pelota que sea de color rojo
let ball = {
    x: 100,
    y: 100,
    radius: 30,
    color: 'red',
    speedX: 3,
    speedY: 2
};

// Función para dibujar la pelota
function drawBall() {
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
}

// Función para actualizar la posición
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Movimiento de la pelota
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // Rebote en los bordes
    if (ball.x > canvas.width || ball.x < 0) {
    ball.speedX *= -1;
    } else if (ball.y > canvas.height || ball.y < 0) {
    ball.speedY = ball.speedY * -1;
    }

    drawBall();
    requestAnimationFrame(update);
    
}

// Ejecutar animación
update();