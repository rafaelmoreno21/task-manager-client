import React,{useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';

const Task = ({task}) => {

    const projectsContext=useContext(projectContext);
    const {project}=projectsContext;


    const tasksContext=useContext(taskContext);
    const {deleteTask,getTask,changeStateTask,saveTaskActual}=tasksContext;

    const [projectActual]=project;

    const taskDelete= id =>{
        deleteTask(id);
        getTask(projectActual.id)
    }

    const changeState= task =>{
        if(task.state){
            task.state=false;
        }else{
            task.state=true;
        }
        changeStateTask(task);
    }

    const selectTask = task=>{
        saveTaskActual(task)
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.state 
                ? 
                    (
                        <button 
                        type="button" 
                        className="completo"
                        onClick={()=>changeState(task)}
                        >Complete</button>
                    )
                :
                (
                    <button 
                    type="button" 
                    className="incompleto"
                    onClick={()=>changeState(task)}
                    >Incomplete</button>
                )
                }
            </div>
            <div className="acciones">
                <button 
                type="button" 
                className="btn btn-primario"
                onClick={()=>selectTask(task)}
                >Edit</button>
                <button 
                type="button" 
                className="btn btn-secundario"
                onClick={() => taskDelete(task.id)}
                >Delete</button>
            </div>
        </li>
     );
}
 
export default Task;