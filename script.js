let addNew = document.getElementById("add");
let sortDown = document.querySelector(".sort.down");
let sortUp = document.querySelector(".sort.up");
let list = document.querySelector(".list")
let toDoList = [];
let isSorted =0;
function clean(){
    if(list.children.length != 0){
        document.querySelectorAll("li").forEach((li)=>{li.remove()})
    }
}
function reDraw(){
    toDoList.forEach((element)=>{
        let li = document.createElement("li");
        li.innerHTML=`<p>${element}</p><span class="remove-line">&#9421</span>`;
        list.append(li);
    })
    document.querySelectorAll(".remove-line").forEach((element)=>{
        element.addEventListener("click", removeElement)
    });
}
function addElement(){
    clean();
    list.style.display="block";
    toDoList.push(document.querySelector("input").value);
    reDraw();
    document.querySelector("input").value=null;
    isSorted=0;
}
function removeElement(event){
    event.target.parentElement.remove();
    toDoList.splice(toDoList.indexOf(event.target.previousSibling.textContent),1);
    if(toDoList.length===0) list.style.display="none";
}
function sorting(){
    let numbers = toDoList.filter((element)=>{if(!isNaN(+element))return +element}).sort((a,b)=>{
        if(+a> +b) return 1; 
        if(+a< +b) return -1;
    });
    let notNumber = toDoList.filter((element)=>{if(isNaN(+element))return element}).sort((a,b)=>{
        if(a>b) return 1; 
        if(a<b) return -1;
    });
    if(isSorted==0){
         toDoList = [...numbers, ...notNumber];
         isSorted=1
         sortDown.style.display="none";
         sortUp.style.display="block";
    }
    else if(isSorted==1){
         toDoList = ([...numbers, ...notNumber]).reverse();
         isSorted=0;
         sortDown.style.display="block";
         sortUp.style.display="none";
    }
    clean();
    reDraw();
}
addNew.addEventListener("click", addElement);
sortDown.addEventListener("click", sorting)
sortUp.addEventListener("click", sorting)