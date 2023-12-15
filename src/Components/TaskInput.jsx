import style from './TaskInput.module.css'

const TaskInput = () => {

    return (
        <form>
            <input className={style} type="text" placeholder="Digite uma nova tarefa"/>
            <button type="submit">Confirmar</button>
        </form>
    )
}

export default TaskInput



// <input type="text" 
// value={value} 
// onChange={(e) => {setValue(e.target.value)}} 
// placeholder='Preencha o campo' 
// />        
// {/* AQUI NO EVENTO CLICK DO BOTÃO CHAMA O ONSUBMIT DA TAG FORM  */}
// <button type='submit'>Enviar Form</button>