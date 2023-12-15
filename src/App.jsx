import TaskInput from './Components/TaskInput'
import TaskList from './Components/TaskList'

import { useState, useEffect } from 'react'

function App() {
  
  const [tasks, setTasks] = useState([]);

  

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
