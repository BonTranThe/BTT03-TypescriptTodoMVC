/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst show_1 = __webpack_require__(/*! ./show */ \"./src/show.ts\");\nconst show_2 = __webpack_require__(/*! ./show */ \"./src/show.ts\");\nshow_1.showTodos;\nshow_2.saveTodos;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBbUM7QUFDbkMsa0VBQW9DO0FBRXBDLGdCQUFTLENBQUM7QUFDVixnQkFBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbDAzLXRzb2Z0b2RvLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd1RvZG9zIH0gZnJvbSBcIi4vc2hvd1wiO1xuaW1wb3J0IHsgc2F2ZVRvZG9zICB9IGZyb20gXCIuL3Nob3dcIjtcblxuc2hvd1RvZG9zO1xuc2F2ZVRvZG9zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/show.ts":
/*!*********************!*\
  !*** ./src/show.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.saveTodos = exports.showTodos = void 0;\n//Selector\nconst inputtingTodos = document.querySelector('.task-input input');\nconst vChecking = document.querySelector('.task-input i');\nconst listTodo = document.querySelector('.task-box');\nconst dockingControl = document.querySelector('.controls');\nconst quantity = document.querySelector('.count');\nconsole.log(quantity.textContent);\n//Variables\nlet todos;\nlet idFilter = 'all';\nlet count;\ntodos = JSON.parse(localStorage.getItem('todo-list') || '[]');\n// Listener Event\ninputtingTodos === null || inputtingTodos === void 0 ? void 0 : inputtingTodos.addEventListener('keyup', saveTodos);\n//Function\nfunction showTodos(idFilter) {\n    let li = '';\n    count = todos.length;\n    console.log(count);\n    if (todos) {\n        todos.forEach((item, index) => {\n            if (idFilter === item.status || idFilter === 'all') {\n                li += `<li class=\"task\">\n                <div>\n                  <input type=\"checkbox\" id=\"${index}\">\n                  <span class=\"${index}\">${item.content}</span>\n                </div>\n                <div class=\"task-close\">\n                  <i onclick=\"deleteTask(${index})\" class=\"fa-solid fa-xmark\"></i>\n                </div>\n              </li>`;\n            }\n        });\n    }\n    listTodo.innerHTML = li;\n    if (todos.length !== 0) {\n        vChecking.style.display = 'inline';\n        dockingControl.style.display = 'flex';\n        quantity.innerText = count;\n    }\n    else {\n        dockingControl.style.display = 'none';\n        vChecking.style.display = 'none';\n    }\n}\nexports.showTodos = showTodos;\nshowTodos(idFilter);\nfunction saveTodos(e) {\n    let contentTodo = inputtingTodos === null || inputtingTodos === void 0 ? void 0 : inputtingTodos.value.trim();\n    if (e.key === 'Enter' && contentTodo) {\n        if (!todos) {\n            todos = [];\n        }\n        let todoInfo = {\n            content: contentTodo,\n            status: 'pending',\n        };\n        todos.push(todoInfo);\n        inputtingTodos.value = '';\n        localStorage.setItem('todo-list', JSON.stringify(todos));\n        showTodos(idFilter);\n    }\n}\nexports.saveTodos = saveTodos;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hvdy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxVQUFVO0FBQ1YsTUFBTSxjQUFjLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUUsQ0FBQztBQUN0RixNQUFNLFNBQVMsR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUUsQ0FBQztBQUN6RSxNQUFNLFFBQVEsR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsQ0FBQztBQUNwRSxNQUFNLGNBQWMsR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUUsQ0FBQztBQUMxRSxNQUFNLFFBQVEsR0FBaUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUUsQ0FBQztBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQU9sQyxXQUFXO0FBQ1gsSUFBSSxLQUFhLENBQUM7QUFDbEIsSUFBSSxRQUFRLEdBQVUsS0FBSyxDQUFDO0FBQzVCLElBQUksS0FBVSxDQUFDO0FBQ2YsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUU5RCxpQkFBaUI7QUFDakIsY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUVyRCxVQUFVO0FBQ1YsU0FBZ0IsU0FBUyxDQUFDLFFBQWdCO0lBQ3hDLElBQUksRUFBRSxHQUFXLEVBQUUsQ0FBQztJQUNwQixLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5CLElBQUksS0FBSyxFQUFFO1FBQ1QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1QixJQUFHLFFBQVEsS0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7Z0JBQ2pELEVBQUUsSUFBSTs7K0NBRWlDLEtBQUs7aUNBQ25CLEtBQUssS0FBSyxJQUFJLENBQUMsT0FBTzs7OzJDQUdaLEtBQUs7O29CQUU1QixDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUM7S0FDSDtJQUNELFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1FBQ25DLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztLQUM1QjtTQUFNO1FBQ0wsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUNsQztBQUNILENBQUM7QUE3QkQsOEJBNkJDO0FBQ0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXBCLFNBQWdCLFNBQVMsQ0FBQyxDQUFNO0lBQzlCLElBQUksV0FBVyxHQUFHLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0MsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxXQUFXLEVBQUU7UUFDcEMsSUFBRyxDQUFDLEtBQUssRUFBQztZQUNSLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELElBQUksUUFBUSxHQUFHO1lBQ2IsT0FBTyxFQUFFLFdBQVc7WUFDcEIsTUFBTSxFQUFFLFNBQVM7U0FDbEI7UUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwQixjQUFjLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDekIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDO0FBakJELDhCQWlCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2wwMy10c29mdG9kby8uL3NyYy9zaG93LnRzPzlkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy9TZWxlY3RvclxuY29uc3QgaW5wdXR0aW5nVG9kb3MgPSg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCBpbnB1dCcpKTtcbmNvbnN0IHZDaGVja2luZyA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQgaScpKTtcbmNvbnN0IGxpc3RUb2RvID0gKDxIVE1MRWxlbWVudD5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1ib3gnKSk7XG5jb25zdCBkb2NraW5nQ29udHJvbCA9ICg8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzJykpO1xuY29uc3QgcXVhbnRpdHkgPSAoPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudCcpKTtcbmNvbnNvbGUubG9nKHF1YW50aXR5LnRleHRDb250ZW50KTtcblxuXG5pbnRlcmZhY2UgdG9kb3tcbiAgY29udGVudD86IHN0cmluZ1xuICBzdGF0dXM/OiBzdHJpbmdcbn1cbi8vVmFyaWFibGVzXG5sZXQgdG9kb3M6IHRvZG9bXTtcbmxldCBpZEZpbHRlcjpzdHJpbmcgPSAnYWxsJztcbmxldCBjb3VudDogYW55O1xudG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvLWxpc3QnKSB8fCAnW10nKTtcblxuLy8gTGlzdGVuZXIgRXZlbnRcbmlucHV0dGluZ1RvZG9zPy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNhdmVUb2Rvcyk7XG5cbi8vRnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBzaG93VG9kb3MoaWRGaWx0ZXI6IHN0cmluZykge1xuICBsZXQgbGk6IHN0cmluZyA9ICcnO1xuICBjb3VudCA9IHRvZG9zLmxlbmd0aDtcbiAgY29uc29sZS5sb2coY291bnQpO1xuXG4gIGlmICh0b2Rvcykge1xuICAgIHRvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZihpZEZpbHRlciA9PT0gaXRlbS5zdGF0dXMgfHwgaWRGaWx0ZXIgPT09ICdhbGwnKSB7XG4gICAgICAgIGxpICs9IGA8bGkgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7aW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIiR7aW5kZXh9XCI+JHtpdGVtLmNvbnRlbnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBvbmNsaWNrPVwiZGVsZXRlVGFzaygke2luZGV4fSlcIiBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPmA7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBsaXN0VG9kby5pbm5lckhUTUwgPSBsaTtcbiAgaWYgKHRvZG9zLmxlbmd0aCAhPT0gMCkge1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG4gICAgZG9ja2luZ0NvbnRyb2wuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBxdWFudGl0eS5pbm5lclRleHQgPSBjb3VudDtcbiAgfSBlbHNlIHtcbiAgICBkb2NraW5nQ29udHJvbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZDaGVja2luZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5zaG93VG9kb3MoaWRGaWx0ZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVRvZG9zKGU6IGFueSkge1xuICBsZXQgY29udGVudFRvZG8gPSBpbnB1dHRpbmdUb2Rvcz8udmFsdWUudHJpbSgpO1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgY29udGVudFRvZG8pIHtcbiAgICBpZighdG9kb3Mpe1xuICAgICAgdG9kb3MgPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgdG9kb0luZm8gPSB7XG4gICAgICBjb250ZW50OiBjb250ZW50VG9kbyxcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgIH1cblxuICAgIHRvZG9zLnB1c2godG9kb0luZm8pXG4gICAgaW5wdXR0aW5nVG9kb3MudmFsdWUgPSAnJ1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvLWxpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG4gICAgc2hvd1RvZG9zKGlkRmlsdGVyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/show.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;