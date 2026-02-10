let todo = [];

let req = prompt("please enter your request");

while (true) {
  if (req == "quit") {
    console.log("Quiting app");
    break;
  }
  if (req == "list") {
    console.log("-------");
    for (let i = 0; i < todo.length; i++) {
      console.log(i, todo[i]);
    }
    console.log("-------");
  } else if (req == "add") {
    let task = prompt("Please enter the task you want to add");
    todo.push(task);
    console.log("Task added");
  } else if (req == "delete") {
    let idx = prompt("Please enter the task index");
    todo.splice(idx, 1);
    console.log("Task deleted");
    }else if(req === "new"){
    let index = prompt("Enter index to update");
    let newTask = prompt("Enter new task");
    todo[index] = newTask;
    console.log("Updated");
}else if(req ==="edit"){
    let index = prompt("Enter index to edit");
    let newTask = prompt("Enter new task");
    todo[index] = newTask;
    console.log("Edited");
  } else {
    console.log("Wrong request");
  }
  req = prompt("Please enter your request");
}
