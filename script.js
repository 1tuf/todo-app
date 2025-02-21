let task=document.querySelector('#task-input');
let addBtn=document.querySelector('#add-btn');
let taskList=document.querySelector('#task-list');


addBtn.addEventListener("click",()=>{
    if(task.value!==""){
        let li=document.createElement('li');
        li.innerHTML=`${task.value} <button class="delete-button">Delete</button>`;
        taskList.appendChild(li);
        task.value="";
    }
})
taskList.addEventListener("click",function(event){
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
})




