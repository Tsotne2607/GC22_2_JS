function fun3(id){
    div = document.getElementById(id);
    var width = prompt("შეიყვანეთ სიგანე");
    table = "<table border=1 width="+width+" height="+300+">"
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

