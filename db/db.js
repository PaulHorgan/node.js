const {readFile, writeFile} = require('node:fs/promises'); 
const path = require('path'); 

const filePath = path.join(__dirname, 'todos.json');

const readTodos = () => {
    return readFile(filePath, 'utf-8'); 
}; 
const writeTodos = (todos) => {
    return writeFile(filePath, JSON.stringify(todos));
}
const getTodos = () => {
    return readTodos ()
        .then((data) => {
            if(!data) {
                return data = [];
            }else {
                return data = JSON.parse(data);
            };
        })
};

const createTodos = (todoText) => {
    // todo = {Id, todoText, complete}
    const id = Math.floor((1+ Math.random()) * 0x10000)
    .toString(16)
    .substring(1);


    const newTodo = {
        id, 
        todoText, 
        complete: false
    };
    getTodos().then((data) => {
        data.push(newTodo);
        writeTodos(data);
    }  )
}

const removeTodos = (id) => {
    getTodos().then((data) =>{
        const filterTodos = data.filter((todo) => todo.id!== id);
        writeTodos(filterTodos); 
    });
};

const completeTodos = (id) => {
    getTodos().then((data) =>{
    const todo1= data.map((todo) => {
        if(todo.id === id){
            return { ...todo, complete: !todo.complete}
        }
    })
    writeTodos(todo1);
    })
}
module.exports = {
    getTodos, 
    removeTodos,
    createTodos,
    completeTodos,
}