// importar funciones
import { saveTasks, loadTask } from "./storage.js";
import { renderTask } from "./ui.js";

let listTask = loadTask();
renderTask();

// funcion para añadir tarea
function addTask(text) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date();
  let formatDate = date.toLocaleDateString("en-US", options);

  listTask.push({ content: text, date: formatDate });
  saveTasks(listTask);
  renderTask();
}

// funcion para obtener la lista de tareas
function getTask() {
  return listTask;
}

// funcion para eliminar tarea
function deleteTask(index) {
  listTask.splice(index, 1);
  saveTasks(listTask);
}

// funcion para editar tarea
function editTask(index, newTask) {
  listTask[index].content = newTask;
  saveTasks(listTask);
}

// exportar funciones
export { addTask, getTask, deleteTask, editTask };
