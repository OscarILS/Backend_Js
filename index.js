const parrafoInicial = document.getElementById("parrafoinicial");


console.log(parrafoInicial);

parrafoInicial.onclick = function(){
  cambiaColorAleatorio();
}

function cambiaColorAleatorio(){

  const colores = [
    "red",
    "blue",
    "black",
    "cyan"
  ] 

  parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)];

}











/*
  TIPOS DE DATOS
  var -> Modificable, scope global (se elimina al final- cerrarse) - NO SE RECOMIENDA
  let -> Modificable, scope limitado (se muere después de utilizarse) - RECOMENDADA USAR 
  const -> No modificable, scope global 
*/



//Variable     = atributo .funcion()

/*
  CASES 

    PascalCase - Clases -JAVA
    
    camelCase - variables, funciones, atributos  - JavaScript

      Variable => parrafoInicial
      Funcion  => getElementBtId
      Atributo => document.

    snake_case - Python,  JavaScript
      variables y funciones


    CASE - Constante

 */

