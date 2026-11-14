var tarefa = document.getElementById ("taskInput");
var BotaoTarefa = document.getElementById ("addTaskBtn");
var lista = document.getElementById ("taskList");
BotaoTarefa.addEventListener ("click", CriarTarefa);

function CriarTarefa () {
    if (tarefa.value == "") {
        alert ("Configure uma tarefa");
    }
    else {
        var li = document.createElement ("li");
        var btnExcluir = document.createElement("button");
        li.innerHTML = tarefa.value;
        lista.appendChild(li);
        btnExcluir.innerHTML = "x"
        li.appendChild(btnExcluir);
        
        btnExcluir.addEventListener ("click", ExcluirTarefa);
        function ExcluirTarefa () {
            li.parentNode.removeChild(li);
        }
    }
}

