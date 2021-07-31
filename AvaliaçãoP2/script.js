
//lUIS HENRIQUE BARBOSA gOMES fILHO
// calcula o tempo da hospedagem em dias
var DateDiff = {

    inDays: function (d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },

}


// calcula o valor da diaria do tipo de quarto selecionado


function calcquarto(tipoquarto) {
    var diaria = 0;


    if (tipoquarto === 'valor1') {
        diaria = 139;

    }
    else if (tipoquarto === 'valor2') {
        diaria = 220;

    }
    else if (tipoquarto === 'valor3') {
        diaria = 340;

    }

    return (diaria);
}



function calcular(datachegada, datasaida, tipoquarto) {
    var d1 = new Date(datachegada);
    var d2 = new Date(datasaida);
    var nome = (document.getElementById("nome").value);
    var telefone = (document.getElementById("telefone").value);
    var quarto = tipoquarto;
    var tempo = DateDiff.inDays(d1, d2);// chama funcao que calcula o periodo da hospedagem em dias
    var numcrianca = parseFloat(document.getElementById("crianca").value);// pega a quantidade de crianças digita
    var precocrianca = 30 * numcrianca;// calcula o adicional por criança
    var preco = (calcquarto(tipoquarto) + precocrianca) * tempo; // calcula preco final  da hospedagem 

    if (quarto === 'valor1' && numcrianca > 3) { // verifica se não tem mais de 4 hospedes
        alert('Só é permitido no máximo 4 hospedes')
    } else if (quarto === 'valor2' && numcrianca >> 2) {// verifica se não tem mais de 4 hospedes
        alert('Só é permitido no máximo 4 hospedes')

    }
    else if (quarto === 'valor3' && numcrianca > 1) {// verifica se não tem mais de 4 hospedes
        alert('Só é permitido no máximo 4 hospedes')

    } else {// hospedes menores ou igual a 4 então aprovado

        alert('Cliente: ' + nome + '  Telefone: ' + telefone + ' Preço final da Hospedagem: ' + preco);
    }


}

