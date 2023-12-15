import Task from "./Task"
import style from './TaskList.module.css'

const TaskList = () => {

    return (
        <ul className={style}>
            <Task />
            <Task />
            <Task />
        </ul>
    )
}

export default TaskList