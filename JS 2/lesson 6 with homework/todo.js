const button = document.querySelector(".addtodo");
class ToDoList {
  constructor() {
    this.tasksToDo = [];

  }
  addTodoTask() {
    const inputtext = document.querySelector(".inputtext");

    if (inputtext.value == "") {
      alert(" Enter Task Please !!! ");
      return;
    } else {
      const taskText = inputtext.value;
      const newTask = {
        id: Math.floor(Math.random() * 100000),
        task: taskText,
        isCompleted: false,
      };
      this.tasksToDo.push(newTask);
      inputtext.value = "";
    }
    this.renderTask()
  }

  renderTask() {
    const tasksList = document.querySelector("#tasksList");
    tasksList.innerHTML = "";
    this.tasksToDo.forEach(({ id, task, isCompleted }) => {
      const tasks = document.createElement("li");
      tasks.setAttribute("id", id);
      tasks.setAttribute("class", "list-group-item task-item");

      const newSpan = document.createElement("span");
      newSpan.innerHTML = task;

      const btn = document.createElement("button");
      btn.setAttribute("class", "btn");
      btn.setAttribute("id", id);
      btn.innerText = "Delete";

      btn.addEventListener("click", (e) => {
        this.tasksToDo = this.tasksToDo.filter(({ id }) => id !== Number(e.target.id))

        this.renderTask()
        // btn.parentNode.remove();
      });

      tasks.appendChild(newSpan);
      tasks.appendChild(btn);
      tasksList.appendChild(tasks);
    });

  }
}
const toDoList = new ToDoList();


button.addEventListener("click", () => {
  toDoList.addTodoTask()
})