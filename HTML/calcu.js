var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
const resetear = document.getElementsByName("borrar");
const igualar = document.getElementsByName("igual");
var actual = "";
var anterior= "";
var operacion= "";
var resultado= "";


teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        actual += tecla.innerText;
        pantalla[0].textContent = actual;
    });
});


operadores.forEach(function(operador) {
    operador.addEventListener("click", function() {
        anterior = actual;
        operacion = operador.innerText;
        actual = "";
    });
});

igualar.forEach(function(igual) {
    igual.addEventListener("click", function() {
        actual = pantalla[0].textContent;
        pantalla[0].textContent = "";
        if(operacion == "+") resultado= "" + (parseFloat(anterior)+parseFloat(actual)) ;
        if(operacion == "-") resultado = "" + (parseFloat(anterior)-parseFloat(actual)) ;
        if(operacion == "*") resultado = "" + (parseFloat(anterior)*parseFloat(actual)) ;
        if(operacion == "/") resultado = "" + (parseFloat(anterior)/parseFloat(actual)) ;
        
    
    
    
        pantalla[0].textContent = resultado
    });
});

resetear.forEach(function(borrar) {
    borrar.addEventListener("click", function() {
        pantalla[0].textContent = "";
        actual=""
        anterior=""

    });
});
