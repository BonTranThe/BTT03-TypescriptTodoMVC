//Selector
const inputtingTodos =(<HTMLInputElement>document.querySelector('.task-input input'))
const vChecking = (<HTMLIFrameElement>document.querySelector('.task-input i'))
const listTodo = (<HTMLElement>document.querySelector('.task-box'))
const dockingControl = (<HTMLElement>document.querySelector('.controls'))
const quantity = (<HTMLElement>document.querySelector('.count'))
const clearingAll =(<HTMLButtonElement>document.querySelector('.clear-btn'))
const filterSelector = document.querySelectorAll('.filters > span')

interface Todo {
  content: string
  status: 'completed' | 'pending'
}
//window running
window.updatingCheck = updatingCheck
window.deletingTodo = deletingTodo
window.editContent = editContent

//Variables
let todos: Todo[]
let idFilter: string = 'all'
let count: number
todos = JSON.parse(localStorage.getItem('todo-list') || '[]')

// Listener Event
inputtingTodos.addEventListener('keyup', saveTodos)
vChecking.addEventListener('click', checkingAll)
clearingAll.addEventListener('click', clearingAllCompleted)

//Function
function saveLocal() {
  localStorage.setItem('todo-list', JSON.stringify(todos))
  showTodos(idFilter)
}

function showTodos(idFilter: string) {
  let li: string = ''
  let todoPending: Todo[]
  let todoCompleted: Todo[]
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
                  <input ondblclick="editContent(this)" type="text" class="${index} ${itemCompleted}" ${item.content} value="${todos[index].content}" readonly>
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
  todoPending = todos.filter(todoPending => todoPending.status === 'pending')
  if (todoPending.length === 0 || todoPending.length === todos.length){
    clearingAll.style.opacity = '0'
    vChecking.style.opacity = '0.1'
    vChecking.classList.remove('check-all')
  }

  todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed')
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

    let todoInfo: Todo = {
      content: contentTodo,
      status: 'pending',
    }

    todos.push(todoInfo)
    inputtingTodos.value = ''
    saveLocal()
  }
}

function updatingCheck(e: any) {
  count = todos.length
  let taskContent = e?.parentElement?.lastElementChild
  let listTodo = e?.parentElement?.parentElement

  let todoCompleted: Todo[]
  let todoPending: Todo[]
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
  saveLocal()
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
  let allTodoPending: Todo[]
  allTodoPending= todos.filter(allTodoPending => allTodoPending.status !== 'completed')
  todos = allTodoPending

  if (todos.length === 0) {
    vChecking.style.display = 'none'
    dockingControl.style.display = 'none'
  }
  vChecking.classList.remove('check-all')
  clearingAll.style.opacity = '0'
  saveLocal()
}

function onStyleInput(input: HTMLInputElement) {
  input.style.outline = '0.5px dotted gray'
  input.style.borderRadius = '5px'
  input.style.width = '410px'
  input.style.marginLeft = '40px'
}

function offStyleInput(input: HTMLInputElement) {
  input.style.display = 'none'
}

function editContent(content: HTMLInputElement) {
  const eleCheckInput = content?.parentElement?.firstElementChild as HTMLInputElement
  const trash = content?.parentElement?.parentElement?.lastElementChild as HTMLDivElement
  const liEle = content?.parentElement?.parentElement as HTMLLIElement
  const newInput = content?.parentElement?.lastElementChild as HTMLInputElement
  content.removeAttribute("readonly")
  onStyleInput(content)
  eleCheckInput.style.display = 'none'
  trash.style.display = 'none'
  content.setSelectionRange(content.value.length, content.value.length)
  if (content.classList[1] === 'checked') {
    content.style.textDecoration = 'none'
    content.addEventListener('keyup', (even: any) =>{
      if (even.key === 'Enter') {
        content.removeEventListener('blur', onBlur)
        if (content.value === '' ) {
          even.preventDefault()
          liEle.remove()
          todos.splice(Number(content.classList[0]), 1)
          saveLocal()
          offStyleInput(content)
          showTodos(idFilter)
        } else {
          even.preventDefault()
          newInput.value = content.value
          eleCheckInput.style.opacity = '1'
          trash.style.opacity = '1'
          offStyleInput(content)
          todos[Number(content.classList[0])].content = newInput.value
          saveLocal()
          showTodos(idFilter)
        }
      }
      content.style.textDecoration = 'line-through'
    })
    content.addEventListener('blur', onBlur)
    function onBlur() {
      if (content.value === '' ) {
        liEle.remove()
        todos.splice(Number(content.classList[0]), 1)
        saveLocal()
        offStyleInput(content)
        showTodos(idFilter)
      } else {
        newInput.value = content.value
        eleCheckInput.style.opacity = '1'
        trash.style.opacity = '1'
        offStyleInput(content)
        todos[Number(content.classList[0])].content = newInput.value
        saveLocal()
        showTodos(idFilter)
      }
    content.style.textDecoration = 'line-through'
    }
  } else {
    content.addEventListener('keyup', (even: any) =>{
      if (even.key === 'Enter') {
        content.removeEventListener('blur', onBlur)
        if (content.value === '' ) {
          even.preventDefault()
          liEle.remove()
          todos.splice(Number(content.classList[0]), 1)
          saveLocal()
          offStyleInput(content)
          showTodos(idFilter)
        } else {
          even.preventDefault()
          newInput.value = content.value
          eleCheckInput.style.display = 'none'
          trash.style.display = 'none'
          offStyleInput(content)
          todos[Number(content.classList[0])].content = newInput.value
          saveLocal()
          showTodos(idFilter)
        }
      }
    })
    content.addEventListener('blur', onBlur)
    function onBlur() {
      if (content.value === '' ) {
        liEle.remove()
        todos.splice(Number(content.classList[0]), 1)
        saveLocal()
        offStyleInput(content)
        showTodos(idFilter)
      } else {
        newInput.value = content.value
        eleCheckInput.style.opacity = '1'
        trash.style.opacity = '1'
        offStyleInput(content)
        todos[Number(content.classList[0])].content = newInput.value
        saveLocal()
        showTodos(idFilter)
      }
    }
  }
}

filterSelector.forEach((btn) => {
  btn.addEventListener('click', () => {
    document?.querySelector('span.active')?.classList.remove('active')
    btn.classList.add('active')
    showTodos(btn.id)
    return idFilter = btn.id
  })
})
