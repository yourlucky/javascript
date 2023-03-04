const toDoForm = document.querySelector("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("todo-list");

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newTodo;
  toDoList.appendChild(li);
  //console.log(li);
  //   li.id = newTodoObj.id;
  //   const span = document.createElement("span");
  //   span.innerText = newTodoObj.text;
  //   const button = document.createElement("button");
  //   button.innerText = "❌";
  //   li.appendChild(span);
  //   li.appendChild(button);
  //   toDoList.appendChild(li);
  // }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
