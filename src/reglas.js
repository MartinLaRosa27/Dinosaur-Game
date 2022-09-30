export var puntaje = 0;

// Movimiento dinosaurio:
export function jump() {
  if (document.getElementById("character").classList !== "animate") {
    document.getElementById("character").classList.add("animate");
  }
  setTimeout(() => {
    document.getElementById("character").classList.remove("animate");
  }, 500);
}

// Puntaje y alerta:
setInterval(() => {
  const registro = JSON.parse(localStorage.getItem("registroStorage"));
  document.getElementById("hisScoreSpan").innerHTML = registro;
  let characterTop = parseInt(
    window
      .getComputedStyle(document.getElementById("character"))
      .getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window
      .getComputedStyle(document.getElementById("block"))
      .getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    alert("Perdiste :(");
    if (registro < puntaje) {
      localStorage.setItem("registroStorage", puntaje);
    }
    puntaje = 0;
    document.getElementById("scoreSpan").innerHTML = puntaje;
  } else if (blockLeft < 20 && blockLeft > 0 && characterTop !== 130) {
    puntaje++;
    document.getElementById("scoreSpan").innerHTML = puntaje;
  }
}, 100);

// Manejo por teclado:
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp" || e.code === "Space") {
    jump();
  }
});
