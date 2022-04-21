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
        vChecking.style.opacity = '0.1';
    }
    todoCompleted = todos.filter(todoCompleted => todoCompleted.status === 'completed');
    if (todoCompleted.length > 0 || todoCompleted.length === todos.length) {
        clearingAll.style.opacity = '1';
        vChecking.style.opacity = '1';
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
function checkingAll() {
    if (vChecking.classList.contains('check-all') === false) {
        clearingAll.style.opacity = '1';
        vChecking.classList.add('check-all');
        todos.forEach((item) => {
            item.status = 'completed';
        });
    }
    else {
        clearingAll.style.opacity = '0.1';
        vChecking.classList.remove('check-all');
        todos.forEach((item) => {
            item.status = 'pending';
        });
    }
    localStorage.setItem('todo-list', JSON.stringify(todos));
    showTodos(idFilter);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDdkMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0tBQ2pDO0lBRUQsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssS0FBSyxFQUFFO1FBQ3ZELFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUc7UUFDL0IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVc7UUFDM0IsQ0FBQyxDQUFDO0tBQ0g7U0FBTTtRQUNMLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUs7UUFDakMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVM7UUFDekIsQ0FBQyxDQUFDO0tBQ0g7SUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbDAzLXRzb2Z0b2RvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vU2VsZWN0b3JcbmNvbnN0IGlucHV0dGluZ1RvZG9zID0oPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQgaW5wdXQnKSk7XG5jb25zdCB2Q2hlY2tpbmcgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGknKSk7XG5jb25zdCBsaXN0VG9kbyA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stYm94JykpO1xuY29uc3QgZG9ja2luZ0NvbnRyb2wgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scycpKTtcbmNvbnN0IHF1YW50aXR5ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKSk7XG5jb25zdCBjbGVhcmluZ0FsbCA9KDxIVE1MQnV0dG9uRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItYnRuJykpO1xuXG5pbnRlcmZhY2UgdG9kb3tcbiAgY29udGVudD86IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbn1cbi8vd2luZG93IHJ1bm5pbmdcbndpbmRvdy51cGRhdGluZ0NoZWNrID0gdXBkYXRpbmdDaGVjaztcblxuLy9WYXJpYWJsZXNcbmxldCB0b2RvczogdG9kb1tdO1xubGV0IGlkRmlsdGVyOiBzdHJpbmcgPSAnYWxsJztcbmxldCBjb3VudDogbnVtYmVyO1xudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QnKSB8fCAnW10nKTtcblxuLy8gTGlzdGVuZXIgRXZlbnRcbmlucHV0dGluZ1RvZG9zPy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNhdmVUb2Rvcyk7XG52Q2hlY2tpbmc/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tpbmdBbGwpO1xuXG4vL0Z1bmN0aW9uXG5mdW5jdGlvbiBzaG93VG9kb3MoaWRGaWx0ZXI6IHN0cmluZykge1xuICBsZXQgbGk6IHN0cmluZyA9ICcnXG4gIGxldCB0b2RvUGVuZGluZzogdG9kb1tdXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW11cbiAgY291bnQgPSB0b2Rvcy5sZW5ndGhcblxuICBpZiAodG9kb3MpIHtcbiAgICB0b2Rvcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjb3VudC09IDE7XG4gICAgICB9XG4gICAgICBsZXQgaXRlbUNvbXBsZXRlZCA9IGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJyA/ICdjaGVja2VkJyA6ICcnO1xuXG4gICAgICBpZiAoaWRGaWx0ZXIgPT09IGl0ZW0uc3RhdHVzIHx8IGlkRmlsdGVyID09PSAnYWxsJykge1xuICAgICAgICBsaSArPSBgPGxpIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbmNsaWNrPVwidXBkYXRpbmdDaGVjayh0aGlzKVwiIHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtpbmRleH1cIiAke2l0ZW1Db21wbGV0ZWR9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCIke2luZGV4fVwiICR7aXRlbUNvbXBsZXRlZH0+JHtpdGVtLmNvbnRlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc29saWQgZmEteG1hcmtcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbGk+YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuICAgICAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvL2ZpeCBidWcgaGlkZS1zaG93IGJ0biBjbGVhciBhbGxcbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpO1xuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSAwIHx8IHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKXtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICB9XG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpO1xuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPiAwIHx8IHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpe1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICB9XG5cbiAgbGlzdFRvZG8uaW5uZXJIVE1MID0gbGk7XG4gIGlmICh0b2Rvcy5sZW5ndGggIT09IDApIHtcbiAgICB2Q2hlY2tpbmcuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnR9YDtcbiAgfSBlbHNlIHtcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5zaG93VG9kb3MoaWRGaWx0ZXIpO1xuXG5mdW5jdGlvbiBzYXZlVG9kb3MoZTogYW55KSB7XG4gIGxldCBjb250ZW50VG9kbyA9IGlucHV0dGluZ1RvZG9zPy52YWx1ZS50cmltKCk7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBjb250ZW50VG9kbykge1xuICAgIGlmKCF0b2Rvcyl7XG4gICAgICB0b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGxldCB0b2RvSW5mbyA9IHtcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnRUb2RvLFxuICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgfVxuXG4gICAgdG9kb3MucHVzaCh0b2RvSW5mbylcbiAgICBpbnB1dHRpbmdUb2Rvcy52YWx1ZSA9ICcnXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICBzaG93VG9kb3MoaWRGaWx0ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0aW5nQ2hlY2soZTogYW55KSB7XG4gIGNvdW50ID0gdG9kb3MubGVuZ3RoO1xuICBsZXQgdGFza0NvbnRlbnQgPSBlPy5wYXJlbnRFbGVtZW50Py5sYXN0RWxlbWVudENoaWxkXG4gIGxldCB0b2RvQ29tcGxldGVkOiB0b2RvW107XG4gIGxldCB0b2RvUGVuZGluZzogdG9kb1tdO1xuXG4gIGlmIChlLmNoZWNrZWQpIHtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgdG9kb3NbZS5pZF0uc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgfSBlbHNlIHtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICB0b2Rvc1tlLmlkXS5zdGF0dXMgPSAncGVuZGluZydcbiAgfVxuXG4gIHRvZG9Db21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kb0NvbXBsZXRlZCA9PiB0b2RvQ29tcGxldGVkLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpXG4gIGlmICh0b2RvQ29tcGxldGVkLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKSB7XG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJztcbiAgfVxuXG4gIHRvZG9QZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG9QZW5kaW5nID0+IHRvZG9QZW5kaW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgaWYgKHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKSB7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxuXG4gIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2NvdW50LXRvZG9Db21wbGV0ZWQubGVuZ3RofWA7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG59XG5cbmZ1bmN0aW9uIGNoZWNraW5nQWxsKCkge1xuICBpZiAodkNoZWNraW5nLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stYWxsJykgPT09IGZhbHNlKSB7XG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICAgIHRvZG9zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnN0YXR1cyA9ICdjb21wbGV0ZWQnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAuMSdcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2stYWxsJylcbiAgICB0b2Rvcy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zdGF0dXMgPSAncGVuZGluZydcbiAgICB9KVxuICB9XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gIHNob3dUb2RvcyhpZEZpbHRlcik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=