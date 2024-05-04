// importar funciones
import { addTask } from "./modules/task.js";
import { changeBackground } from "./modules/background.js";

// declarar variables
const buttonAdd = document.getElementById("btn-add");
const contentForm = document.querySelector(".content__form");
const form = document.querySelector("form");
const textAreaContent = document.getElementById("type-text");

const buttonBg = document.querySelector(".button__bg");

// abrir el formulario para agregar la tarea
buttonAdd.addEventListener("click", () => {
  contentForm.style.display = "block";

  const closeForm = document.getElementById("btn-close");
  closeForm.addEventListener("click", () => {
    contentForm.style.display = "none";
  });
});

// funcion para agregar tarea
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let text = textAreaContent.value;

  if (text) {
    addTask(text);
  } else {
    alert("Este campo no puede estar vacio");
  }

  textAreaContent.value = "";
});

// evento click para abrir menu de imagenes de fondo y aplicar la misma
buttonBg.addEventListener("click", () => {
  const containerBg = document.querySelector(".select__background");
  const backgroundImg = containerBg.querySelectorAll("img");

  containerBg.classList.toggle("open");
  buttonBg.classList.toggle("open");

  backgroundImg.forEach((image) => {
    image.addEventListener("click", (img) => {
      changeBackground(img);
    });
  });
});
