export function changeBackground(img) {
  let valueImg = img.target.attributes.src.value;
  document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0.75)),
  url(${valueImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;`;

//   guardar el fondo en la memoria local
  localStorage.setItem("backgroundImage", valueImg);
}

// cargar el fondo para mantener luego de refrescar la pagina
document.addEventListener("DOMContentLoaded", () => {
  let saveImg = localStorage.getItem("backgroundImage");
  if (saveImg) {
    document.body.style = `background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0.75)),
  url(${saveImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;`;
  }
});
