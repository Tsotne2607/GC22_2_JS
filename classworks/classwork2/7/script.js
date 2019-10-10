function numberTestTwo(id, a, b){
    n = document.getElementById("number").value; 
    result = document.getElementById(id);
    result.style.fontSize = "2em";
    result.innerHTML = Math.floor(Math.random() * a) + b;
    result.innerHTML += "<br><br>";
    var a = 17;
    var b = 20;
}

