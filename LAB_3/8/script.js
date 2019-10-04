function fun3(id){
    div = document.getElementById(id);
    var border1 = prompt("შეიყვანეთ საზღვრის ზომა პიქსელებში");
    table = "<table border="+border1+" width="+300+" height="+300+">"
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