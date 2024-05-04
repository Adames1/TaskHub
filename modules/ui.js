// importar las funciones
import { deleteTask, getTask, editTask } from "./task.js";

// funcion para mostrar la tarea en el documento
export function renderTask() {
  const listTask = document.querySelector(".list__task");
  listTask.innerHTML = "";

  getTask().forEach((task, index) => {
    let elementTask = `
            <div class="task">
                <p data-index="${index}">${task.content}</p>
                <div class="info__task">
                    <span class="date__task">${task.date}</span>
                    <div class="actions">
                        <i class="uil uil-pen" data-index="${index}"></i>
                        <i class="uil uil-trash-alt" data-index="${index}"></i>
                    </div>
                </div>
            </div>
            `;

    listTask.insertAdjacentHTML("beforeend", elementTask);
  });

  // llamar funcion para eliminar la tarea
  document.querySelectorAll(".uil-trash-alt").forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", () => {
      const index = parseInt(deleteIcon.getAttribute("data-index"));
      deleteTask(index);
      renderTask();
    });
  });

  // llamar funcion para editar la tarea
  document.querySelectorAll(".uil-pen").forEach((editIcon) => {
    editIcon.addEventListener("click", () => {
      const index = parseInt(editIcon.getAttribute("data-index"));
      const pElement =
        editIcon.parentElement.parentElement.previousElementSibling;

      // condicion para cambiar el icono de editar a guardar y viceversa
      if (editIcon.classList.contains("uil-pen")) {
        editIcon.classList.replace("uil-pen", "uil-save");
        pElement.contentEditable = "true";
        pElement.focus();
      } else {
        const newText = pElement.textContent;
        editTask(index, newText);
        renderTask();
        pElement.contentEditable = "false";
        editIcon.classList.replace("uil-save", "uil-pen");
      }
    });
  });
}
