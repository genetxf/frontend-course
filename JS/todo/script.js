const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const storageKey = "todo-items";

function createTodoId() {
  return globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;
}
function getDefaultTodos() {
  return [
    { id: createTodoId(), text: "Learn Object", completed: false },
    { id: createTodoId(), text: "Practice DOM events", completed: false },
    { id: createTodoId(), text: "Build a small project", completed: true },
  ];
}
let all = getDefaultTodos();

form.addEventListener('submit', (e) => { 
    e.preventDefault();
    const text = input.value;
    const newTodo =    { id: createTodoId(), text: text, completed: false } 
    all.push(newTodo);
    renderElement(all)
})


function deleteTodo(id) {
    console.log(id);
    all = all.filter((item) => item.id != id);
    renderElement(all)
}
function renderElement(todos) {
  const className =
    "flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 p-3";
  const deleteBtnClass =
    "grid h-9 w-9 place-items-center rounded-md bg-rose-100 text-lg font-bold text-rose-700 transition hover:bg-rose-200 focus:outline-none focus:ring-4 focus:ring-rose-100";

  let allElement = "";
  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const element = `
        <li id="${item.id}" class="${className}">
            <span>
            ${item.text}
            </span>
            <button onclick="deleteTodo('${item.id}')" class="${deleteBtnClass}">X</button>
        </li>
    `;
    allElement += element;
  }
  list.innerHTML = allElement;
}
renderElement(all);

