let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
    let listitem = document.createElement("li");
    listitem.innerText = input.value ;

    let deletebutton = document.createElement("button");
    deletebutton.innerText="Delete";
    deletebutton.classList.add("delete");
    deletebutton.classList.add("btn");

    listitem.appendChild(deletebutton);
    ul.appendChild(listitem);
    input.value="";
})

//this will not work this function will only listen 
//to the existing delete button if we add new buttton the 
//event listner wont work on them so instead of this 
//button we use event bubbling and target the parent
// element of the button to listen to that event 


// let delbtn = document.querySelector(".delete");
// for (deletebutton of delbtn){
//     deletebutton.addEventListener("click",function(){
//         let parent = deletebutton.parentElement();
//         parent.remove();
//     })
// } 


ul.addEventListener("click", function(event){
    if (event.target.nodeName="BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
})
