function fun3(id){
    div = document.getElementById(id);
    var border1 = prompt("შეიყვანეთ საზღვრის ზომა");
    var width1 = prompt("შეიყვანეთ სიგანე");
    var height1 = prompt("შეიყვანეთ სიმაღლე");
    table = "<table border="+border1+" width="+width1+" height="+height1+">"
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