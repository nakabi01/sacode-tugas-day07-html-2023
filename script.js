const inputBox = document.getElementById ("input-Box");
const listcontainer = document.getElementById ("list-container");

function AddTask(){
    if(inputBox.value ===''){
        alert("you must write something!");
  
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listcontainer.appendChild(li);
       let span = document .createElement("span");
       span.innerHTML = "\u007";
       li.appendChild(span);
    }
    inputBox.value = "";

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }


},false);