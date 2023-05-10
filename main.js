
    window.addEventListener('load', () =>{
    const form =document.querySelector("#task-form");
    const input = document.querySelector("#new_task");
    const list_element = document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const task = input.value;
        console.log(input.value);
    if(!task){
        alert("Please enter a task.");
        return;
    }

    const task_element=document.createElement("div");
   task_element.classList.add("task");

    const task_element_content=document.createElement("div");
    task_element_content.classList.add("content");
   

    task_element.appendChild(task_element_content);

    const task_element_input= document.createElement("input");
    task_element_input.classList.add("text"); 
    task_element_input.type="text";
    task_element_input.value=task;
    task_element_input.setAttribute("readonly", "readonly");

    task_element_content.appendChild(task_element_input);

    list_element.appendChild(task_element);

    const task_buttons=document.createElement("div");
    task_buttons.classList.add("buttons");

    const edit_button=document.createElement("input");
    edit_button.classList.add("edit");
    edit_button.type="button"
    edit_button.value="Edit";

    const delete_button=document.createElement("input");
    delete_button.classList.add("delete");
    delete_button.type="button"
    delete_button.value="delete task";

    task_buttons.appendChild(edit_button);
    task_buttons.appendChild(delete_button);

    task_element.appendChild(task_buttons);

    input.value="";
    // SaveData();
    edit_button.addEventListener('click', () =>{
       
        if(edit_button.value=="Edit"){
        task_element_input.removeAttribute("readonly");
        task_element_input.focus();
        edit_button.value="Save";
        // SaveData();
       }

       else{
        
            console.log("working")
            task_element_input.setAttribute("readonly", "readonly");
            edit_button.value="Edit";
            // SaveData();
       }

    } );

    delete_button.addEventListener('click', ()=>{
        list_element.removeChild(task_element);

    });

})

})

// function SaveData(){
//     localStorage.setItem("data", list_element.innerHtml );
// }

// function GetData(){
//     list_element.innerHtml = localStorage.getItem("data");
// }

// GetData();