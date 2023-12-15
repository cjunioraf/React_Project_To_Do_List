import Task from "./Task"
import style from './TaskList.module.css'

const TaskList = ({tasks, onRemoveTask, onAlterStatus}) => {

    if(tasks.length === 0){
        return <p>Não há tarefa cadastrada!</p>
    }

    return (        
        <>            
            <ul className={style}>            
                {tasks.map((task) => (
                    <Task key={task.id} 
                        task={task} 
                        onRemoveTask={() => onRemoveTask(task.id)} 
                        onAlterStatus={() => onAlterStatus(task.id)}
                    />
                ))}
            </ul>
        </>                    
    )
}

export default TaskList