// guardar las tareas en el localStorage
function saveTasks(task) {
  localStorage.setItem("tasks", JSON.stringify(task));
}

// cargar las tareas guardadas en el localStorage
function loadTask() {
  const taskStrings = localStorage.getItem("tasks");
  return taskStrings ? JSON.parse(taskStrings) : [];
}

// exportar funciones
export { saveTasks, loadTask };
