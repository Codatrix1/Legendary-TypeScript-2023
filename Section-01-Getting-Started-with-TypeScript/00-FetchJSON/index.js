"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// Address for Network Request
var url = "https://jsonplaceholder.typicode.com/todos/1";
// Args with Type Annotations
var logTasks = function (id, title, completed) {
    console.log("\n  The Todo with ID: ".concat(id, "\n  has a title of: ").concat(title, "\n  Is it finished?: ").concat(completed, "\n  "));
};
// Rest of the code
axios_1["default"].get(url).then(function (response) {
    var tasks = response.data;
    var id = tasks.id;
    var title = tasks.title;
    var completed = tasks.completed;
    logTasks(id, title, completed);
});
