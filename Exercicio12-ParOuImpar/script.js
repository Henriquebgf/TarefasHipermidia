/* Verifica se é par ou ímpar*/
var number = window.prompt('Digite um número')

function isPar(number){
var rest = number % 2;
	return rest == 0 ? number+' é um número par' :  number+' é um número ímpar';
}

alert( isPar(number));



