function findANumber(){
    text = document.getElementById("textId").value;
    console.log(text);
    if(Array.isArray(text.toLowerCase().match(/a/g))){
        count  = text.toLowerCase().match(/a/g).length;
    }else{
        count = 0;
    }
    document.getElementById("result3").innerText = count;
}