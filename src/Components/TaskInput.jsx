import style from './TaskInput.module.css'
import { useState } from 'react'

const TaskInput = ({ onAddTask }) => {

    const [input, setImput] = useState("");
    //função chamada pelo form onSubmit que irá enviar o conteúdo do input para o APP.jsx <TaskInput /> 
    const handleSubmit = (e) =>{
        //para não enviar o formulário até as validações. 
        e.preventDefault();
        //input.trim() - retira os espaços vazios
        if(input.trim()){
            onAddTask(input);
            //limpa o input
            setImput("");
        }
    } 

    return (
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                className={style}  
                value={input} 
                onChange={(e) => setImput(e.target.value)} 
                placeholder="Digite uma nova tarefa"
            />
            
            <button type="submit">Confirmar</button>

        </form>
    )
}

export default TaskInput

