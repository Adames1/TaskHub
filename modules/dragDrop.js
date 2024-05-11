let draggableTasks = null;

function handleDragStart() {
  this.style.opacity = 0.4;
  draggableTasks = this;
}

function handleDragEnd() {
  draggableTasks = null;
  this.style.opacity = 1;
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  return false;
}

function handleDragEnter() {
  this.classList.add("over");
}

function handleDragLeave() {
  this.classList.remove("over");
}

function handleDrop() {
  this.appendChild(draggableTasks);
}

export {
  handleDragStart,
  handleDragEnd,
  handleDrop,
  handleDragOver,
  handleDragEnter,
  handleDragLeave,
};
