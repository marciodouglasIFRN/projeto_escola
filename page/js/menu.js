function troca_tela(tela) {
	switch(tela) {
		case 'inicio':
			document.getElementById('inicio').style.display = 'block';
			document.getElementById('conteudo').style.display = 'none';
			active('inicio');
		break;
		case 'cadastro':
			active('cadastro');
			if(document.getElementById('submenu').style.display == 'block') {
				document.getElementById('submenu').style.display = 'none';
			} else {
				document.getElementById('submenu').style.display = 'block';
			}
			
		break;
	}
}
function active(item_menu) {
	switch(item_menu) {
		case 'inicio':
			document.getElementById('menu_inicio').className = 'active';
			document.getElementById('menu_cadastro').className = 'none';
		break;
		case 'cadastro':
			document.getElementById('menu_inicio').className = 'none';
			document.getElementById('menu_cadastro').className = 'active';
		break;
	}
}

document.getElementById('conteudo').innetHTML = '<?php include_once "cadastrar_aluno.php;"?>';