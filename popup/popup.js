const addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
}
