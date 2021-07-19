
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
var dataAtual = dia + '/' + mes + '/' + ano;

var date1 ="23/06/2021";

var diff = moment(date1, 'DD/MM/YYYY').diff(moment(dataAtual,"DD/MM/YYYY"));

var dias = moment.duration(diff).asDays();
var meses = moment.duration(diff).asMonths();

console.log(dias+" "+meses);
