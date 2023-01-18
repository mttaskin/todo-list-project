const todoInput = document.getElementById('todo-input');
const addBtn =document.querySelector('#todo-button');
const todoUl = document.querySelectorAll('#todo-ul');

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

window.addEventListener("load", ()=>{
    getTodoListFromLocalStorage();
});
const getTodoListFromLocalStorage = ()=>{

};

addBtn.addEventListener("click", (e)=>{
    e.preventsDefault();
    if (todoInput.value === '') {
        alert('Please, enter new todo text!');
        return;
    }
    // else{
    //     alert("continue");
    // }

    const newTodo = {
        id : new Date().getTime(),
        completed : false,
        Text : todoInput.value 
    }
});