function troca_tela(tela) {
	switch(tela) {
		case 'inicio':
			document.getElementById('inicio').style.display = 'block';
			document.getElementById('cadastro').style.display = 'none';
			document.getElementById('sair').style.display = 'none';
			active('inicio');
		break;
		case 'cadastro':
			document.getElementById('inicio').style.display = 'none';
			document.getElementById('cadastro').style.display = 'block';
			document.getElementById('sair').style.display = 'none';
			active('cadastro');
		break;
		case 'sair':
			document.getElementById('inicio').style.display = 'none';
			document.getElementById('cadastro').style.display = 'none';
			document.getElementById('sair').style.display = 'block';
			active('sair');
		break;
	}
}
function active(item_menu) {
	switch(item_menu) {
		case 'inicio':
			document.getElementById('menu_inicio').className = 'active';
			document.getElementById('menu_cadastro').className = 'none';
			document.getElementById('menu_sair').className = 'none';
		break;
		case 'cadastro':
			document.getElementById('menu_inicio').className = 'none';
			document.getElementById('menu_cadastro').className = 'active';
			document.getElementById('menu_sair').className = 'none';
		break;
		case 'sair':
			document.getElementById('menu_inicio').className = 'none';
			document.getElementById('menu_cadastro').className = 'none';
			document.getElementById('menu_sair').className = 'active';
		break;
	}
}