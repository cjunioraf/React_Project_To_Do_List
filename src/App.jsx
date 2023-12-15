import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'

import { useState, useEffect } from 'react'

function App() {
  //seta o array "tasks" com o que tem no localstorege (db), converte scring em array com o JSON.parse ou array vazio [] 
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  //LOCALSTORAGE - USO O USEFFECT - SEMPRE QUE MUDAR O CONTEÚDO DO OBJ ELE IRÁ   
  useEffect(() => {
    //JSON.stringify - transforma o array em string
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks]); //controle pela tasks 

  //função para add tasks CAMPOS DO OBJ -> text - vem do formulário (input) / id - criar um ID / status - se está concluido ou não a task.  
  const addTask = (task) => {
    //preciso add uma nova tarefa no array sem perder as já inseridas, POR ISSO faço o SPREAD, tras todas as informações que já estão no array, exemplo simples abaixo, 
    //"...tasks" -> const numbers = [1, 2, 3]; console.log(...numbers);
    //[] <- array / {} <- objeto
    setTasks([...tasks, {id: Date.now(), text: task, status: false}]);
    //localStorage - grava a informação na localStorage / A LINHA ABAIXO FOI COMENTADA POIS O USEEFFCT ESTÁ MONITORANDO A INCLUSÃO
    //NÃO TERIA PROBLEMA DE DEIXAR A LINHA ABAIXO 
    //localStorage.setItem("tasks", JSON.stringify(tasks));
  } 
  //função para remover as tasks
  const removeTask = (taskId) =>{
    //estou dizendo (FILTER) que as tarefas que iram permanecer são todas as diferente do taskid que estou removendo
    //console.log(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));    
    //localStorage - grava a informação na localStorage / A LINHA ABAIXO FOI COMENTADA POIS O USEEFFCT ESTÁ MONITORANDO A REMOÇÃO, 
    //NÃO TERIA PROBLEMA DE DEIXAR A LINHA ABAIXO 
    //localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const alterStatus = (taskId) => {
    //console.log(taskId);    
    //console.log(`alterar o status da taskid: ${taskId}`);      
    //preciso mudar o status do objeto, estão utilizo o MAP, procuro o que tem o mesmo ID e mudo de FALSE para TRUE, os que forem de ID diferente não modifico ": (task)" 
    setTasks(tasks.map((task) => taskId === task.id ? ({...task, status: !task.status}) : (task)))      
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>      
      <div>        
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} onAlterStatus={alterStatus}/>
        {/* {tasks.length === 0 && <p>Não há Tarefas cadastradas!</p> } */}
      </div>
    </>
  )
}

export default App
