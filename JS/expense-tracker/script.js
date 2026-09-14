const input = document.getElementById("input");
const submitButton = document.getElementById("submit-btn");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");

const activeButtonClasses = "size-5 shrink-0 rounded border-2 border-zinc-300 bg-white";
const activeTitleClasses = "truncate text-base font-medium text-zinc-900";

function updateTaskCount() {
    const count = todoList.children.length;
    taskCount.textContent = `${count} ${count === 1 ? "task" : "tasks"}`;
}

function createTodoItem(taskText) {
    const item = document.createElement("li");
    item.className = "flex items-center gap-4 px-4 py-4";

    item.innerHTML = `
        <div class="min-w-0 flex-1">
            <p class="${activeTitleClasses}">${taskText}</p>
        </div>
        <button type="button" data-action="delete" class="rounded-md px-3 py-2 text-sm font-medium text-zinc-500 transition hover:bg-red-50 hover:text-red-700">Delete</button>
    `;
    return item;
}



function addTodo(event) {
    event.preventDefault();

    const taskText = input.value.trim();

    todoList.appendChild(createTodoItem(taskText));
    input.value = "";
    updateTaskCount();
}


function handleTodoClick(event) {
    const button = event.target.closest("button");

    const item = button.closest("li");

    if (button.dataset.action === "delete") {
        item.remove();
        updateTaskCount();
    }
}

submitButton.addEventListener("click", addTodo);
todoList.addEventListener("click", handleTodoClick);
updateTaskCount();
