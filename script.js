const convertButton = document.querySelector("#convertButton");

convertButton.addEventListener("click", function () {
  const unitInput = document.querySelector("#unitInput").value;
  const unitFrom = document.querySelector("#unitFrom").value;
  const unitTo = document.querySelector("#unitTo").value;

  // Fylll inn og logg alle variabler for å se om vi henter riktig før vi går videre i koden
  console.log(
    "Knappen er trykket!",
    convertButton,
    unitInput,
    unitFrom,
    unitTo
  );

  if (unitFrom === "MM" && unitTo === "CM") {
    let result = unitInput / 10;
    const displayResult = document.querySelector("#displayResult");
    displayResult.textContent = result;
  } else {
    console.log("Julie vil ikke gjøre matte");
  }
});

const addTodo = document.querySelector("#addTodo");

addTodo.addEventListener("click", function (avent) {
  avent.preventDefault();
  console.log("Knappen er trykket!");

  const userInput = document.querySelector("#userInput").value;
  console.log(userInput);

  const todoList = document.querySelector("#todoList");
  const todoItem = document.createElement("li");

  todoItem.textContent = userInput;

  todoList.appendChild(todoItem);

  document.querySelector("#userInput").value = "";


  const finishButton = document.createElement("button");

  finishButton.textContent = "ferdig";
  
  todoItem.appendChild(finishButton);

  finishButton.addEventListener("click", function() {
    console.log("Ferdig kapp er trukket");

    if(todoItem.classList.contains("finished")) {
      todoItem.classList.remove("finished")
    } else {

    todoItem.classList.add("finished");
    }

  });

  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Slett";

  todoItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function() {
    console.log("Slett knapp er trukket");
    
    if(todoItem.classList.contains("finished")) {
      todoItem.remove()
     } else{
      alert("Gjøremålet må markeres ferdig før sletting")
     }

  });

});

