const {argv} = require('node:process');
const {getTodos, createTodos, removeTodos, completeTodos} = require('./db/db');
const { todo } = require('node:test');

// TO DO Application
//Add To Do
//Compelte To Do
//Remove To Do
//View To Do

const handleCommand = (todoCommand, todos) => {
    switch(todoCommand){
        case 'add' :
            createTodos (todos);
            break;
        case 'complete' :
                completeTodos(todos);
                break;
        case 'remove' :
                removeTodos(todos);
                break;
        case 'view' :
                 getTodos().then(data=> console.log(data));
                 break;
        default:
             console.log("PLEASE ENTER VALID INPUT")  ;  
            }
}
const init = () => {
    const todoCommand = argv [2];
    const todos = argv[3];
    return handleCommand(todoCommand, todos)
}   ;

init()

