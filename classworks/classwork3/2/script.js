function testConfirm(){
    data = confirm("გამარჯობა, გსურთ გაიგოთ ვებ გვერდის შესახებ უფრო მეტი?");
    document.getElementById("div").style.visibility = "hidden";
    document.getElementById("div2").style.visibility = "hidden";
    if(data){
        document.getElementById("div2").style.visibility = "visible";
    }else{
        document.getElementById("div").style.visibility = "visible";
    }
}