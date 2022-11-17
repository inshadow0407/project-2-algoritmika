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
        li.innerHTML=`<p>${element}</p><svg class="remove-line" viewBox="0 0 1024 1024"><path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm181.008-630.016c-12.496-12.496-32.752-12.496-45.248 0L512 466.752l-135.76-135.76c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248L466.736 512l-135.76 135.76c-12.496 12.48-12.496 32.769 0 45.249 12.496 12.496 32.752 12.496 45.264 0L512 557.249l135.76 135.76c12.496 12.496 32.752 12.496 45.248 0 12.496-12.48 12.496-32.769 0-45.249L557.248 512l135.76-135.76c12.512-12.512 12.512-32.768 0-45.248z"/></svg>`;
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