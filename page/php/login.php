<?php
	
	$matricula = $_POST['matricula'];
	$senha = $_POST['senha'];

	if(($matricula == "123@123") && ($senha== "123")) {
		header('Location: ../view/secretaria/inicio.html');
	} else if(($matricula == "321@321") && ($senha== "321")) {
		header('Location: ../view/professor/inicio.html');
	}
?>