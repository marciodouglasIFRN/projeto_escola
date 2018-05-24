$(document).ready(function(){
    $("#c_aluno").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_aluno.html");
        document.getElementById('c_aluno').className = 'active';
		document.getElementById('c_professor').className = 'none';
		document.getElementById('c_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#c_professor").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_professor.html");
        document.getElementById('c_aluno').className = 'none';
		document.getElementById('c_professor').className = 'active';
		document.getElementById('c_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#c_turma").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_turma.html");
        document.getElementById('c_aluno').className = 'noce';
		document.getElementById('c_professor').className = 'none';
		document.getElementById('c_turma').className = 'active';
    });
});