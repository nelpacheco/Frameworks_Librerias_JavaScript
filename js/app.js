document.observe("dom:loaded", function(){
	cambiaColorT.delay(5);
	$('titulo').observe('change', cambiaColorT);
})

function cambiaColorT(){
	titulo.addClassName('activo');
	cambiaColorT2.delay(2);
}

function cambiaColorT2(){
	titulo.addClassName('activo2');
	cambiaColorT.delay(2);
}
