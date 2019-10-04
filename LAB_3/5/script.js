function fun3(id){
    div = document.getElementById(id);
    var height = prompt("შეიყვანეთ სიგრძე");
    table = "<table border=1 width="+300+" height="+height+">"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"</table>"

    div.innerHTML =table;

}

