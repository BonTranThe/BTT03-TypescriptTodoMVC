//Selector
const inputtingTodos =(<HTMLInputElement>document.querySelector('.task-input input'));
const vChecking = (<HTMLElement>document.querySelector('.task-input i'));
const listTodo = (<HTMLElement>document.querySelector('.task-box'));
const dockingControl = (<HTMLElement>document.querySelector('.controls'));
const quantity = (<HTMLElement>document.querySelector('.count'));
console.log(quantity.textContent);


interface todo{
  content?: string
  status?: string
}
//Variables
let todos: todo[];
let idFilter:string = 'all';
let count: any;
todos = JSON.parse(localStorage.getItem('todo-list') || '[]');

// Listener Event
inputtingTodos?.addEventListener('keyup', saveTodos);

//Function
export function showTodos(idFilter: string) {
  let li: string = '';
  count = todos.length;
  console.log(count);

  if (todos) {
    todos.forEach((item, index) => {
      if(idFilter === item.status || idFilter === 'all') {
        li += `<li class="task">
                <div>
                  <input type="checkbox" id="${index}">
                  <span class="${index}">${item.content}</span>
                </div>
                <div class="task-close">
                  <i onclick="deleteTask(${index})" class="fa-solid fa-xmark"></i>
                </div>
              </li>`;
      }
    })
  }
  listTodo.innerHTML = li;
  if (todos.length !== 0) {
    vChecking.style.display = 'inline';
    dockingControl.style.display = 'flex';
    quantity.innerText = count;
  } else {
    dockingControl.style.display = 'none';
    vChecking.style.display = 'none';
  }
}
showTodos(idFilter);

export function saveTodos(e: any) {
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
