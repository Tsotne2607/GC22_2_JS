function classwork1(id, text){
    div = document.getElementById(id);
    div.innerHTML = "<b><i><u>"+text+"</u></i></b>";

}

function classwork3(id, text, size){
    div = document.getElementById(id);
    div.innerHTML = text;
    div.style.fontSize = size+"px";
}

function classwork6(id, width, height){
    div = document.getElementById(id);
    table = "<table border=1 width="+width+" height="+height+">"
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

