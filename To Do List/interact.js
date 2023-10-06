let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task");
    }
    else{
        let temp= document.createElement("ul");
        temp.innerHTML=`${inputs.value} <i class="fa-solid fa-trash-can fa-bounce"></i>`
        text.appendChild(temp);
        inputs.value="";
        temp.querySelector("i").addEventListener("click",remove);
        function remove(){
            temp.remove();
        }
    }
}