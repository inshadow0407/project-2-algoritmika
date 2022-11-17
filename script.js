let addNew = document.getElementById("add");
let sortDown = document.querySelector(".sort.down");
let sortUp = document.querySelector(".sort.up");
let list = document.querySelector(".list")
let toDoList = [];
function addElement(){
    if(list.children.length != 0){
        document.querySelectorAll("li").forEach((li)=>{li.remove()})
    }
    list.style.display="block";
    toDoList.push(document.querySelector("input").value);
    toDoList.forEach((element)=>{
        let li = document.createElement("li");
        li.innerHTML=`<p>${element}</p><img class="remove-line" src="close-svgrepo-com.svg"" alt="X">`;
        list.append(li);
    })
    document.querySelector("input").value=null;
    document.querySelectorAll(".remove-line").forEach((element)=>{
        element.addEventListener("click", removeElement)
    });
}
function removeElement(event){
    event.target.parentElement.remove();

    
}
addNew.addEventListener("click", addElement);
