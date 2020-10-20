import React,{useContext,useState,useEffect} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';
const FormTask = () => {

    const projectsContext=useContext(projectContext);
    const {project}=projectsContext;

    const tasksContext=useContext(taskContext);
    const {taskselect,errortask,addTask,validateTask,getTask,updateTask,cleanTask}=tasksContext;

    useEffect(()=>{
        if(taskselect !==null){
            saveTask(taskselect)
        }else{
            saveTask({
                name:''
            })
        }
    },[taskselect])


    const [task,saveTask]=useState({
        name:'',

    })

    const {name}=task;


     //Do not project select
     if(!project) return null;

     //Array destructuring extract project actual
 
     const [projectActual]=project;


    const handleChange = e =>{
        saveTask({
            ...task,
            [e.target.name]:e.target.value
        })
    }

     const onSubmit = e =>{
         e.preventDefault();

         //Validate
         if(name.trim()===''){
            validateTask();
            return;
         }

         //Edit or New Task
         if(taskselect===null){
             //New Task
            task.projectId=projectActual.id;
            task.state=false
            addTask(task);
         }else{
             //Update task
            updateTask(task);

            cleanTask();
         }

        //Get and filters task
        getTask(projectActual.id);

        saveTask({
            name:''
        })


     }


    return (  
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >


                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Name Task..."
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={taskselect ? 'Edit Task':'"Add Task"'}
                    />
                </div>
            </form>
            {errortask ? <p className="mensaje error">The field is required</p> : null}
        </div>
    );
}
 
export default FormTask;
