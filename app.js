let input = prompt("What would you like to do?");

const todos = ["Play games", "Clean the house"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("--------------");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("--------------");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what's the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const indTodo = parseInt(
      prompt("Insert the index of the element you want to be removed")
    );
    if (!Number.isNaN(indTodo)) {
      const deleted = todos.splice(indTodo, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unkown index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!!");
