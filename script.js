console.log("dupa");

let text = document.getElementById("text");
let addBtn = document.getElementById("add");
let bottom = document.getElementById("bot")

addBtn.addEventListener("click", function(){
    bottom.style.display = "block";
    var paragraph = document.createElement('p');
    paragraph.innerText = text.value;
    bottom.appendChild(paragraph);
});