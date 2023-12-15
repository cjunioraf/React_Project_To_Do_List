import style from './Task.module.css'

const Task = ({task, onRemoveTask, onAlterStatus}) => {
  return (
    <li className={style} key={task.id} >
      {/* STYLE MOSTRAR COM UM RISCO NO MEIO DA PALAVRA QUANDO O STATUS ESTIVER CONCLUÍDO TRUE, USAREI JS DENTRO DA PROPRIEDADE STYLE USANDO O TEXTDECORATION NO OBJETO */}
      <span 
          onClick={onAlterStatus} 
          style={{textDecoration: task.status ? ("line-through") : ("none") }} >{task.text}          
      </span>          
      {/* <button onClick={() => onRemoveTask(task.id)}>Remover</button> */}
      <button onClick={onRemoveTask}>Remover</button>      
    </li>
  )  
}

export default Task