/*
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
*/
var DateDiff = {

    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000))-1;
    },

    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var dString = "01/19/2021";

function runscript(dString){
var d1 = new Date(dString);
var d2 = new Date();

alert('tempo trasncorrido : '+DateDiff.inDays(d1, d2)+" dias, "+DateDiff.inMonths(d1, d2)+" meses e "+DateDiff.inYears(d1, d2)+" anos");
}