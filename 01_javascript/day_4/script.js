const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  const li = document.createElement("li"); // <li></li>
  li.textContent = taskText; // <li>{taskText}</li>

  li.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
