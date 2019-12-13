var abc = document.getElementById("bg2");
// var input = document.getElementsByClassName("in");
var input = document.querySelectorAll(".in");

function generateABC(){
    var a_z = "az";
    console.log(a_z.charCodeAt(0));
    for(var i= a_z.charCodeAt(0); i<= a_z.charCodeAt(1); i++){
        var button = document.createElement("button");
        button.innerHTML = String.fromCharCode(i);
        button.classList.add('abcChar');
        button.addEventListener("click", function(event){
            console.log(event.target);
            input[1].value += event.target.innerText;
        });
        abc.appendChild(button);
        
        
    }
    
    console.log(button);
}

generateABC();

document.getElementById("delete").addEventListener("click", function(){
    var delText = input[1].value;
    input[1].value = delText.substring(0, delText.length - 1);
})

document.getElementById("delete1").addEventListener("click", function(){
    var delText = input[1].value;
    input[1].value = delText.substring(0, delText.length - 2);
})

document.getElementById("delete2").addEventListener("click", function(){
    var delText = input[1].value;
    input[1].value = delText.substring(0, delText.length - 5);
})

document.getElementById("delete3").addEventListener("click", function(){
    var delText = input[1].value;
    input[1].value = delText.substring(0, delText.length - delText);
})