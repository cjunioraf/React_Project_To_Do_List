import style from './Task.module.css'

const Task = () => {
  return (
    <li className={style}>
      <span>Texto da tarefa</span>    
      <button>Remover</button>
    </li>
  )
}

export default Task