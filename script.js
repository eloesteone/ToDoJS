let text = document.getElementById("text");
let addBtn = document.getElementById("add");
let bottom = document.getElementById("bot");

addBtn.addEventListener("click", function(){
    bottom.style.display = "block";
    var paragraph = document.createElement('p');
    paragraph.id = "task";
    paragraph.innerText = text.value;
    bottom.appendChild(paragraph);


    paragraph.addEventListener("dblclick", function (){
        bottom.removeChild(paragraph);

        if (bottom.querySelectorAll('p').length === 0) {
            bottom.style.display = 'none';
        }
    });
});

if (bottom.querySelectorAll('p').length === 0) {
    bottom.style.display = 'none';
}