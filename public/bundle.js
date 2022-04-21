/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//Selector
const inputtingTodos = document.querySelector('.task-input input');
const vChecking = document.querySelector('.task-input i');
const listTodo = document.querySelector('.task-box');
const dockingControl = document.querySelector('.controls');
const quantity = document.querySelector('.count');
const clearingAll = document.querySelector('.clear-btn');
const filterSelector = document.querySelectorAll('.filters > span');
//window running
window.updatingCheck = updatingCheck;
window.deletingTodo = deletingTodo;
window.editTodo = editTodo;
window.editContent = editContent;
//Variables
let todos;
let idFilter = 'all';
let count;
todos = JSON.parse(localStorage.getItem('todo-list') || '[]');
// Listener Event
inputtingTodos === null || inputtingTodos === void 0 ? void 0 : inputtingTodos.addEventListener('keyup', saveTodos);
vChecking === null || vChecking === void 0 ? void 0 : vChecking.addEventListener('click', checkingAll);
clearingAll.addEventListener('click', clearingAllCompleted);
//Function
function saveLocal() {
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodos(idFilter);
}
function showTodos(idFilter) {
    let li = '';
    let todoPending;
    let todoCompleted;
    count = todos.length;
    if (todos) {
        todos.forEach((item, index) => {
            if (item.status === 'completed') {
                count -= 1;
            }
            let itemCompleted = item.status === 'completed' ? 'checked' : '';
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
                clearingAll.style.opacity = '1';
            }
        });
    }
    //fix bug hide-show btn clear all
    todoPending = todos.filter(todoPending => todoPending.status === 'pending');
    if (todoPending.length === 0 || todoPending.length === todos.length) {
        clearingAll.style.opacity = '0';
        vChecking.style.opacity = '0.1';
        vChecking.classList.remove('check-all');
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
    if (todoCompleted.length === todos.length) {
        clearingAll.style.opacity = '1';
        vChecking.style.opacity = '1';
        vChecking.classList.add('check-all');
    }
    else {
        vChecking.classList.remove('check-all');
    }
    listTodo.innerHTML = li;
    if (todos.length !== 0) {
        vChecking.style.display = 'inline';
        dockingControl.style.display = 'flex';
        quantity.innerText = `${count}`;
    }
    else {
        dockingControl.style.display = 'none';
        vChecking.style.display = 'none';
        quantity.innerText = `${count}`;
    }
}
showTodos(idFilter);
function saveTodos(e) {
    let contentTodo = inputtingTodos === null || inputtingTodos === void 0 ? void 0 : inputtingTodos.value.trim();
    if (e.key === 'Enter' && contentTodo) {
        if (!todos) {
            todos = [];
        }
        let todoInfo = {
            content: contentTodo,
            status: 'pending',
        };
        todos.push(todoInfo);
        inputtingTodos.value = '';
        saveLocal();
    }
}
function updatingCheck(e) {
    var _a, _b;
    count = todos.length;
    let taskContent = (_a = e === null || e === void 0 ? void 0 : e.parentElement) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    let listTodo = (_b = e === null || e === void 0 ? void 0 : e.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    let todoCompleted;
    let todoPending;
    if (e.checked) {
        taskContent.classList.add('checked');
        taskContent.style.opacity = '0.5';
        todos[e.id].status = 'completed';
    }
    else {
        taskContent.classList.remove('checked');
        taskContent.style.opacity = '1';
        clearingAll.style.opacity = '0';
        todos[e.id].status = 'pending';
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
    if (todoCompleted.length > 0) {
        clearingAll.style.opacity = '1';
    }
    else {
        clearingAll.style.opacity = '0';
    }
    if (todoCompleted.length === todos.length) {
        vChecking.classList.add('check-all');
        vChecking.style.opacity = '1';
    }
    else {
        vChecking.classList.remove('check-all');
        vChecking.style.opacity = '0.1';
    }
    todoPending = todos.filter(todoPending => todoPending.status === 'pending');
    if (todoPending.length === todos.length) {
        clearingAll.style.opacity = '0';
    }
    if (idFilter === 'pending' && e.checked === true) {
        listTodo.style.display = 'none';
    }
    else if (idFilter === 'completed' && e.checked === false) {
        listTodo.style.display = 'none';
    }
    else {
        listTodo.style.display = 'flex';
    }
    quantity.innerText = `${count - todoCompleted.length}`;
    localStorage.setItem('todo-list', JSON.stringify(todos));
}
function checkingAll() {
    if (vChecking.classList.contains('check-all') === false) {
        vChecking.classList.add('check-all');
        clearingAll.style.opacity = '1';
        todos.forEach((item) => {
            item.status = 'completed';
        });
    }
    else {
        vChecking.classList.remove('check-all');
        clearingAll.style.opacity = '0.1';
        todos.forEach((item) => {
            item.status = 'pending';
        });
    }
    saveLocal();
}
function deletingTodo(idDelete) {
    todos.splice(idDelete, 1);
    localStorage.setItem('todo-list', JSON.stringify(todos));
    if (todos.length === 0) {
        dockingControl.style.display = 'none';
        clearingAll.style.display = 'none';
    }
    showTodos(idFilter);
}
function clearingAllCompleted() {
    let allTodoPending;
    allTodoPending = todos.filter(allTodoPending => allTodoPending.status !== 'completed');
    todos = allTodoPending;
    if (todos.length === 0) {
        vChecking.style.display = 'none';
        dockingControl.style.display = 'none';
    }
    vChecking.classList.remove('check-all');
    clearingAll.style.opacity = '0';
    saveLocal();
}
function editTodo(content) {
    const deletingSelector = content.parentElement.parentElement.lastElementChild;
    const boxInput = content.parentElement.firstElementChild;
    deletingSelector.style.opacity = '0';
    boxInput.style.opacity = '0';
    let valueEdit = content.innerText;
    content.innerText = '';
    content.innerHTML += `<input onclick="editContent(this)" class="edit" type="text" value="${valueEdit}"></input>`;
}
function editContent(input) {
    const spanTag = input.parentElement;
    const liTodo = input.parentElement.parentElement.parentElement;
    const deletingSelector = spanTag.parentElement.parentElement.lastElementChild;
    const spanEdit = input.parentElement.firstElementChild;
    let boxInput = spanTag.parentElement.firstElementChild;
    input.addEventListener('blur keyup', (e) => {
        console.log("ahihi");
        if (e.type === 'blur' || e.keyCode === 13) {
            console.log('1');
            if (input.value === '') {
                liTodo.remove();
                todos.splice(spanEdit.classList[0], 1);
                saveLocal();
            }
            else {
                e.preventDefault();
                console.log(spanTag);
                spanTag.innerText = input.value;
                input.style.display = 'none';
                deletingSelector.style.opacity = '1';
                boxInput.style.opacity = '1';
                todos[spanTag === null || spanTag === void 0 ? void 0 : spanTag.classList[0]].content = spanTag.innerText;
                saveLocal();
            }
        }
        else {
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
    });
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
        var _a;
        (_a = document === null || document === void 0 ? void 0 : document.querySelector('span.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
        btn.classList.add('active');
        showTodos(btn.id);
        return idFilter = btn.id;
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbGVjdG9yXG5jb25zdCBpbnB1dHRpbmdUb2RvcyA9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGlucHV0JykpXG5jb25zdCB2Q2hlY2tpbmcgPSAoPEhUTUxJRnJhbWVFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGknKSlcbmNvbnN0IGxpc3RUb2RvID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib3gnKSlcbmNvbnN0IGRvY2tpbmdDb250cm9sID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKSlcbmNvbnN0IHF1YW50aXR5ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKSlcbmNvbnN0IGNsZWFyaW5nQWxsID0oPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKSlcbmNvbnN0IGZpbHRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcnMgPiBzcGFuJylcblxuaW50ZXJmYWNlIHRvZG97XG4gIGNvbnRlbnQ/OiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG59XG4vL3dpbmRvdyBydW5uaW5nXG53aW5kb3cudXBkYXRpbmdDaGVjayA9IHVwZGF0aW5nQ2hlY2tcbndpbmRvdy5kZWxldGluZ1RvZG8gPSBkZWxldGluZ1RvZG9cbndpbmRvdy5lZGl0VG9kbyA9IGVkaXRUb2RvXG53aW5kb3cuZWRpdENvbnRlbnQgPSBlZGl0Q29udGVudFxuXG4vL1ZhcmlhYmxlc1xubGV0IHRvZG9zOiB0b2RvW11cbmxldCBpZEZpbHRlcjogc3RyaW5nID0gJ2FsbCdcbmxldCBjb3VudDogbnVtYmVyXG50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpIHx8ICdbXScpXG5cbi8vIExpc3RlbmVyIEV2ZW50XG5pbnB1dHRpbmdUb2Rvcz8uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlVG9kb3MpXG52Q2hlY2tpbmc/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpbmdBbGwpXG5jbGVhcmluZ0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyaW5nQWxsQ29tcGxldGVkKVxuXG4vL0Z1bmN0aW9uXG5mdW5jdGlvbiBzYXZlTG9jYWwoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gIHNob3dUb2RvcyhpZEZpbHRlcilcbn1cblxuZnVuY3Rpb24gc2hvd1RvZG9zKGlkRmlsdGVyOiBzdHJpbmcpIHtcbiAgbGV0IGxpOiBzdHJpbmcgPSAnJ1xuICBsZXQgdG9kb1BlbmRpbmc6IHRvZG9bXVxuICBsZXQgdG9kb0NvbXBsZXRlZDogdG9kb1tdXG4gIGNvdW50ID0gdG9kb3MubGVuZ3RoXG5cbiAgaWYgKHRvZG9zKSB7XG4gICAgdG9kb3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgY291bnQtPSAxXG4gICAgICB9XG4gICAgICBsZXQgaXRlbUNvbXBsZXRlZCA9IGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdjaGVja2VkJyA6ICcnXG5cbiAgICAgIGlmIChpZEZpbHRlciA9PT0gaXRlbS5zdGF0dXMgfHwgaWRGaWx0ZXIgPT09ICdhbGwnKSB7XG4gICAgICAgIGxpICs9IGA8bGkgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC10YXNrXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgb25jbGljaz1cInVwZGF0aW5nQ2hlY2sodGhpcylcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aW5kZXh9XCIgJHtpdGVtQ29tcGxldGVkfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIG9uZGJsY2xpY2s9XCJlZGl0VG9kbyh0aGlzKVwiIGNsYXNzPVwiJHtpbmRleH0gJHtpdGVtQ29tcGxldGVkfVwiPiR7aXRlbS5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgb25jbGljaz1cImRlbGV0aW5nVG9kbygke2luZGV4fSlcIiBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vZml4IGJ1ZyBoaWRlLXNob3cgYnRuIGNsZWFyIGFsbFxuICB0b2RvUGVuZGluZyA9IHRvZG9zLmZpbHRlcih0b2RvUGVuZGluZyA9PiB0b2RvUGVuZGluZy5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gIGlmICh0b2RvUGVuZGluZy5sZW5ndGggPT09IDAgfHwgdG9kb1BlbmRpbmcubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpe1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcwLjEnXG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gIH1cblxuICB0b2RvQ29tcGxldGVkID0gdG9kb3MuZmlsdGVyKHRvZG9Db21wbGV0ZWQgPT4gdG9kb0NvbXBsZXRlZC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKTtcbiAgaWYgKHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpe1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICB9IGVsc2Uge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICB9XG5cbiAgbGlzdFRvZG8uaW5uZXJIVE1MID0gbGlcbiAgaWYgKHRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnR9YFxuICB9IGVsc2Uge1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB2Q2hlY2tpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2NvdW50fWBcbiAgfVxufVxuc2hvd1RvZG9zKGlkRmlsdGVyKVxuXG5mdW5jdGlvbiBzYXZlVG9kb3MoZTogYW55KSB7XG4gIGxldCBjb250ZW50VG9kbyA9IGlucHV0dGluZ1RvZG9zPy52YWx1ZS50cmltKClcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGNvbnRlbnRUb2RvKSB7XG4gICAgaWYoIXRvZG9zKXtcbiAgICAgIHRvZG9zID0gW11cbiAgICB9XG5cbiAgICBsZXQgdG9kb0luZm8gPSB7XG4gICAgICBjb250ZW50OiBjb250ZW50VG9kbyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIH1cblxuICAgIHRvZG9zLnB1c2godG9kb0luZm8pXG4gICAgaW5wdXR0aW5nVG9kb3MudmFsdWUgPSAnJ1xuICAgIHNhdmVMb2NhbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0aW5nQ2hlY2soZTogYW55KSB7XG4gIGNvdW50ID0gdG9kb3MubGVuZ3RoXG4gIGxldCB0YXNrQ29udGVudCA9IGU/LnBhcmVudEVsZW1lbnQ/Lmxhc3RFbGVtZW50Q2hpbGRcbiAgbGV0IGxpc3RUb2RvID0gZT8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudFxuXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW11cbiAgbGV0IHRvZG9QZW5kaW5nOiB0b2RvW11cbiAgaWYgKGUuY2hlY2tlZCkge1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgIHRhc2tDb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMC41J1xuICAgIHRvZG9zW2UuaWRdLnN0YXR1cyA9ICdjb21wbGV0ZWQnXG4gIH0gZWxzZSB7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG4gICAgdGFza0NvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgICB0b2Rvc1tlLmlkXS5zdGF0dXMgPSAncGVuZGluZydcbiAgfVxuXG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpXG4gIGlmICh0b2RvQ29tcGxldGVkLmxlbmd0aCA+IDApIHtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIH0gZWxzZSB7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICB9XG5cbiAgaWYgKHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpIHtcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stYWxsJylcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICB9IGVsc2Uge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzAuMSdcbiAgfVxuXG4gIHRvZG9QZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG9QZW5kaW5nID0+IHRvZG9QZW5kaW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKVxuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpIHtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gIH1cblxuICBpZiAoaWRGaWx0ZXIgPT09ICdwZW5kaW5nJyAmJiBlLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICBsaXN0VG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH0gZWxzZSBpZiAoaWRGaWx0ZXIgPT09ICdjb21wbGV0ZWQnICYmIGUuY2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICBsaXN0VG9kby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH0gZWxzZSB7XG4gICAgbGlzdFRvZG8uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xuICB9XG5cbiAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnQtdG9kb0NvbXBsZXRlZC5sZW5ndGh9YFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxufVxuXG5mdW5jdGlvbiBjaGVja2luZ0FsbCgpIHtcbiAgaWYgKHZDaGVja2luZy5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLWFsbCcpID09PSBmYWxzZSkge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICB0b2Rvcy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zdGF0dXMgPSAnY29tcGxldGVkJ1xuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwLjEnXG4gICAgdG9kb3MuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc3RhdHVzID0gJ3BlbmRpbmcnXG4gICAgfSlcbiAgfVxuICBzYXZlTG9jYWwoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRpbmdUb2RvKGlkRGVsZXRlOiBhbnkpIHtcbiAgdG9kb3Muc3BsaWNlKGlkRGVsZXRlLCAxKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxuICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxuICBzaG93VG9kb3MoaWRGaWx0ZXIpXG59XG5cbmZ1bmN0aW9uIGNsZWFyaW5nQWxsQ29tcGxldGVkKCkge1xuICBsZXQgYWxsVG9kb1BlbmRpbmc6IHRvZG9bXVxuICBhbGxUb2RvUGVuZGluZz0gdG9kb3MuZmlsdGVyKGFsbFRvZG9QZW5kaW5nID0+IGFsbFRvZG9QZW5kaW5nLnN0YXR1cyAhPT0gJ2NvbXBsZXRlZCcpXG4gIHRvZG9zID0gYWxsVG9kb1BlbmRpbmc7XG5cbiAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG4gIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gIHNhdmVMb2NhbCgpO1xufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyhjb250ZW50OiBhbnkpIHtcbiAgY29uc3QgZGVsZXRpbmdTZWxlY3RvciA9KDxIVE1MRWxlbWVudD5jb250ZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkKVxuICBjb25zdCBib3hJbnB1dCA9KDxIVE1MSW5wdXRFbGVtZW50PmNvbnRlbnQucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZClcbiAgZGVsZXRpbmdTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gIGJveElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgbGV0IHZhbHVlRWRpdDogc3RyaW5nID0gY29udGVudC5pbm5lclRleHRcbiAgY29udGVudC5pbm5lclRleHQgPSAnJ1xuICBjb250ZW50LmlubmVySFRNTCArPSBgPGlucHV0IG9uY2xpY2s9XCJlZGl0Q29udGVudCh0aGlzKVwiIGNsYXNzPVwiZWRpdFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3ZhbHVlRWRpdH1cIj48L2lucHV0PmA7XG59XG5cbmZ1bmN0aW9uIGVkaXRDb250ZW50KGlucHV0OiBhbnkpIHtcbiAgY29uc3Qgc3BhblRhZzogYW55ID0gaW5wdXQucGFyZW50RWxlbWVudFxuICBjb25zdCBsaVRvZG86IGFueSA9IGlucHV0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBkZWxldGluZ1NlbGVjdG9yID0oPEhUTUxFbGVtZW50PnNwYW5UYWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQpXG4gIGNvbnN0IHNwYW5FZGl0OiBhbnkgPSBpbnB1dC5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkXG4gIGxldCBib3hJbnB1dCA9IHNwYW5UYWcucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1ciBrZXl1cCcsIChlOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFoaWhpXCIpO1xuXG4gICAgaWYgKGUudHlwZSA9PT0gJ2JsdXInIHx8IGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcxJyk7XG4gICAgICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGxpVG9kby5yZW1vdmUoKVxuICAgICAgICB0b2Rvcy5zcGxpY2Uoc3BhbkVkaXQuY2xhc3NMaXN0WzBdLCAxKVxuICAgICAgICBzYXZlTG9jYWwoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHNwYW5UYWcpO1xuICAgICAgICBzcGFuVGFnLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlXG4gICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgZGVsZXRpbmdTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgIGJveElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgdG9kb3Nbc3BhblRhZz8uY2xhc3NMaXN0WzBdXS5jb250ZW50ID0gc3BhblRhZy5pbm5lclRleHRcbiAgICAgICAgc2F2ZUxvY2FsKClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJzInKTtcblxuICAgIH1cbiAgICAvLyBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgLy8gICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgIC8vICAgICBsaVRvZG8ucmVtb3ZlKCk7XG4gICAgLy8gICAgIHRvZG9zLnNwbGljZShzcGFuRWRpdC5jbGFzc0xpc3RbMF0sIDEpXG4gICAgLy8gICAgIHNhdmVMb2NhbCgpXG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiMlwiKTtcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHNwYW5UYWcpO1xuICAgIC8vICAgICBzcGFuVGFnLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlXG4gICAgLy8gICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAvLyAgICAgZGVsZXRpbmdTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgLy8gICAgIGJveElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAvLyAgICAgdG9kb3Nbc3BhblRhZz8uY2xhc3NMaXN0WzBdXS5jb250ZW50ID0gc3BhblRhZy5pbm5lclRleHRcbiAgICAvLyAgICAgc2F2ZUxvY2FsKClcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH0pXG5cbiAgLy8gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlOiBhbnkpID0+IHtcbiAgLy8gICBpZiAoaW5wdXQudmFsdWUgPT09ICcnKSB7XG4gIC8vICAgICBsaVRvZG8ucmVtb3ZlKCk7XG4gIC8vICAgICB0b2Rvcy5zcGxpY2Uoc3BhbkVkaXQuY2xhc3NMaXN0WzBdLCAxKVxuICAvLyAgICAgc2F2ZUxvY2FsKCk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuICAvLyAgICAgc3BhblRhZy5pbm5lclRleHQgPSBpbnB1dC52YWx1ZVxuICAvLyAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAvLyAgICAgZGVsZXRpbmdTZWxlY3Rvci5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIC8vICAgICBib3hJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIC8vICAgICB0b2Rvc1tzcGFuVGFnPy5jbGFzc0xpc3RbMF1dLmNvbnRlbnQgPSBzcGFuVGFnLmlubmVyVGV4dFxuICAvLyAgICAgc2F2ZUxvY2FsKCk7XG4gIC8vICAgfVxuICAvLyB9KVxufVxuXG5maWx0ZXJTZWxlY3Rvci5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCdzcGFuLmFjdGl2ZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2hvd1RvZG9zKGJ0bi5pZClcbiAgICByZXR1cm4gaWRGaWx0ZXIgPSBidG4uaWRcbiAgfSlcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=