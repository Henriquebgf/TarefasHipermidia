var indexImg=1;
var arrayImagens = [ //caminho das suas imgs aqui
'./lampada_on.gif',
'./lampada_off.gif',
];

function trocar(){

  if(indexImg == arrayImagens.length) //reseta quando o contador for igual ao tamanho do array e volta a 1° img
  {
    indexImg=0;
  }
  document.getElementById("lampada").src=arrayImagens[indexImg]; //altera a img do elemento "lampada" de acordo com o índice
  indexImg++; // incrementa a nossa referência

}