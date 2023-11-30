var numero1;
var numero2;
var operador;
function variables(){

    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sumar = document.getElementById("sumar");
    var restar = document.getElementById("restar");
    var multiplicar = document.getElementById("multiplicar");
    var dividir = document.getElementById("dividir");
    var resultado = document.getElementById("resultado");
    var borrado = document.getElementById("borrar");
    var igual = document.getElementById("igual");
    var ciento = document.getElementById("ciento");
    var pares = document.getElementById("par");
    var borraruno = document.getElementById("borrado");
    var pi = document.getElementById("i");

    sumar.onclick = function(){
        numero1 = resultado.textContent;
        operador = "+";
        resultado.textContent = "+";
        resultado.textContent = "";
    }

    ciento.onclick = function(){
        numero1 = resultado.textContent;
        operador = "%";
        resultado.textContent = "";
    }

    restar.onclick = function(){
        numero1 = resultado.textContent;
        operador = "-";
        resultado.textContent = "";
    }

    multiplicar.onclick = function(){
        numero1 = resultado.textContent;
        operador = "*";
        resultado.textContent = "";
    }

    dividir.onclick = function(){
        numero1 = resultado.textContent;
        operador = "/";
        resultado.textContent = "";
    }

    igual.onclick = function(){
        numero2 = resultado.textContent;
        resultado.textContent = "";
        final();
    }

    borraruno.onclick = function(){
        var borrar2 = resultado.textContent;
        resultado.textContent = borrar2.slice(0, -1);
    }

    uno.onclick = function(){
        resultado.textContent += "1";
    }
    dos.onclick = function(){
        resultado.textContent += "2";
    }
    tres.onclick = function(){
        resultado.textContent += "3";
    }
    cuatro.onclick = function(){
        resultado.textContent += "4";
    }
    cinco.onclick = function(){
        resultado.textContent += "5";
    }
    seis.onclick = function(){
        resultado.textContent += "6";
    }
    siete.onclick = function(){
        resultado.textContent += "7";
    }
    ocho.onclick = function(){
        resultado.textContent += "8";
    }
    nueve.onclick = function(){
        resultado.textContent += "9";
    }
    cero.onclick = function(){
        resultado.textContent += "0";
    }

    pi.onclick = function(){
        resultado.textContent = "3.14159265359";
    }

    borrar.onclick = function(){
        resultado.textContent = "";
    }

    pares.onclick = function(){
        numero1 = resultado.textContent;
        if(numero1 % 2 == 0){
            resultado.textContent = "PAR";  
        }
        else if(numero1 % 2 !== 0){ 
            resultado.textContent = "IMPAR";          
        }
        else{
            resultado.textContent = "NaN";
        }
    } 
    
    function limpiar(){
        resultado.textContent = "";
    }

    function reconstruir(){
        operador = "";
        numero1 = 0;
        numero2 = 0;
    }

    function final(){
        var final = 0;
        switch(operador){
            case "+":
                final = parseInt(numero1) + parseInt(numero2);
                break;
            case "-":
                final = parseInt(numero1) - parseInt(numero2);
                break;
            case "*":
                final = parseInt(numero1) * parseInt(numero2);
                break;
            case "/":
                final = parseInt(numero1) / parseInt(numero2);
                break;
            case "%":
                final = parseInt(numero2) * (numero1/100);
                break;
        }
        reconstruir();
        resultado.textContent = "";
        resultado.textContent = final;
        
    }

    
}


variables();