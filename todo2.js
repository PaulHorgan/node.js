const {argv} = require('node:process');
const {getTodos, createTodo, removeTodo, completeTodo} = require('./db/db');
 
// Todo Application
// Add Todo
// Complete Todo
//Remove Todo
// View all Todos
 
const handleCommand = (todoCommand, todo) => {
    switch(todoCommand){
        case 'add':
            createTodo(todo); break;
        case 'complete':
            completeTodo(todo); break;
        case 'remove':
            removeTodo(todo); break;
        case 'view':
            getTodos().then(data => console.log(data)); break;
        default:
            console.log("Please input a valid command")                
        }
}
 
const init = () => {
    const todoCommand = argv[2]
    const todo = argv[3]
    return handleCommand(todoCommand,todo)
}
 
init()