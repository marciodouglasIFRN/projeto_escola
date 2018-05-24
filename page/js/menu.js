function troca_tela_secretaria(tela) {
	switch(tela) {
		case 'inicio':
			document.getElementById('inicio').style.display = 'block';
			document.getElementById('conteudo').style.display = 'none';
			document.getElementById('menu_inicio').className = 'active';
			document.getElementById('submenu_cadastro').style.display = 'none';
			document.getElementById('submenu_cadastro').className = 'none';
			document.getElementById('menu_cadastro').className = 'none';
			document.getElementById('c_aluno').className = 'none';
			document.getElementById('c_professor').className = 'none';
			document.getElementById('c_turma').className = 'none';
			document.getElementById('submenu_consulta').style.display = 'none';
			document.getElementById('submenu_consulta').className = 'none';
			document.getElementById('menu_consulta').className = 'none';
			document.getElementById('co_aluno').className = 'none';
			document.getElementById('co_professor').className = 'none';
			document.getElementById('co_turma').className = 'none';
		break;
		case 'cadastro':
			if(document.getElementById('submenu_cadastro').style.display == 'block') {
				document.getElementById('submenu_cadastro').style.display = 'none';
			} else {
				document.getElementById('submenu_cadastro').style.display = 'block';
			}
		break;
		case 'consulta':
			if(document.getElementById('submenu_consulta').style.display == 'block') {
				document.getElementById('submenu_consulta').style.display = 'none';
			} else {
				document.getElementById('submenu_consulta').style.display = 'block';
			}
		break;
	}
}

function troca_tela_professor(tela) {
	switch(tela) {
		case 'inicio':
			document.getElementById('inicio').style.display = 'block';
			document.getElementById('conteudo').style.display = 'none';
			document.getElementById('menu_inicio').className = 'active';
			document.getElementById('menu_turma').className = 'none';
			document.getElementById('menu_mudar_senha').className = 'none';
		break;
		case 'turma':
			document.getElementById('inicio').style.display = 'none';
			document.getElementById('conteudo').style.display = 'block';
			document.getElementById('menu_inicio').className = 'none';
			document.getElementById('menu_turma').className = 'active';
			document.getElementById('menu_mudar_senha').className = 'none';
		break;
	}
}



