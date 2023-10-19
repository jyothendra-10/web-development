document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <div class="task-text">${taskText}</div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            const deleteButton = listItem.querySelector(".delete");
            const editButton = listItem.querySelector(".edit");

            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });

            editButton.addEventListener("click", function () {
                editTask(listItem);
            });
        }
    });

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    function editTask(taskElement) {
        const taskTextElement = taskElement.querySelector(".task-text");
        const editButton = taskElement.querySelector(".edit");
        const editForm = document.createElement("div");
        editForm.innerHTML = `
            <input type="text" value="${taskTextElement.innerText}">
            <button class="save">Save</button>
        `;
        taskTextElement.replaceWith(editForm);
        editButton.disabled = true;

        const saveButton = editForm.querySelector(".save");
        saveButton.addEventListener("click", () => {
            const updatedTaskText = editForm.querySelector("input").value;
            if (updatedTaskText.trim() !== "") {
                taskTextElement.innerText = updatedTaskText;
                taskElement.appendChild(taskTextElement);
            }

            editButton.disabled = false;
            editForm.remove();
        });
    }
});
