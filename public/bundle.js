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
//Variables
let todos;
let idFilter = 'all';
let count;
todos = JSON.parse(localStorage.getItem('todo-list') || '[]');
// Listener Event
inputtingTodos === null || inputtingTodos === void 0 ? void 0 : inputtingTodos.addEventListener('keyup', saveTodos);
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
                  <i class="fa-solid fa-xmark"></i>
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
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
    if (todoCompleted.length > 0 || todoCompleted.length === todos.length) {
        clearingAll.style.opacity = '1';
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
    if (todoCompleted.length === todos.length) {
        vChecking.style.opacity = '1';
    }
    else {
        vChecking.style.opacity = '0.1';
    }
    todoPending = todos.filter(todoPending => todoPending.status === 'pending');
    if (todoPending.length === todos.length) {
        clearingAll.style.opacity = '0';
    }
    quantity.innerText = `${count - todoCompleted.length}`;
    localStorage.setItem('todo-list', JSON.stringify(todos));
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ3JELFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbGVjdG9yXG5jb25zdCBpbnB1dHRpbmdUb2RvcyA9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGlucHV0JykpO1xuY29uc3QgdkNoZWNraW5nID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCBpJykpO1xuY29uc3QgbGlzdFRvZG8gPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWJveCcpKTtcbmNvbnN0IGRvY2tpbmdDb250cm9sID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKSk7XG5jb25zdCBxdWFudGl0eSA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50JykpO1xuY29uc3QgY2xlYXJpbmdBbGwgPSg8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ0bicpKTtcblxuaW50ZXJmYWNlIHRvZG97XG4gIGNvbnRlbnQ/OiBzdHJpbmdcbiAgc3RhdHVzPzogc3RyaW5nXG59XG4vL3dpbmRvdyBydW5uaW5nXG53aW5kb3cudXBkYXRpbmdDaGVjayA9IHVwZGF0aW5nQ2hlY2s7XG5cbi8vVmFyaWFibGVzXG5sZXQgdG9kb3M6IHRvZG9bXTtcbmxldCBpZEZpbHRlcjogc3RyaW5nID0gJ2FsbCc7XG5sZXQgY291bnQ6IG51bWJlcjtcbnRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kby1saXN0JykgfHwgJ1tdJyk7XG5cbi8vIExpc3RlbmVyIEV2ZW50XG5pbnB1dHRpbmdUb2Rvcz8uYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzYXZlVG9kb3MpO1xuXG4vL0Z1bmN0aW9uXG5mdW5jdGlvbiBzaG93VG9kb3MoaWRGaWx0ZXI6IHN0cmluZykge1xuICBsZXQgbGk6IHN0cmluZyA9ICcnXG4gIGxldCB0b2RvUGVuZGluZzogdG9kb1tdXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW11cbiAgY291bnQgPSB0b2Rvcy5sZW5ndGhcblxuICBpZiAodG9kb3MpIHtcbiAgICB0b2Rvcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjb3VudC09IDE7XG4gICAgICB9XG4gICAgICBsZXQgaXRlbUNvbXBsZXRlZCA9IGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdjaGVja2VkJyA6ICcnO1xuXG4gICAgICBpZiAoaWRGaWx0ZXIgPT09IGl0ZW0uc3RhdHVzIHx8IGlkRmlsdGVyID09PSAnYWxsJykge1xuICAgICAgICBsaSArPSBgPGxpIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbmNsaWNrPVwidXBkYXRpbmdDaGVjayh0aGlzKVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtpbmRleH1cIiAke2l0ZW1Db21wbGV0ZWR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke2luZGV4fVwiICR7aXRlbUNvbXBsZXRlZH0+JHtpdGVtLmNvbnRlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvL2ZpeCBidWcgaGlkZS1zaG93IGJ0biBjbGVhciBhbGxcbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpO1xuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSAwIHx8IHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKXtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPiAwIHx8IHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpe1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIH1cblxuICBsaXN0VG9kby5pbm5lckhUTUwgPSBsaTtcbiAgaWYgKHRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtjb3VudH1gO1xuICB9IGVsc2Uge1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdkNoZWNraW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cbnNob3dUb2RvcyhpZEZpbHRlcik7XG5cbmZ1bmN0aW9uIHNhdmVUb2RvcyhlOiBhbnkpIHtcbiAgbGV0IGNvbnRlbnRUb2RvID0gaW5wdXR0aW5nVG9kb3M/LnZhbHVlLnRyaW0oKTtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGNvbnRlbnRUb2RvKSB7XG4gICAgaWYoIXRvZG9zKXtcbiAgICAgIHRvZG9zID0gW107XG4gICAgfVxuXG4gICAgbGV0IHRvZG9JbmZvID0ge1xuICAgICAgY29udGVudDogY29udGVudFRvZG8sXG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICB9XG5cbiAgICB0b2Rvcy5wdXNoKHRvZG9JbmZvKVxuICAgIGlucHV0dGluZ1RvZG9zLnZhbHVlID0gJydcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxuICAgIHNob3dUb2RvcyhpZEZpbHRlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRpbmdDaGVjayhlOiBhbnkpIHtcbiAgY291bnQgPSB0b2Rvcy5sZW5ndGg7XG4gIGxldCB0YXNrQ29udGVudCA9IGU/LnBhcmVudEVsZW1lbnQ/Lmxhc3RFbGVtZW50Q2hpbGRcbiAgbGV0IHRvZG9Db21wbGV0ZWQ6IHRvZG9bXTtcbiAgbGV0IHRvZG9QZW5kaW5nOiB0b2RvW107XG5cbiAgaWYgKGUuY2hlY2tlZCkge1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKVxuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICB0b2Rvc1tlLmlkXS5zdGF0dXMgPSAnY29tcGxldGVkJ1xuICB9IGVsc2Uge1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuICAgIHRvZG9zW2UuaWRdLnN0YXR1cyA9ICdwZW5kaW5nJ1xuICB9XG5cbiAgdG9kb0NvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvQ29tcGxldGVkID0+IHRvZG9Db21wbGV0ZWQuc3RhdHVzID09PSAnY29tcGxldGVkJylcbiAgaWYgKHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpIHtcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfSBlbHNlIHtcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcwLjEnO1xuICB9XG5cbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpO1xuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpIHtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG5cbiAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnQtdG9kb0NvbXBsZXRlZC5sZW5ndGh9YDtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9