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
		  <li><a id="menu_inicio" onclick='troca_tela("inicio")'>Início</a></li>
		  <li><a id="menu_cadastro" onclick='troca_tela("cadastro")'>Cadastro</a></li>
		  <li><a id="menu_sair" onclick='troca_tela("sair")'>Sair</a></li>
		</ul>

		<div class="content" id="inicio" style="display: none;">
		  <h2>Responsive Sidenav Example</h2>
		  <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
		  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
		</div>
		<div class="content" id="cadastro" style="display: none;">
		  <h2>Responsive Sidenav Example</h2>
		</div>
		<div class="content" id="sair" style="display: none;">
		  <p>This example use media queries to transform the sidenav to a top navigation bar when the screen size is 900px or less.</p>
		  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
		  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
		  <h3>Resize the browser window to see the effect.</h3>
		</div>
	</body>
</html>