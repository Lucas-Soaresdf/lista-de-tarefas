// function chama ação do onclik
let tarefas = []
function adicionarTarefas() {



  //recebe valor do input do usuário
  let inputTarefa = document.getElementById('inputTarefa')
  let tarefa = inputTarefa.value.trim()

  if (tarefa === "") {
    let erro = "[ERRO] Adicione uma tarefa"
    document.getElementById('mensagem').textContent = erro
    
  } else {
    let mensagem = "Tarefa adicionada com sucesso";
    document.getElementById("mensagem").innerHTML = mensagem;
    tarefas.push(tarefa)
    redenrizarTarefas()

  }
  inputTarefa.value = ""
}

function redenrizarTarefas() {
  //cria novo item (li) e insere na lista (lista ul)
  let listaTarefas = document.getElementById('listaTarefas')
  listaTarefas.innerHTML = ""


  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement('li')
    novaTarefa.textContent = tarefas[i]
    //botao para remover tarefa
    let botaoRemover = document.createElement('button')
    novaTarefa.appendChild(botaoRemover)
    botaoRemover.className = 'remover'
    botaoRemover.textContent = 'Remover'
    botaoRemover.onclick = () => removerTarefa(i)
    //botao para editar tarefa
    let botaoEditar = document.createElement('button')
    novaTarefa.appendChild(botaoEditar)
    botaoEditar.className = 'editar'
    botaoEditar.textContent = 'Editar'
    botaoEditar.onclick = () => editarTarefa(i)



    listaTarefas.appendChild(novaTarefa)
  }
}
function removerTarefa(i) {
  tarefas.splice(i, 1)
  redenrizarTarefas()
  let apagarTarefa = 'Tarefa removida com sucesso!'
  document.getElementById('mensagem').textContent = apagarTarefa
}
function editarTarefa(i) {
    let tarefaEditada = prompt('Edite a tarefa: ')
    if (tarefaEditada.trim() !== ""){
      tarefas[i] = tarefaEditada
      redenrizarTarefas()
      let sucesso = 'Tarefa editada com sucesso!'
      document.getElementById('mensagem').textContent = sucesso
    } else {
        let erroEditar = '[ERRO] Edite sua tarefa'
        document.getElementById('mensagem').textContent = erroEditar
    }
}
function limparLista(){
  tarefas.length = 0
  redenrizarTarefas()
  let limparLista = 'Lista deletada com sucesso!'
  document.getElementById('mensagem').textContent = limparLista
}