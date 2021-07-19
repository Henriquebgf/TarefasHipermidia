/* Verifica se é Palindro*/

var word = window.prompt('Digite uma palavra para saber se é palíndromo.')

function isPalindrome(word) {
    return word == word.split("").reverse().join("") ? 'A palavra é um palíndromo' : 'A palavra não é um palíndromo';
}

alert(isPalindrome(word));


