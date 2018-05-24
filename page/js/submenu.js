$(document).ready(function(){
    $("#c_aluno").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_aluno.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'active';
        document.getElementById('menu_consulta').className = 'none';
        document.getElementById('c_aluno').className = 'active';
		document.getElementById('c_professor').className = 'none';
		document.getElementById('c_turma').className = 'none';
        document.getElementById('co_aluno').className = 'none';
        document.getElementById('co_professor').className = 'none';
        document.getElementById('co_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#c_professor").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_professor.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'active';
        document.getElementById('menu_consulta').className = 'none';
        document.getElementById('c_aluno').className = 'none';
        document.getElementById('c_professor').className = 'active';
        document.getElementById('c_turma').className = 'none';
        document.getElementById('co_aluno').className = 'none';
        document.getElementById('co_professor').className = 'none';
        document.getElementById('co_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#c_turma").click(function(){
    	document.getElementById('inicio').style.display = 'none';
		document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_turma.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'active';
        document.getElementById('menu_consulta').className = 'none';
        document.getElementById('c_aluno').className = 'none';
        document.getElementById('c_professor').className = 'none';
        document.getElementById('c_turma').className = 'active';
        document.getElementById('co_aluno').className = 'none';
        document.getElementById('co_professor').className = 'none';
        document.getElementById('co_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#co_aluno").click(function(){
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_aluno.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'none';
        document.getElementById('menu_consulta').className = 'active';
        document.getElementById('c_aluno').className = 'none';
        document.getElementById('c_professor').className = 'none';
        document.getElementById('c_turma').className = 'none';
        document.getElementById('co_aluno').className = 'active';
        document.getElementById('co_professor').className = 'none';
        document.getElementById('co_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#co_professor").click(function(){
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_professor.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'none';
        document.getElementById('menu_consulta').className = 'active';
        document.getElementById('c_aluno').className = 'none';
        document.getElementById('c_professor').className = 'none';
        document.getElementById('c_turma').className = 'none';
        document.getElementById('co_aluno').className = 'none';
        document.getElementById('co_professor').className = 'active';
        document.getElementById('co_turma').className = 'none';
    });
});

$(document).ready(function(){
    $("#co_turma").click(function(){
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("cadastrar_turma.html");
        document.getElementById('menu_inicio').className = 'none';
        document.getElementById('menu_cadastro').className = 'none';
        document.getElementById('menu_consulta').className = 'active';
        document.getElementById('c_aluno').className = 'none';
        document.getElementById('c_professor').className = 'none';
        document.getElementById('c_turma').className = 'none';
        document.getElementById('co_aluno').className = 'none';
        document.getElementById('co_professor').className = 'none';
        document.getElementById('co_turma').className = 'active';
    });
});

$(document).ready(function(){
    $("#menu_turma").click(function(){
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('conteudo').style.display = 'block';
        $("#conteudo").load("turma.html");
    });
});