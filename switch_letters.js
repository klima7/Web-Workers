swap_letters('name')
swap_letters('surname')
swap_letters('name')

this.addEventListener('message', function(e) {
    this.postMessage({
        name: swap_letters(e.data.name),
        surname: swap_letters(e.data.surname),
    });
}, false);

function swap_letters(text) {
    result = ''
    for(let i=0; i<text.length; i++) {
        letter = text[i]
        if(letter == letter.toUpperCase()) 
            letter = letter.toLowerCase();
        else
            letter = letter.toUpperCase();
        result += letter;
    }
    return result;
}