﻿yu = function (id) { return document.getElementById(id); }
	if (sessionStorage) {
		if (sessionStorage['visitas'] == undefined) {
			sessionStorage['visitas'] = 0;
		} var n = parseInt(sessionStorage['visitas']); sessionStorage['visitas'] = 1 + n;
		var num = sessionStorage['visitas'];
		var mensaje = "Hasta ahora has visitado mi pagina " + num + " Veces";
		 /*Parte Jquery*/
        $("#cuentavisitas").text('Has visitado ' + num + ' páginas del sitio');
}

sessionStorage.setItem("Actualidad","Actualidad");
$(Actualidad).text('Está visitando la página: '+sessionStorage.getItem("Actualidad"));
