var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;
function conf(){
    window.alert('Obrigado pelo seu voto!')
}
function votar1(){
      count1++;
      window.alert('Você votou em Luffy')
}
function votar2(){
      count2++;
      window.alert('Você votou em Kazuto ')
}
function votar3(){
      count3++;
      window.alert('Você votou em Edward')
}
function votar4(){
      count4++;
      window.alert('Você votou em Sugou')
}
function votobranco(){
      count5++;
      window.alert('Voto branco')
}
function votonulo(){
      count6++;
      window.alert('Voto nulo')
}

function result(){
      var total = count1 + count2 + count3 + count4 + count5 + count6;
      var ben = count5 + count6;
      var percentual = (ben*100)/total;
  window.alert('RESULTADOS: \nLuffy: ' + count1 + ' voto(s)' + 
  ' \nKazuto: ' + count2 + ' voto(s)' + 
  ' \nEdward: ' + count3 + ' voto(s)' + 
  ' \nSugou: ' + count4 + ' voto(s)' + 
  ' \nVoto branco: ' + count5 + ' voto(s)' + 
  ' \nVoto nulo: ' + count6 + ' voto(s)' +
  '\nPercentual de votos brancos e nulos: ' + percentual.toFixed(2) + '%')
}