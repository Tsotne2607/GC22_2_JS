ge = "აბგდევზთიკლმნოპჟრსტუფქღყშცძწჭხჩჰო";
eng = "ABCDEFGHIKLMNOPQRSTVXYZ";
ru = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

function randomSymbol(lang){    
    
    if(lang=="ge"){
        index = (Math.random()*33).toFixed(0);
        console.log(ge[index]);
    }else if(lang=="eng"){
        index = (Math.random()*23).toFixed(0);
        console.log(eng[index]);
    }else if(lang=="ru"){
        index = (Math.random()*33).toFixed(0);
        console.log(ru[index]);
    }

}

function randomWord(lang, N){
    word = "";
    for(i=0; i<=N; i++){
        word += randomSymbol("lang")
    }
    console.log(word);
}





Alphabet = 
{
    ge : "აბგდევზთიკლმნოპჟრსტუფქღყშცძწჭხჩჰო",
    en : "ABCDEFGHIKLMNOPQRSTVXYZ",
    ru : "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ", 
}


function randomSmybolWithoutIf(lang){
    index = (Math.random()*(Alphabet[lang].length-1)).toFixed(0);
    console.log(Alphabet[lang][index]);

}

// randomSmybolWithoutIf("ru")
function randomWord()
// randomSymbol("eng");
