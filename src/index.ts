//Selector
const inputtingTodos =(<HTMLInputElement>document.querySelector('.task-input input'))
const vChecking = (<HTMLIFrameElement>document.querySelector('.task-input i'))
const listTodo = (<HTMLElement>document.querySelector('.task-box'))
const dockingControl = (<HTMLElement>document.querySelector('.controls'))
const quantity = (<HTMLElement>document.querySelector('.count'))
const clearingAll =(<HTMLButtonElement>document.querySelector('.clear-btn'))
const filterSelector = document.querySelectorAll('.filters > span')

interface todo{
  content?: string
  status?: string
}
//window running
window.updatingCheck = updatingCheck
window.deletingTodo = deletingTodo
window.editTodo = editTodo
window.editContent = editContent

//Variables
let todos: todo[]
let idFilter: string = 'all'
let count: number
todos = JSON.parse(localStorage.getItem('todo-list') || '[]')

// Listener Event
inputtingTodos?.addEventListener('keyup', saveTodos)
vChecking?.addEventListener('click', checkingAll)
clearingAll.addEventListener('click', clearingAllCompleted)

//Function
function saveLocal() {
  localStorage.setItem('todo-list', JSON.stringify(todos))
  showTodos(idFilter)
}

function showTodos(idFilter: string) {
  let li: string = ''
  let todoPending: todo[]
  let todoCompleted: todo[]
  count = todos.length

  if (todos) {
    todos.forEach((item, index) => {
      if (item.status === 'completed') {
        count-= 1
      }
      let itemCompleted = item.status === 'completed' ? 'checked' : ''

      if (idFilter === item.status || idFilter === 'all') {
        li += `<li class="task">
                <div class="box-task">
                  <input onclick="updatingCheck(this)" type="checkbox" id="${index}" ${itemCompleted}>
                  <span ondblclick="editTodo(this)" class="${index} ${itemCompleted}">${item.content}</span>
                </div>
                <div class="task-close">
                  <i onclick="deletingTodo(${index})" class="fas fa-trash-alt"></i>
                </div>
              </li>`;
      }

      if (item.status === 'completed') {
        clearingAll.style.opacity = '1'
      }
    })
  }

  //fix bug hide-show btn clear all
  todoPending = todos.filter(todoPending => todoPending.status === 'pending');
  if (todoPending.length === 0 || todoPending.length === todos.length){
    clearingAll.style.opacity = '0'
    vChecking.style.opacity = '0.1'
    vChecking.classList.remove('check-all')
  }

  todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
  if (todoCompleted.length === todos.length){
    clearingAll.style.opacity = '1'
    vChecking.style.opacity = '1'
    vChecking.classList.add('check-all')
  } else {
    vChecking.classList.remove('check-all')
  }

  listTodo.innerHTML = li
  if (todos.length !== 0) {
    vChecking.style.display = 'inline'
    dockingControl.style.display = 'flex'
    quantity.innerText = `${count}`
  } else {
    dockingControl.style.display = 'none'
    vChecking.style.display = 'none'
    quantity.innerText = `${count}`
  }
}
showTodos(idFilter)

function saveTodos(e: any) {
  let contentTodo = inputtingTodos?.value.trim()
  if (e.key === 'Enter' && contentTodo) {
    if(!todos){
      todos = []
    }

    let todoInfo = {
      content: contentTodo,
      status: 'pending',
    }

    todos.push(todoInfo)
    inputtingTodos.value = ''
    saveLocal();
  }
}

function updatingCheck(e: any) {
  count = todos.length
  let taskContent = e?.parentElement?.lastElementChild
  let listTodo = e?.parentElement?.parentElement

  let todoCompleted: todo[]
  let todoPending: todo[]
  if (e.checked) {
    taskContent.classList.add('checked')
    taskContent.style.opacity = '0.5'
    todos[e.id].status = 'completed'
  } else {
    taskContent.classList.remove('checked')
    taskContent.style.opacity = '1'
    clearingAll.style.opacity = '0'
    todos[e.id].status = 'pending'
  }

  todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed')
  if (todoCompleted.length > 0) {
    clearingAll.style.opacity = '1'
  } else {
    clearingAll.style.opacity = '0'
  }

  if (todoCompleted.length === todos.length) {
    vChecking.classList.add('check-all')
    vChecking.style.opacity = '1'
  } else {
    vChecking.classList.remove('check-all')
    vChecking.style.opacity = '0.1'
  }

  todoPending = todos.filter(todoPending => todoPending.status === 'pending')
  if (todoPending.length === todos.length) {
    clearingAll.style.opacity = '0'
  }

  if (idFilter === 'pending' && e.checked === true) {
    listTodo.style.display = 'none'
  } else if (idFilter === 'completed' && e.checked === false) {
    listTodo.style.display = 'none'
  } else {
    listTodo.style.display = 'flex'
  }

  quantity.innerText = `${count-todoCompleted.length}`
  localStorage.setItem('todo-list', JSON.stringify(todos))
}

function checkingAll() {
  if (vChecking.classList.contains('check-all') === false) {
    vChecking.classList.add('check-all')
    clearingAll.style.opacity = '1'
    todos.forEach( (item) => {
      item.status = 'completed'
    })
  } else {
    vChecking.classList.remove('check-all')
    clearingAll.style.opacity = '0.1'
    todos.forEach( (item) => {
      item.status = 'pending'
    })
  }
  saveLocal();
}

function deletingTodo(idDelete: any) {
  todos.splice(idDelete, 1)
  localStorage.setItem('todo-list', JSON.stringify(todos))
  if (todos.length === 0) {
    dockingControl.style.display = 'none'
    clearingAll.style.display = 'none'
  }
  showTodos(idFilter)
}

function clearingAllCompleted() {
  let allTodoPending: todo[]
  allTodoPending= todos.filter(allTodoPending => allTodoPending.status !== 'completed')
  todos = allTodoPending;

  if (todos.length === 0) {
    vChecking.style.display = 'none'
    dockingControl.style.display = 'none'
  }
  vChecking.classList.remove('check-all')
  clearingAll.style.opacity = '0'
  saveLocal();
}

function editTodo(content: any) {
  const deletingSelector =(<HTMLElement>content.parentElement.parentElement.lastElementChild)
  const boxInput =(<HTMLInputElement>content.parentElement.firstElementChild)
  deletingSelector.style.opacity = '0'
  boxInput.style.opacity = '0'
  let valueEdit: string = content.innerText
  content.innerText = ''
  content.innerHTML += `<input onclick="editContent(this)" class="edit" type="text" value="${valueEdit}"></input>`;
}

function editContent(input: any) {
  const spanTag: any = input.parentElement
  const liTodo: any = input.parentElement.parentElement.parentElement;
  const deletingSelector =(<HTMLElement>spanTag.parentElement.parentElement.lastElementChild)
  const spanEdit: any = input.parentElement.firstElementChild
  let boxInput = spanTag.parentElement.firstElementChild;
  input.addEventListener('blur keyup', (e: any) => {
    console.log("ahihi");
    if (e.type === 'blur' || e.keyCode === 13) {
      console.log('1');
      if (input.value === '') {
        liTodo.remove()
        todos.splice(spanEdit.classList[0], 1)
        saveLocal()
      } else {
        e.preventDefault()
        console.log(spanTag);
        spanTag.innerText = input.value
        input.style.display = 'none'
        deletingSelector.style.opacity = '1'
        boxInput.style.opacity = '1'
        todos[spanTag?.classList[0]].content = spanTag.innerText
        saveLocal()
      }
    } else {
      console.log('2');
    }
    // if (input.value === '') {
    //   if (e.keyCode === 13) {
    //     liTodo.remove();
    //     todos.splice(spanEdit.classList[0], 1)
    //     saveLocal()
    //   }
    // } else {
    //   if (e.keyCode === 13) {
    //     console.log("2");
    //     e.preventDefault()
    //     console.log(spanTag);
    //     spanTag.innerText = input.value
    //     input.style.display = 'none'
    //     deletingSelector.style.opacity = '1'
    //     boxInput.style.opacity = '1'
    //     todos[spanTag?.classList[0]].content = spanTag.innerText
    //     saveLocal()
    //   }
    // }
  })

  // input.addEventListener('blur', (e: any) => {
  //   if (input.value === '') {
  //     liTodo.remove();
  //     todos.splice(spanEdit.classList[0], 1)
  //     saveLocal();
  //   } else {
  //     e.preventDefault()
  //     spanTag.innerText = input.value
  //     input.style.display = 'none'
  //     deletingSelector.style.opacity = '1'
  //     boxInput.style.opacity = '1'
  //     todos[spanTag?.classList[0]].content = spanTag.innerText
  //     saveLocal();
  //   }
  // })
}

filterSelector.forEach((btn) => {
  btn.addEventListener('click', () => {
    document?.querySelector('span.active')?.classList.remove('active');
    btn.classList.add('active');
    showTodos(btn.id)
    return idFilter = btn.id
  })
})
