var visor = "";
var numero = 0;
var op = "";

var limpar = document.getElementById("limpar");
limpar.addEventListener("click", function(event){

    visor = "";
    op = "";

    document.getElementById("visor").value = visor;
});

var zero = document.getElementById("0");
zero.addEventListener("click", function(event){

    visor += 0

    document.getElementById("visor").value = visor;
});

var um = document.getElementById("1");
um.addEventListener("click", function(event){

    visor += 1

    document.getElementById("visor").value = visor;
});

var dois = document.getElementById("2");
dois.addEventListener("click", function(event){

    visor += 2

    document.getElementById("visor").value = visor;
});

var tres = document.getElementById("3");
tres.addEventListener("click", function(event){

    visor += 3

    document.getElementById("visor").value = visor;
});

var quatro = document.getElementById("4");
quatro.addEventListener("click", function(event){

    visor += 4

    document.getElementById("visor").value = visor;
});

var cinco = document.getElementById("5");
cinco.addEventListener("click", function(event){

    visor += 5

    document.getElementById("visor").value = visor;
});

var seis = document.getElementById("6");
seis.addEventListener("click", function(event){

    visor += 6

    document.getElementById("visor").value = visor;
});

var sete = document.getElementById("7");
sete.addEventListener("click", function(event){

    visor += 7

    document.getElementById("visor").value = visor;
});

var oito = document.getElementById("8");
oito.addEventListener("click", function(event){

    visor += 8

    document.getElementById("visor").value = visor;
});

var nove = document.getElementById("9");
nove.addEventListener("click", function(event){

    visor += 9

    document.getElementById("visor").value = visor;
});

var calc = document.getElementById("calc");

var soma = document.getElementById("soma");

soma.addEventListener("click", function(event){

    numero = parseFloat(visor);
    visor = "";
    op = "+";
    document.getElementById("visor").value = visor;

});

var menos = document.getElementById("menos");

menos.addEventListener("click", function(event){

    numero = parseFloat(visor);
    visor = "";
    op = "-";
    document.getElementById("visor").value = visor;

});

var multiplicacao = document.getElementById("multiplicacao");

multiplicacao.addEventListener("click", function(event){

    numero = parseFloat(visor);
    visor = "";
    op = "*";
    document.getElementById("visor").value = visor;

});

var divisao = document.getElementById("divisao");

divisao.addEventListener("click", function(event){

    numero = parseFloat(visor);
    visor = "";
    op = "/";
    document.getElementById("visor").value = visor;

});

var raiz = document.getElementById("raiz");

raiz.addEventListener("click", function(event){

   numero = parseFloat(visor);
   var2 = Math.sqrt(numero);
   document.getElementById("visor").value = var2;

});


var calc = document.getElementById("calc");

calc.addEventListener("click", function(event){

      if(op=="-"){
         visor=parseFloat((numero)-parseFloat(visor));
         document.getElementById("visor").value = visor;
      }

      if(op=="*"){
         visor=parseFloat((numero)*parseFloat(visor));
         document.getElementById("visor").value = visor;
      }

      if(op=="/"){
         visor=parseFloat((numero)/parseFloat(visor));
         document.getElementById("visor").value = visor;
      }

      if(op=="+"){
         visor=parseFloat((numero)+parseFloat(visor));
         document.getElementById("visor").value = visor;
      }

})