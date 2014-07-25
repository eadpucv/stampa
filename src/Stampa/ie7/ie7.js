/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Stampa\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icn-parlante': '&#xe602;',
		'icn-lentes': '&#xe60a;',
		'icn-youtube': '&#xe61b;',
		'icn-libro': '&#xe61c;',
		'icn-cruz-sur': '&#xe606;',
		'icn-menu': '&#xe678;',
		'icn-perfil': '&#xe675;',
		'icn-tablet': '&#xe674;',
		'icn-pc': '&#xe676;',
		'icn-movil': '&#xe677;',
		'icn-estorninos': '&#xe679;',
		'icn-usuario': '&#xe63a;',
		'icn-usuarios': '&#xe66e;',
		'icn-usuario-menos': '&#xe66f;',
		'icn-usuario-mas': '&#xe670;',
		'icn-admin': '&#xe673;',
		'icn-prohibir': '&#xe671;',
		'icn-bower': '&#xe672;',
		'icn-vimeo': '&#xe620;',
		'icn-stampa': '&#xe621;',
		'icn-soundcloud': '&#xe622;',
		'icn-anuncio': '&#xe623;',
		'icn-less': '&#xe625;',
		'icn-jekyll': '&#xe626;',
		'icn-flickr': '&#xe627;',
		'icn-caron-der': '&#xe629;',
		'icn-camara': '&#xe62c;',
		'icn-burbuja': '&#xe62d;',
		'icn-subir': '&#xe619;',
		'icn-circulo': '&#xe618;',
		'icn-mano-der': '&#xe60b;',
		'icn-cuadro-l': '&#xe612;',
		'icn-circulo-l': '&#xe614;',
		'icn-vineta': '&#xe62f;',
		'icn-vinculo': '&#xe630;',
		'icn-twitter': '&#xe631;',
		'icn-trabajo': '&#xe632;',
		'icn-tiempo': '&#xe633;',
		'icn-ese': '&#xe635;',
		'icn-salir': '&#xe636;',
		'icn-rss': '&#xe637;',
		'icn-reloj': '&#xe638;',
		'icn-refrescar': '&#xe639;',
		'icn-parrafo': '&#xe63b;',
		'icn-orden-ver': '&#xe63c;',
		'icn-orden-hor': '&#xe63d;',
		'icn-ojo': '&#xe63e;',
		'icn-noticias': '&#xe63f;',
		'icn-marcador': '&#xe640;',
		'icn-mapa': '&#xe641;',
		'icn-mapa-conceptual': '&#xe642;',
		'icn-mapa-mas': '&#xe643;',
		'icn-lupa': '&#xe646;',
		'icn-lupa-menos': '&#xe647;',
		'icn-lupa-mas': '&#xe648;',
		'icn-lapiz': '&#xe649;',
		'icn-ingresar': '&#xe64a;',
		'icn-impresora': '&#xe64b;',
		'icn-imagen': '&#xe64c;',
		'icn-hogar': '&#xe64d;',
		'icn-hedera': '&#xe64e;',
		'icn-grafico': '&#xe64f;',
		'icn-flecha-der': '&#xe650;',
		'icn-facebook': '&#xe651;',
		'icn-etiqueta': '&#xe652;',
		'icn-estrella': '&#xe653;',
		'icn-equis': '&#xe654;',
		'icn-enlace': '&#xe655;',
		'icn-enlace-hor': '&#xe656;',
		'icn-engranaje': '&#xe657;',
		'icn-email': '&#xe658;',
		'icn-documento': '&#xe659;',
		'icn-descargar': '&#xe65a;',
		'icn-cuadro': '&#xe65b;',
		'icn-mas': '&#xe65c;',
		'icn-menos': '&#xe61a;',
		'icn-corazon': '&#xe65d;',
		'icn-constel': '&#xe65e;',
		'icn-compartir': '&#xe65f;',
		'icn-codigo': '&#xe660;',
		'icn-clip': '&#xe661;',
		'icn-ciclo': '&#xe662;',
		'icn-casiopea': '&#xe663;',
		'icn-cerrado': '&#xe664;',
		'icn-abierto': '&#xe665;',
		'icn-calendario': '&#xe666;',
		'icn-biblioteca': '&#xe667;',
		'icn-asterisco': '&#xe668;',
		'icn-archivo': '&#xe669;',
		'icn-ampolleta': '&#xe66a;',
		'icn-alarma': '&#xe66b;',
		'icn-aviso': '&#xe66c;',
		'icn-acto': '&#xe66d;',
		'icn-travesia': '&#xe600;',
		'icn-nav-der': '&#xe601;',
		'icn-visto': '&#xe62e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icn-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
