const input = document.getElementById("input");
const addTask = document.getElementById("add");
// const deleteTask = document.querySelector(".delete");
const trashBin = document.querySelector(".fa-solid");

const allTasks = document.querySelector(".tasks");

const addTaskFunction = function () {
  let newTask = input.value;
  if (newTask == "") {
    alert("You should enter the task!");
  } else {
    let taskLabel = document.createElement("div");
    taskLabel.innerHTML += `<span>${newTask}</span> `;
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("delete");
    taskLabel.appendChild(deleteButton);
    allTasks.appendChild(taskLabel);

    input.value = "";
    addTask.disabled = true;

    input.addEventListener("input", function () {
      addTask.disabled = input.value == ""; //if input is empty, button is disabled
    });

    allTasks.addEventListener("click", function (e) {
      console.log(allTasks);

      if (e.target.tagName == "BUTTON") {
        targetElement = e.target;
      } else if (e.target.tagName == "I") {
        targetElement = e.target.parentElement;
      } else {
        return;
      }
      let removeTask = targetElement.parentElement;
      console.log(removeTask);

      allTasks.removeChild(removeTask);
    });
  }
};

addTask.addEventListener("click", addTaskFunction);

//! bugs
// 1 height and width of the container
// 2 height and width of the label
// 3 when i tap on the label, it deletes the task

// const input = document.getElementById("input");
// const addTask = document.getElementById("add");
// const deleteTask = document.querySelector(".delete");
// const allTasks = document.querySelector(".tasks");

// const addTaskFunction = function () {
//   let newTask = input.value;
//   if (input.value == "") {
//     alert("You should enter the task!");
//   } else {
//     allTasks.innerHTML += `<label for="">
//           ${newTask} <button class="delete"><i class="fa-solid fa-trash-can"></i></button
//         ></label>`;
//     input.value = "";
//     addTask.disabled = true;
//     input.addEventListener("click", function () {
//       addTask.disabled = false;
//     });
//   }
// };
// addTask.addEventListener("click", addTaskFunction);

// // deleteTask.addEventListener("click", function () {
// //   this.parentElement.remove();
// // });

// allTasks.addEventListener("click", function (e) {
//   if ( e.target.classList.contains("delete")) {

//   e.target.parentElement.remove();}
// });
