function numberTestTwo(id){
    n = document.getElementById("number").value; 
    result = document.getElementById(id);
    result.style.fontSize = "2em";
    result.innerHTML = Math.floor(Math.random() * 50) + 5;
    result.innerHTML += "<br><br>";
}

