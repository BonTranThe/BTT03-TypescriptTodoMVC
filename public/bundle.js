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
window.editContent = editContent;
//Variables
let todos;
let idFilter = 'all';
let count;
todos = JSON.parse(localStorage.getItem('todo-list') || '[]');
// Listener Event
inputtingTodos.addEventListener('keyup', saveTodos);
vChecking.addEventListener('click', checkingAll);
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
                  <input ondblclick="editContent(this)" type="text" class="${index} ${itemCompleted}" ${item.content} value="${todos[index].content}" readonly>
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
function onStyleInput(input) {
    input.style.outline = '0.5px dotted gray';
    input.style.borderRadius = '5px';
    input.style.width = '410px';
    input.style.marginLeft = '40px';
}
function offStyleInput(input) {
    input.style.display = 'none';
}
function editContent(content) {
    var _a, _b, _c, _d, _e;
    const eleCheckInput = (_a = content === null || content === void 0 ? void 0 : content.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild;
    const trash = (_c = (_b = content === null || content === void 0 ? void 0 : content.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.lastElementChild;
    const liEle = (_d = content === null || content === void 0 ? void 0 : content.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
    const newInput = (_e = content === null || content === void 0 ? void 0 : content.parentElement) === null || _e === void 0 ? void 0 : _e.lastElementChild;
    content.removeAttribute("readonly");
    onStyleInput(content);
    eleCheckInput.style.display = 'none';
    trash.style.display = 'none';
    content.setSelectionRange(content.value.length, content.value.length);
    if (content.classList[1] === 'checked') {
        content.style.textDecoration = 'none';
        content.addEventListener('keyup', (even) => {
            if (even.key === 'Enter') {
                content.removeEventListener('blur', onBlur);
                if (content.value === '') {
                    even.preventDefault();
                    liEle.remove();
                    todos.splice(Number(content.classList[0]), 1);
                    saveLocal();
                    offStyleInput(content);
                    showTodos(idFilter);
                }
                else {
                    even.preventDefault();
                    newInput.value = content.value;
                    eleCheckInput.style.opacity = '1';
                    trash.style.opacity = '1';
                    offStyleInput(content);
                    todos[Number(content.classList[0])].content = newInput.value;
                    saveLocal();
                    showTodos(idFilter);
                }
            }
            content.style.textDecoration = 'line-through';
        });
        content.addEventListener('blur', onBlur);
        function onBlur() {
            if (content.value === '') {
                liEle.remove();
                todos.splice(Number(content.classList[0]), 1);
                saveLocal();
                offStyleInput(content);
                showTodos(idFilter);
            }
            else {
                newInput.value = content.value;
                eleCheckInput.style.opacity = '1';
                trash.style.opacity = '1';
                offStyleInput(content);
                todos[Number(content.classList[0])].content = newInput.value;
                saveLocal();
                showTodos(idFilter);
            }
            content.style.textDecoration = 'line-through';
        }
    }
    else {
        content.addEventListener('keyup', (even) => {
            if (even.key === 'Enter') {
                content.removeEventListener('blur', onBlur);
                if (content.value === '') {
                    even.preventDefault();
                    liEle.remove();
                    todos.splice(Number(content.classList[0]), 1);
                    saveLocal();
                    offStyleInput(content);
                    showTodos(idFilter);
                }
                else {
                    even.preventDefault();
                    newInput.value = content.value;
                    eleCheckInput.style.display = 'none';
                    trash.style.display = 'none';
                    offStyleInput(content);
                    todos[Number(content.classList[0])].content = newInput.value;
                    saveLocal();
                    showTodos(idFilter);
                }
            }
        });
        content.addEventListener('blur', onBlur);
        function onBlur() {
            if (content.value === '') {
                liEle.remove();
                todos.splice(Number(content.classList[0]), 1);
                saveLocal();
                offStyleInput(content);
                showTodos(idFilter);
            }
            else {
                newInput.value = content.value;
                eleCheckInput.style.opacity = '1';
                trash.style.opacity = '1';
                offStyleInput(content);
                todos[Number(content.classList[0])].content = newInput.value;
                saveLocal();
                showTodos(idFilter);
            }
        }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFO0lBQzFCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1NlbGVjdG9yXG5jb25zdCBpbnB1dHRpbmdUb2RvcyA9KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGlucHV0JykpXG5jb25zdCB2Q2hlY2tpbmcgPSAoPEhUTUxJRnJhbWVFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0IGknKSlcbmNvbnN0IGxpc3RUb2RvID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib3gnKSlcbmNvbnN0IGRvY2tpbmdDb250cm9sID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMnKSlcbmNvbnN0IHF1YW50aXR5ID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnQnKSlcbmNvbnN0IGNsZWFyaW5nQWxsID0oPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idG4nKSlcbmNvbnN0IGZpbHRlclNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcnMgPiBzcGFuJylcblxuaW50ZXJmYWNlIFRvZG8ge1xuICBjb250ZW50OiBzdHJpbmdcbiAgc3RhdHVzOiAnY29tcGxldGVkJyB8ICdwZW5kaW5nJ1xufVxuLy93aW5kb3cgcnVubmluZ1xud2luZG93LnVwZGF0aW5nQ2hlY2sgPSB1cGRhdGluZ0NoZWNrXG53aW5kb3cuZGVsZXRpbmdUb2RvID0gZGVsZXRpbmdUb2RvXG53aW5kb3cuZWRpdENvbnRlbnQgPSBlZGl0Q29udGVudFxuXG4vL1ZhcmlhYmxlc1xubGV0IHRvZG9zOiBUb2RvW11cbmxldCBpZEZpbHRlcjogc3RyaW5nID0gJ2FsbCdcbmxldCBjb3VudDogbnVtYmVyXG50b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8tbGlzdCcpIHx8ICdbXScpXG5cbi8vIExpc3RlbmVyIEV2ZW50XG5pbnB1dHRpbmdUb2Rvcy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNhdmVUb2RvcylcbnZDaGVja2luZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNraW5nQWxsKVxuY2xlYXJpbmdBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhcmluZ0FsbENvbXBsZXRlZClcblxuLy9GdW5jdGlvblxuZnVuY3Rpb24gc2F2ZUxvY2FsKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kby1saXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxuICBzaG93VG9kb3MoaWRGaWx0ZXIpXG59XG5cbmZ1bmN0aW9uIHNob3dUb2RvcyhpZEZpbHRlcjogc3RyaW5nKSB7XG4gIGxldCBsaTogc3RyaW5nID0gJydcbiAgbGV0IHRvZG9QZW5kaW5nOiBUb2RvW11cbiAgbGV0IHRvZG9Db21wbGV0ZWQ6IFRvZG9bXVxuICBjb3VudCA9IHRvZG9zLmxlbmd0aFxuXG4gIGlmICh0b2Rvcykge1xuICAgIHRvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIGNvdW50LT0gMVxuICAgICAgfVxuICAgICAgbGV0IGl0ZW1Db21wbGV0ZWQgPSBpdGVtLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgPyAnY2hlY2tlZCcgOiAnJ1xuXG4gICAgICBpZiAoaWRGaWx0ZXIgPT09IGl0ZW0uc3RhdHVzIHx8IGlkRmlsdGVyID09PSAnYWxsJykge1xuICAgICAgICBsaSArPSBgPGxpIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtdGFza1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG9uY2xpY2s9XCJ1cGRhdGluZ0NoZWNrKHRoaXMpXCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke2luZGV4fVwiICR7aXRlbUNvbXBsZXRlZH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgb25kYmxjbGljaz1cImVkaXRDb250ZW50KHRoaXMpXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cIiR7aW5kZXh9ICR7aXRlbUNvbXBsZXRlZH1cIiAke2l0ZW0uY29udGVudH0gdmFsdWU9XCIke3RvZG9zW2luZGV4XS5jb250ZW50fVwiIHJlYWRvbmx5PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBvbmNsaWNrPVwiZGVsZXRpbmdUb2RvKCR7aW5kZXh9KVwiIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9saT5gO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy9maXggYnVnIGhpZGUtc2hvdyBidG4gY2xlYXIgYWxsXG4gIHRvZG9QZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG9QZW5kaW5nID0+IHRvZG9QZW5kaW5nLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKVxuICBpZiAodG9kb1BlbmRpbmcubGVuZ3RoID09PSAwIHx8IHRvZG9QZW5kaW5nLmxlbmd0aCA9PT0gdG9kb3MubGVuZ3RoKXtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICB9XG5cbiAgdG9kb0NvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvQ29tcGxldGVkID0+IHRvZG9Db21wbGV0ZWQuc3RhdHVzID09PSAnY29tcGxldGVkJylcbiAgaWYgKHRvZG9Db21wbGV0ZWQubGVuZ3RoID09PSB0b2Rvcy5sZW5ndGgpe1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICB2Q2hlY2tpbmcuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICB9IGVsc2Uge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICB9XG5cbiAgbGlzdFRvZG8uaW5uZXJIVE1MID0gbGlcbiAgaWYgKHRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgcXVhbnRpdHkuaW5uZXJUZXh0ID0gYCR7Y291bnR9YFxuICB9IGVsc2Uge1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB2Q2hlY2tpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHF1YW50aXR5LmlubmVyVGV4dCA9IGAke2NvdW50fWBcbiAgfVxufVxuc2hvd1RvZG9zKGlkRmlsdGVyKVxuXG5mdW5jdGlvbiBzYXZlVG9kb3MoZTogYW55KSB7XG4gIGxldCBjb250ZW50VG9kbyA9IGlucHV0dGluZ1RvZG9zPy52YWx1ZS50cmltKClcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGNvbnRlbnRUb2RvKSB7XG4gICAgaWYoIXRvZG9zKXtcbiAgICAgIHRvZG9zID0gW11cbiAgICB9XG5cbiAgICBsZXQgdG9kb0luZm86IFRvZG8gPSB7XG4gICAgICBjb250ZW50OiBjb250ZW50VG9kbyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIH1cblxuICAgIHRvZG9zLnB1c2godG9kb0luZm8pXG4gICAgaW5wdXR0aW5nVG9kb3MudmFsdWUgPSAnJ1xuICAgIHNhdmVMb2NhbCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRpbmdDaGVjayhlOiBhbnkpIHtcbiAgY291bnQgPSB0b2Rvcy5sZW5ndGhcbiAgbGV0IHRhc2tDb250ZW50ID0gZT8ucGFyZW50RWxlbWVudD8ubGFzdEVsZW1lbnRDaGlsZFxuICBsZXQgbGlzdFRvZG8gPSBlPy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50XG5cbiAgbGV0IHRvZG9Db21wbGV0ZWQ6IFRvZG9bXVxuICBsZXQgdG9kb1BlbmRpbmc6IFRvZG9bXVxuICBpZiAoZS5jaGVja2VkKSB7XG4gICAgdGFza0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpXG4gICAgdGFza0NvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcwLjUnXG4gICAgdG9kb3NbZS5pZF0uc3RhdHVzID0gJ2NvbXBsZXRlZCdcbiAgfSBlbHNlIHtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcbiAgICB0YXNrQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcwJ1xuICAgIHRvZG9zW2UuaWRdLnN0YXR1cyA9ICdwZW5kaW5nJ1xuICB9XG5cbiAgdG9kb0NvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvQ29tcGxldGVkID0+IHRvZG9Db21wbGV0ZWQuc3RhdHVzID09PSAnY29tcGxldGVkJylcbiAgaWYgKHRvZG9Db21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgfSBlbHNlIHtcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gIH1cblxuICBpZiAodG9kb0NvbXBsZXRlZC5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIHZDaGVja2luZy5jbGFzc0xpc3QuYWRkKCdjaGVjay1hbGwnKVxuICAgIHZDaGVja2luZy5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gIH0gZWxzZSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrLWFsbCcpXG4gICAgdkNoZWNraW5nLnN0eWxlLm9wYWNpdHkgPSAnMC4xJ1xuICB9XG5cbiAgdG9kb1BlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kb1BlbmRpbmcgPT4gdG9kb1BlbmRpbmcuc3RhdHVzID09PSAncGVuZGluZycpXG4gIGlmICh0b2RvUGVuZGluZy5sZW5ndGggPT09IHRvZG9zLmxlbmd0aCkge1xuICAgIGNsZWFyaW5nQWxsLnN0eWxlLm9wYWNpdHkgPSAnMCdcbiAgfVxuXG4gIGlmIChpZEZpbHRlciA9PT0gJ3BlbmRpbmcnICYmIGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIGxpc3RUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfSBlbHNlIGlmIChpZEZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgJiYgZS5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIGxpc3RUb2RvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfSBlbHNlIHtcbiAgICBsaXN0VG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gIH1cblxuICBxdWFudGl0eS5pbm5lclRleHQgPSBgJHtjb3VudC10b2RvQ29tcGxldGVkLmxlbmd0aH1gXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG59XG5cbmZ1bmN0aW9uIGNoZWNraW5nQWxsKCkge1xuICBpZiAodkNoZWNraW5nLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stYWxsJykgPT09IGZhbHNlKSB7XG4gICAgdkNoZWNraW5nLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWFsbCcpXG4gICAgY2xlYXJpbmdBbGwuc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgIHRvZG9zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgICBpdGVtLnN0YXR1cyA9ICdjb21wbGV0ZWQnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB2Q2hlY2tpbmcuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2stYWxsJylcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAuMSdcbiAgICB0b2Rvcy5mb3JFYWNoKCAoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5zdGF0dXMgPSAncGVuZGluZydcbiAgICB9KVxuICB9XG4gIHNhdmVMb2NhbCgpXG59XG5cbmZ1bmN0aW9uIGRlbGV0aW5nVG9kbyhpZERlbGV0ZTogYW55KSB7XG4gIHRvZG9zLnNwbGljZShpZERlbGV0ZSwgMSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8tbGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGRvY2tpbmdDb250cm9sLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBjbGVhcmluZ0FsbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbiAgc2hvd1RvZG9zKGlkRmlsdGVyKVxufVxuXG5mdW5jdGlvbiBjbGVhcmluZ0FsbENvbXBsZXRlZCgpIHtcbiAgbGV0IGFsbFRvZG9QZW5kaW5nOiBUb2RvW11cbiAgYWxsVG9kb1BlbmRpbmc9IHRvZG9zLmZpbHRlcihhbGxUb2RvUGVuZGluZyA9PiBhbGxUb2RvUGVuZGluZy5zdGF0dXMgIT09ICdjb21wbGV0ZWQnKVxuICB0b2RvcyA9IGFsbFRvZG9QZW5kaW5nXG5cbiAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICB9XG4gIHZDaGVja2luZy5jbGFzc0xpc3QucmVtb3ZlKCdjaGVjay1hbGwnKVxuICBjbGVhcmluZ0FsbC5zdHlsZS5vcGFjaXR5ID0gJzAnXG4gIHNhdmVMb2NhbCgpXG59XG5cbmZ1bmN0aW9uIG9uU3R5bGVJbnB1dChpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuICBpbnB1dC5zdHlsZS5vdXRsaW5lID0gJzAuNXB4IGRvdHRlZCBncmF5J1xuICBpbnB1dC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4J1xuICBpbnB1dC5zdHlsZS53aWR0aCA9ICc0MTBweCdcbiAgaW5wdXQuc3R5bGUubWFyZ2luTGVmdCA9ICc0MHB4J1xufVxuXG5mdW5jdGlvbiBvZmZTdHlsZUlucHV0KGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuZnVuY3Rpb24gZWRpdENvbnRlbnQoY29udGVudDogSFRNTElucHV0RWxlbWVudCkge1xuICBjb25zdCBlbGVDaGVja0lucHV0ID0gY29udGVudD8ucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTElucHV0RWxlbWVudFxuICBjb25zdCB0cmFzaCA9IGNvbnRlbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/Lmxhc3RFbGVtZW50Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnRcbiAgY29uc3QgbGlFbGUgPSBjb250ZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50IGFzIEhUTUxMSUVsZW1lbnRcbiAgY29uc3QgbmV3SW5wdXQgPSBjb250ZW50Py5wYXJlbnRFbGVtZW50Py5sYXN0RWxlbWVudENoaWxkIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKVxuICBvblN0eWxlSW5wdXQoY29udGVudClcbiAgZWxlQ2hlY2tJbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIHRyYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgY29udGVudC5zZXRTZWxlY3Rpb25SYW5nZShjb250ZW50LnZhbHVlLmxlbmd0aCwgY29udGVudC52YWx1ZS5sZW5ndGgpXG4gIGlmIChjb250ZW50LmNsYXNzTGlzdFsxXSA9PT0gJ2NoZWNrZWQnKSB7XG4gICAgY29udGVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJ1xuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbjogYW55KSA9PntcbiAgICAgIGlmIChldmVuLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpXG4gICAgICAgIGlmIChjb250ZW50LnZhbHVlID09PSAnJyApIHtcbiAgICAgICAgICBldmVuLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBsaUVsZS5yZW1vdmUoKVxuICAgICAgICAgIHRvZG9zLnNwbGljZShOdW1iZXIoY29udGVudC5jbGFzc0xpc3RbMF0pLCAxKVxuICAgICAgICAgIHNhdmVMb2NhbCgpXG4gICAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICAgIHNob3dUb2RvcyhpZEZpbHRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVuLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IGNvbnRlbnQudmFsdWVcbiAgICAgICAgICBlbGVDaGVja0lucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgICB0cmFzaC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICAgIHRvZG9zW051bWJlcihjb250ZW50LmNsYXNzTGlzdFswXSldLmNvbnRlbnQgPSBuZXdJbnB1dC52YWx1ZVxuICAgICAgICAgIHNhdmVMb2NhbCgpXG4gICAgICAgICAgc2hvd1RvZG9zKGlkRmlsdGVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb250ZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCdcbiAgICB9KVxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cilcbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBpZiAoY29udGVudC52YWx1ZSA9PT0gJycgKSB7XG4gICAgICAgIGxpRWxlLnJlbW92ZSgpXG4gICAgICAgIHRvZG9zLnNwbGljZShOdW1iZXIoY29udGVudC5jbGFzc0xpc3RbMF0pLCAxKVxuICAgICAgICBzYXZlTG9jYWwoKVxuICAgICAgICBvZmZTdHlsZUlucHV0KGNvbnRlbnQpXG4gICAgICAgIHNob3dUb2RvcyhpZEZpbHRlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0lucHV0LnZhbHVlID0gY29udGVudC52YWx1ZVxuICAgICAgICBlbGVDaGVja0lucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgdHJhc2guc3R5bGUub3BhY2l0eSA9ICcxJ1xuICAgICAgICBvZmZTdHlsZUlucHV0KGNvbnRlbnQpXG4gICAgICAgIHRvZG9zW051bWJlcihjb250ZW50LmNsYXNzTGlzdFswXSldLmNvbnRlbnQgPSBuZXdJbnB1dC52YWx1ZVxuICAgICAgICBzYXZlTG9jYWwoKVxuICAgICAgICBzaG93VG9kb3MoaWRGaWx0ZXIpXG4gICAgICB9XG4gICAgY29udGVudC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbjogYW55KSA9PntcbiAgICAgIGlmIChldmVuLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpXG4gICAgICAgIGlmIChjb250ZW50LnZhbHVlID09PSAnJyApIHtcbiAgICAgICAgICBldmVuLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBsaUVsZS5yZW1vdmUoKVxuICAgICAgICAgIHRvZG9zLnNwbGljZShOdW1iZXIoY29udGVudC5jbGFzc0xpc3RbMF0pLCAxKVxuICAgICAgICAgIHNhdmVMb2NhbCgpXG4gICAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICAgIHNob3dUb2RvcyhpZEZpbHRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVuLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IGNvbnRlbnQudmFsdWVcbiAgICAgICAgICBlbGVDaGVja0lucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgICB0cmFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICAgIHRvZG9zW051bWJlcihjb250ZW50LmNsYXNzTGlzdFswXSldLmNvbnRlbnQgPSBuZXdJbnB1dC52YWx1ZVxuICAgICAgICAgIHNhdmVMb2NhbCgpXG4gICAgICAgICAgc2hvd1RvZG9zKGlkRmlsdGVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbkJsdXIpXG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgaWYgKGNvbnRlbnQudmFsdWUgPT09ICcnICkge1xuICAgICAgICBsaUVsZS5yZW1vdmUoKVxuICAgICAgICB0b2Rvcy5zcGxpY2UoTnVtYmVyKGNvbnRlbnQuY2xhc3NMaXN0WzBdKSwgMSlcbiAgICAgICAgc2F2ZUxvY2FsKClcbiAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICBzaG93VG9kb3MoaWRGaWx0ZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdJbnB1dC52YWx1ZSA9IGNvbnRlbnQudmFsdWVcbiAgICAgICAgZWxlQ2hlY2tJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgICAgIHRyYXNoLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgICAgb2ZmU3R5bGVJbnB1dChjb250ZW50KVxuICAgICAgICB0b2Rvc1tOdW1iZXIoY29udGVudC5jbGFzc0xpc3RbMF0pXS5jb250ZW50ID0gbmV3SW5wdXQudmFsdWVcbiAgICAgICAgc2F2ZUxvY2FsKClcbiAgICAgICAgc2hvd1RvZG9zKGlkRmlsdGVyKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5maWx0ZXJTZWxlY3Rvci5mb3JFYWNoKChidG4pID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50Py5xdWVyeVNlbGVjdG9yKCdzcGFuLmFjdGl2ZScpPy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIHNob3dUb2RvcyhidG4uaWQpXG4gICAgcmV0dXJuIGlkRmlsdGVyID0gYnRuLmlkXG4gIH0pXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9