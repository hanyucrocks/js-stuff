let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks(filter = ""){
    const list = document.getElementById("tasklist");
    list.innerHTML = "";
    tasks
    .filter(task => task.text.toLowerCase().includes(filter.toLowerCase()))
    .forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
  <span contenteditable="true" onblur="editTask(${index}, this.textContent)">${task.text}</span>
  <button onclick="deleteTask(${index})">❌</button>
`;

        list.appendChild(li); 
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
    const input = document.getElementById("taskInput");
    if(input.value.trim()){
        tasks.push({text: input.value.trim()});
        input.value ="";
        renderTasks();
    }
}

function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index, newText){
    tasks[index].text = newText.trim();
    renderTasks();
}

document.getElementById("search").addEventListener("input", (e) => {
    renderTasks(e.target.value);
})

renderTasks();