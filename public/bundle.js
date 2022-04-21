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
//window running
window.updatingCheck = updatingCheck;
window.deletingTodo = deletingTodo;
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
                <label>
                  <input onclick="updatingCheck(this)" type="checkbox" id="${index}" ${itemCompleted}>
                  <span class="${index} ${itemCompleted}">${item.content}</span>
                </label>
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
        localStorage.setItem('todo-list', JSON.stringify(todos));
        showTodos(idFilter);
    }
}
function updatingCheck(e) {
    var _a;
    count = todos.length;
    let taskContent = (_a = e === null || e === void 0 ? void 0 : e.parentElement) === null || _a === void 0 ? void 0 : _a.lastElementChild;
    let todoCompleted;
    let todoPending;
    if (e.checked) {
        taskContent.classList.add('checked');
        // taskContent.style.textDecoration = 'line-through'
        taskContent.style.opacity = '0.5';
        clearingAll.style.opacity = '1';
        todos[e.id].status = 'completed';
    }
    else {
        taskContent.classList.remove('checked');
        // taskContent.style.textDecoration = 'none'
        taskContent.style.opacity = '1';
        clearingAll.style.opacity = '0';
        todos[e.id].status = 'pending';
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
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
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodos(idFilter);
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
    console.log(todos);
    if (todos.length === 0) {
        vChecking.style.display = 'none';
        dockingControl.style.display = 'none';
    }
    vChecking.classList.remove('check-all');
    clearingAll.style.opacity = '0';
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodos(idFilter);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRztJQUMvQixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbGVjdG9yXG5jb25zdCBpbnB1dHRpbmdUb2RvcyA9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGlucHV0JykpXG5jb25zdCB2Q2hlY2tpbmcgPSAoPEhUTUxJRnJhbWVFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGknKSlcbmNvbnN0IGxpc3RUb2RvID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib3gnKSlcbmNvbnN0IGRvY2tpbmdDb250cm9sID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKSlcbmNvbnN0IHF1YW50aXR5ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKSlcbmNvbnN0IGNsZWFyaW5nQWxsID0oPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKSlcblxuaW50ZXJmYWNlIHRvZG97XG4gIGNvbnRlbnQ/OiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG59XG4vL3dpbmRvdyBydW5uaW5nXG53aW5kb3cudXBkYXRpbmdDaGVjayA9IHVwZGF0aW5nQ2hlY2s7XG53aW5kb3cuZGVsZXRpbmdUb2RvID0gZGVsZXRpbmdUb2RvO1xuXG4vL1ZhcmlhYmxlc1xubGV0IHRvZG9zOiB0b2RvW11cbmxldCBpZEZpbHRlcjogc3RyaW5nID0gJ2FsbCdcbmxldCBjb3VudDogbnVtYmVyXG50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpIHx8ICdbXScpXG5cbi8vIExpc3RlbmVyIEV2ZW50XG5pbnB1dHRpbmdUb2Rvcz8uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlVG9kb3MpXG52Q2hlY2tpbmc/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpbmdBbGwpXG5jbGVhcmluZ0FsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyaW5nQWxsQ29tcGxldGVkKVxuXG4vL0Z1bmN0aW9uXG5mdW5jdGlvbiBzaG93VG9kb3MoaWRGaWx0ZXI6IHN0cmluZykge1xuICBsZXQgbGk6IHN0cmluZyA9ICcnXG4gIGxldCB0b2RvUGVuZGluZzogdG9kb1tdXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW11cbiAgY291bnQgPSB0b2Rvcy5sZW5ndGhcblxuICBpZiAodG9kb3MpIHtcbiAgICB0b2Rvcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjb3VudC09IDFcbiAgICAgIH1cbiAgICAgIGxldCBpdGVtQ29tcGxldGVkID0gaXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnID8gJ2NoZWNrZWQnIDogJydcblxuICAgICAgaWYgKGlkRmlsdGVyID09PSBpdGVtLnN0YXR1cyB8fCBpZEZpbHRlciA9PT0gJ2FsbCcpIHtcbiAgICAgICAgbGkgKz0gYDxsaSBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgb25jbGljaz1cInVwZGF0aW5nQ2hlY2sodGhpcylcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aW5kZXh9XCIgJHtpdGVtQ29tcGxldGVkfT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiJHtpbmRleH0gJHtpdGVtQ29tcGxldGVkfVwiPiR7aXRlbS5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBvbmNsaWNrPVwiZGVsZXRpbmdUb2RvKCR7aW5kZXh9KVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy9maXggYnVnIGhpZGUtc2hvdyBidG4gY2xlYXIgYWxsXG4gIHRvZG9QZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG9QZW5kaW5nID0+IHRvZG9QZW5kaW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgaWYgKHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gMCB8fCB0b2RvUGVuZGluZy5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCl7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzAuMSdcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2stYWxsJylcbiAgfVxuXG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCl7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWFsbCcpXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gIH1cblxuICBsaXN0VG9kby5pbm5lckhUTUwgPSBsaVxuICBpZiAodG9kb3MubGVuZ3RoICE9PSAwKSB7XG4gICAgdkNoZWNraW5nLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtjb3VudH1gXG4gIH0gZWxzZSB7XG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnR9YFxuICB9XG59XG5zaG93VG9kb3MoaWRGaWx0ZXIpXG5cbmZ1bmN0aW9uIHNhdmVUb2RvcyhlOiBhbnkpIHtcbiAgbGV0IGNvbnRlbnRUb2RvID0gaW5wdXR0aW5nVG9kb3M/LnZhbHVlLnRyaW0oKVxuICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgY29udGVudFRvZG8pIHtcbiAgICBpZighdG9kb3Mpe1xuICAgICAgdG9kb3MgPSBbXVxuICAgIH1cblxuICAgIGxldCB0b2RvSW5mbyA9IHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRUb2RvLFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgfVxuXG4gICAgdG9kb3MucHVzaCh0b2RvSW5mbylcbiAgICBpbnB1dHRpbmdUb2Rvcy52YWx1ZSA9ICcnXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICBzaG93VG9kb3MoaWRGaWx0ZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRpbmdDaGVjayhlOiBhbnkpIHtcbiAgY291bnQgPSB0b2Rvcy5sZW5ndGhcbiAgbGV0IHRhc2tDb250ZW50ID0gZT8ucGFyZW50RWxlbWVudD8ubGFzdEVsZW1lbnRDaGlsZFxuICBsZXQgdG9kb0NvbXBsZXRlZDogdG9kb1tdXG4gIGxldCB0b2RvUGVuZGluZzogdG9kb1tdXG5cbiAgaWYgKGUuY2hlY2tlZCkge1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgIC8vIHRhc2tDb250ZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICB0YXNrQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzAuNSdcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdG9kb3NbZS5pZF0uc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgfSBlbHNlIHtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICAvLyB0YXNrQ29udGVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xuICAgIHRhc2tDb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgdG9kb3NbZS5pZF0uc3RhdHVzID0gJ3BlbmRpbmcnXG4gIH1cblxuICB0b2RvQ29tcGxldGVkID0gdG9kb3MuZmlsdGVyKHRvZG9Db21wbGV0ZWQgPT4gdG9kb0NvbXBsZXRlZC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKVxuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICB9XG5cbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpXG4gIGlmICh0b2RvUGVuZGluZy5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgfVxuXG4gIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2NvdW50LXRvZG9Db21wbGV0ZWQubGVuZ3RofWBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbn1cblxuZnVuY3Rpb24gY2hlY2tpbmdBbGwoKSB7XG4gIGlmICh2Q2hlY2tpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay1hbGwnKSA9PT0gZmFsc2UpIHtcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stYWxsJylcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdG9kb3MuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICAgIHRvZG9zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnN0YXR1cyA9ICdwZW5kaW5nJ1xuICAgIH0pXG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgc2hvd1RvZG9zKGlkRmlsdGVyKVxufVxuXG5mdW5jdGlvbiBkZWxldGluZ1RvZG8oaWREZWxldGU6IGFueSkge1xuICB0b2Rvcy5zcGxpY2UoaWREZWxldGUsIDEpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG4gIHNob3dUb2RvcyhpZEZpbHRlcilcbn1cblxuZnVuY3Rpb24gY2xlYXJpbmdBbGxDb21wbGV0ZWQoKSB7XG4gIGxldCBhbGxUb2RvUGVuZGluZzogdG9kb1tdXG4gIGFsbFRvZG9QZW5kaW5nPSB0b2Rvcy5maWx0ZXIoYWxsVG9kb1BlbmRpbmcgPT4gYWxsVG9kb1BlbmRpbmcuc3RhdHVzICE9PSAnY29tcGxldGVkJylcbiAgdG9kb3MgPSBhbGxUb2RvUGVuZGluZztcbiAgY29uc29sZS5sb2codG9kb3MpO1xuXG4gIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICB2Q2hlY2tpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxuICB2Q2hlY2tpbmcuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2stYWxsJylcbiAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxuICBzaG93VG9kb3MoaWRGaWx0ZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=