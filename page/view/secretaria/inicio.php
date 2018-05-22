<html>
	<head>
		<title>Início</title>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="../../includ/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="../../css/size.css">
		<link rel="stylesheet" type="text/css" href="../../css/color.css">
		<link rel="stylesheet" type="text/css" href="../../css/position.css">
		<link rel="stylesheet" type="text/css" href="../../css/style.css">
		<script type="text/javascript" src="../../js/menu.js"></script>
	</head>
	<body>
		<ul class="sidenav">
		  <li><a class="active" id="menu_inicio" onclick='troca_tela("inicio")'>Início</a></li>
		  
		  <li><a id="menu_cadastro" onclick='troca_tela("cadastro")'>Cadastro</a></li>

		  <div id="submenu" class="esconder">
		  	<li><a id="c_aluno" onclick='troca_tela("c_aluno")'>Aluno</a></li>
		  	<li><a id="c_professor" onclick='troca_tela("c_professor")'>Professor</a></li>
		  	<li><a id="c_turma" onclick='troca_tela("c_turma")'>Turma</a></li>
		  </div>

		  <li><a>Sair</a></li>
		</ul>

		<div class="content exibir" id="inicio">
			inicio
		</div>
		<div class="content esconder" id="conteudo"></div>
	</body>
</html>