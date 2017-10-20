//Función general que retraza el inicio del cambio de color del titulo
$(function() {
	//alert( "Ha ocurrido document.ready: documento listo" );
	$("#titulo").delay(5000);
	cambiaColorT1($("#titulo"));
 });

 //Primer color a asignar al titulo
function cambiaColorT1(elemento){
  $(elemento).animate(
    {
      color: "yellow"
    }, 200, function(){
      cambiaColorT2(elemento)
    }
  )
}
//Segundo color a asignar al titulo
function cambiaColorT2(elemento){
  $(elemento).animate(
    {
      color: "red"
    }, 200, function(){
      cambiaColorT1(elemento)
    }
  )
}

