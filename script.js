const text = document.getElementById('text');
const numberWords = document.querySelector('#numWords');
const numberCharacters = document.querySelector('#numChar');




text.addEventListener('input', function(){
    
    wordCounter(text.value);
    charCounter(text.value);
    if(text.value.length == 0){
        numberWords.textContent = 0 + " words";
        numberCharacters.textContent = 0 + " characters";
    }
})




function wordCounter(t){
    let counter = 0;
    counter = t.trim().split(/\s+/).length;
    numberWords.textContent = counter + " words";
}

function charCounter(t){
    counter = 0;
    for (let i = 0;i < t.length; i++){
        if(t[i] != " "){
            counter+=1;
        }
    }
    numberCharacters.textContent = counter + " characters";
}