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
                  <span class="${index}" ${itemCompleted}>${item.content}</span>
                </label>
                <div class="task-close">
                  <i onclick="deletingTodo(this)" class="fa-solid fa-xmark"></i>
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
        clearingAll.style.opacity = '1';
        todos[e.id].status = 'completed';
    }
    else {
        taskContent.classList.remove('checked');
        todos[e.id].status = 'pending';
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
    console.log(todoCompleted.length);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBYTtJQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3RCLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU07UUFDckMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTtLQUNuQztJQUNELFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbGVjdG9yXG5jb25zdCBpbnB1dHRpbmdUb2RvcyA9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGlucHV0JykpXG5jb25zdCB2Q2hlY2tpbmcgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGknKSlcbmNvbnN0IGxpc3RUb2RvID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib3gnKSlcbmNvbnN0IGRvY2tpbmdDb250cm9sID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKSlcbmNvbnN0IHF1YW50aXR5ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKSlcbmNvbnN0IGNsZWFyaW5nQWxsID0oPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKSlcblxuaW50ZXJmYWNlIHRvZG97XG4gIGNvbnRlbnQ/OiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG59XG4vL3dpbmRvdyBydW5uaW5nXG53aW5kb3cudXBkYXRpbmdDaGVjayA9IHVwZGF0aW5nQ2hlY2s7XG53aW5kb3cuZGVsZXRpbmdUb2RvID0gZGVsZXRpbmdUb2RvO1xuXG4vL1ZhcmlhYmxlc1xubGV0IHRvZG9zOiB0b2RvW11cbmxldCBpZEZpbHRlcjogc3RyaW5nID0gJ2FsbCdcbmxldCBjb3VudDogbnVtYmVyXG50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpIHx8ICdbXScpXG5cbi8vIExpc3RlbmVyIEV2ZW50XG5pbnB1dHRpbmdUb2Rvcz8uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlVG9kb3MpXG52Q2hlY2tpbmc/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpbmdBbGwpXG5cbi8vRnVuY3Rpb25cbmZ1bmN0aW9uIHNob3dUb2RvcyhpZEZpbHRlcjogc3RyaW5nKSB7XG4gIGxldCBsaTogc3RyaW5nID0gJydcbiAgbGV0IHRvZG9QZW5kaW5nOiB0b2RvW11cbiAgbGV0IHRvZG9Db21wbGV0ZWQ6IHRvZG9bXVxuICBjb3VudCA9IHRvZG9zLmxlbmd0aFxuXG4gIGlmICh0b2Rvcykge1xuICAgIHRvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIGNvdW50LT0gMVxuICAgICAgfVxuICAgICAgbGV0IGl0ZW1Db21wbGV0ZWQgPSBpdGVtLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnY2hlY2tlZCcgOiAnJ1xuXG4gICAgICBpZiAoaWRGaWx0ZXIgPT09IGl0ZW0uc3RhdHVzIHx8IGlkRmlsdGVyID09PSAnYWxsJykge1xuICAgICAgICBsaSArPSBgPGxpIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbmNsaWNrPVwidXBkYXRpbmdDaGVjayh0aGlzKVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtpbmRleH1cIiAke2l0ZW1Db21wbGV0ZWR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke2luZGV4fVwiICR7aXRlbUNvbXBsZXRlZH0+JHtpdGVtLmNvbnRlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpIG9uY2xpY2s9XCJkZWxldGluZ1RvZG8odGhpcylcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvL2ZpeCBidWcgaGlkZS1zaG93IGJ0biBjbGVhciBhbGxcbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpO1xuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSAwIHx8IHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKXtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICB9XG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCl7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWFsbCcpXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gIH1cblxuICBsaXN0VG9kby5pbm5lckhUTUwgPSBsaVxuICBpZiAodG9kb3MubGVuZ3RoICE9PSAwKSB7XG4gICAgdkNoZWNraW5nLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtjb3VudH1gXG4gIH0gZWxzZSB7XG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbn1cbnNob3dUb2RvcyhpZEZpbHRlcilcblxuZnVuY3Rpb24gc2F2ZVRvZG9zKGU6IGFueSkge1xuICBsZXQgY29udGVudFRvZG8gPSBpbnB1dHRpbmdUb2Rvcz8udmFsdWUudHJpbSgpXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBjb250ZW50VG9kbykge1xuICAgIGlmKCF0b2Rvcyl7XG4gICAgICB0b2RvcyA9IFtdXG4gICAgfVxuXG4gICAgbGV0IHRvZG9JbmZvID0ge1xuICAgICAgY29udGVudDogY29udGVudFRvZG8sXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICB9XG5cbiAgICB0b2Rvcy5wdXNoKHRvZG9JbmZvKVxuICAgIGlucHV0dGluZ1RvZG9zLnZhbHVlID0gJydcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxuICAgIHNob3dUb2RvcyhpZEZpbHRlcilcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGluZ0NoZWNrKGU6IGFueSkge1xuICBjb3VudCA9IHRvZG9zLmxlbmd0aFxuICBsZXQgdGFza0NvbnRlbnQgPSBlPy5wYXJlbnRFbGVtZW50Py5sYXN0RWxlbWVudENoaWxkXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW11cbiAgbGV0IHRvZG9QZW5kaW5nOiB0b2RvW11cblxuICBpZiAoZS5jaGVja2VkKSB7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHRvZG9zW2UuaWRdLnN0YXR1cyA9ICdjb21wbGV0ZWQnXG4gIH0gZWxzZSB7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG4gICAgdG9kb3NbZS5pZF0uc3RhdHVzID0gJ3BlbmRpbmcnXG4gIH1cblxuICB0b2RvQ29tcGxldGVkID0gdG9kb3MuZmlsdGVyKHRvZG9Db21wbGV0ZWQgPT4gdG9kb0NvbXBsZXRlZC5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKVxuICBjb25zb2xlLmxvZyh0b2RvQ29tcGxldGVkLmxlbmd0aCk7XG5cblxuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICB9XG5cbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpXG4gIGlmICh0b2RvUGVuZGluZy5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgfVxuXG4gIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2NvdW50LXRvZG9Db21wbGV0ZWQubGVuZ3RofWBcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbn1cblxuZnVuY3Rpb24gY2hlY2tpbmdBbGwoKSB7XG4gIGlmICh2Q2hlY2tpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay1hbGwnKSA9PT0gZmFsc2UpIHtcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LmFkZCgnY2hlY2stYWxsJylcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdG9kb3MuZm9yRWFjaCggKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICAgIHRvZG9zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnN0YXR1cyA9ICdwZW5kaW5nJ1xuICAgIH0pXG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgc2hvd1RvZG9zKGlkRmlsdGVyKVxufVxuXG5mdW5jdGlvbiBkZWxldGluZ1RvZG8oaWREZWxldGU6IGFueSkge1xuICB0b2Rvcy5zcGxpY2UoaWREZWxldGUsIDEpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG4gIHNob3dUb2RvcyhpZEZpbHRlcilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==