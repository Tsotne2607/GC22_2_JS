function randStr(id){
    div = document.getElementById(id)
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 'y', "z", "1", "2"];
    rand = [];

    for(var i=0; i<40; i++){
        character = chars[Math.floor(Math.random() * chars.length)];
        rand.push(character);
    }
    div.innerHTML = rand.join('');
}