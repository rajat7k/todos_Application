let todoListItem=document.getElementById('todoListItem');
let todoArr=[];
let currentTodo=todoArr.length

function saveTodoList(){
    localStorage.clear("todoListData");
    localStorage.setItem("todoListData",JSON.stringify(todoArr));
    console.log(todoArr);
}

let getDataFromLocal=JSON.parse(localStorage.getItem("todoListData"));
console.log(getDataFromLocal);
if(getDataFromLocal!==null){
    todoArr=getDataFromLocal;
todoArr.forEach(element => {
    addTodoToList(element);
});
}

function addTodo(){
    let task=document.getElementById('todo-input').value;
    document.getElementById('todo-input').value='';
    console.log(task);

    let currentTaskObject={
        id:currentTodo,
        task:task
    }
    currentTodo+=1;
    todoArr.push(currentTaskObject);
    addTodoToList(currentTaskObject);
    
}


function addTodoToList(todo) {
    let todoId = "todo" + todo.id;
    let textId = "label" + todo.id;


    // create list item 
    let todoItem=document.createElement("li");
    todoItem.classList.add("todo-list-item");
    todoItem.id=todoId;


// make div box 
    let todoItemBox =document.createElement("div");
    todoItemBox.classList.add('todo-item-box');


    // create check box 
    let listCheckBox = document.createElement("input");
    listCheckBox.type = "checkbox";
    listCheckBox.classList.add("check-Box");



    let contentBox =document.createElement("div");
    contentBox.classList.add('contentBox');
  
// create todo text
    let listTask=document.createElement("p");
    listTask.appendChild(document.createTextNode(todo.task));
    listTask.id=textId;

    // on checkbox click
    listCheckBox.onclick = ()=>document.getElementById(textId).classList.toggle("item-checked");

// deleteIcon
   let deleteIcon=document.createElement("i");
   deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = ()=>{
        todoListItem.removeChild(document.getElementById(todoId));

        // delete todoItem From array 
        todoArr.splice(todoArr.findIndex((ele)=>ele.todoId===todoId));
    }


    // packing item 

   contentBox.appendChild(listTask);
   contentBox.appendChild(deleteIcon);


   todoItemBox.appendChild(listCheckBox);
    todoItemBox.appendChild(contentBox);

   todoItem.appendChild(todoItemBox);

   todoListItem.appendChild(todoItem);
}
