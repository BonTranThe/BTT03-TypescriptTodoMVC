//Selector
const inputtingTodos =(<HTMLInputElement>document.querySelector('.task-input input'));
const vChecking = (<HTMLElement>document.querySelector('.task-input i'));
const listTodo = (<HTMLElement>document.querySelector('.task-box'));
const dockingControl = (<HTMLElement>document.querySelector('.controls'));
const quantity = (<HTMLElement>document.querySelector('.count'));
const clearingAll =(<HTMLButtonElement>document.querySelector('.clear-btn'));

interface todo{
  content?: string
  status?: string
}
//window running
window.updatingCheck = updatingCheck;

//Variables
let todos: todo[];
let idFilter: string = 'all';
let count: number;
todos = JSON.parse(localStorage.getItem('todo-list') || '[]');

// Listener Event
inputtingTodos?.addEventListener('keyup', saveTodos);
vChecking?.addEventListener('click', checkingAll);

//Function
function showTodos(idFilter: string) {
  let li: string = ''
  let todoPending: todo[]
  let todoCompleted: todo[]
  count = todos.length

  if (todos) {
    todos.forEach((item, index) => {
      if (item.status === 'completed') {
        count-= 1;
      }
      let itemCompleted = item.status === 'completed' ? 'checked' : '';

      if (idFilter === item.status || idFilter === 'all') {
        li += `<li class="task">
                <label>
                  <input onclick="updatingCheck(this)" type="checkbox" id="${index}" ${itemCompleted}>
                  <span class="${index}" ${itemCompleted}>${item.content}</span>
                </label>
                <div class="task-close">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </li>`;
      }

      if (item.status === 'completed') {
        clearingAll.style.opacity = '1';
      }
    })
  }

  //fix bug hide-show btn clear all
  todoPending = todos.filter(todoPending => todoPending.status === 'pending');
  if (todoPending.length === 0 || todoPending.length === todos.length){
    clearingAll.style.opacity = '0'
    vChecking.style.opacity = '0.1'
  }
  todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
  if (todoCompleted.length > 0 || todoCompleted.length === todos.length){
    clearingAll.style.opacity = '1'
    vChecking.style.opacity = '1'
  }

  listTodo.innerHTML = li;
  if (todos.length !== 0) {
    vChecking.style.display = 'inline';
    dockingControl.style.display = 'flex';
    quantity.innerText = `${count}`;
  } else {
    dockingControl.style.display = 'none';
    vChecking.style.display = 'none';
  }
}
showTodos(idFilter);

function saveTodos(e: any) {
  let contentTodo = inputtingTodos?.value.trim();
  if (e.key === 'Enter' && contentTodo) {
    if(!todos){
      todos = [];
    }

    let todoInfo = {
      content: contentTodo,
      status: 'pending',
    }

    todos.push(todoInfo)
    inputtingTodos.value = ''
    localStorage.setItem('todo-list', JSON.stringify(todos))
    showTodos(idFilter);
  }
}

function updatingCheck(e: any) {
  count = todos.length;
  let taskContent = e?.parentElement?.lastElementChild
  let todoCompleted: todo[];
  let todoPending: todo[];

  if (e.checked) {
    taskContent.classList.add('checked')
    clearingAll.style.opacity = '1'
    todos[e.id].status = 'completed'
  } else {
    taskContent.classList.remove('checked')
    todos[e.id].status = 'pending'
  }

  todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed')
  if (todoCompleted.length === todos.length) {
    vChecking.style.opacity = '1';
  } else {
    vChecking.style.opacity = '0.1';
  }

  todoPending = todos.filter(todoPending => todoPending.status === 'pending');
  if (todoPending.length === todos.length) {
    clearingAll.style.opacity = '0';
  }

  quantity.innerText = `${count-todoCompleted.length}`;
  localStorage.setItem('todo-list', JSON.stringify(todos))
}

function checkingAll() {
  if (vChecking.classList.contains('check-all') === false) {
    clearingAll.style.opacity = '1'
    vChecking.classList.add('check-all')
    todos.forEach( (item) => {
      item.status = 'completed'
    })
  } else {
    clearingAll.style.opacity = '0.1'
    vChecking.classList.remove('check-all')
    todos.forEach( (item) => {
      item.status = 'pending'
    })
  }
  localStorage.setItem('todo-list', JSON.stringify(todos))
  showTodos(idFilter);
}
