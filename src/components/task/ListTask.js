import React,{Fragment,useContext} from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

const ListTask = () => {
    const projectsContext=useContext(projectContext);
    const {project,deleteProject}=projectsContext;

    const tasksContext=useContext(taskContext);
    const {tasksproject}=tasksContext


    //Do not project select
    if(!project) return <h2>Select a project</h2>

    //Array destructuring extract project actual

    const [projectActual]=project;

 

    //Delete project
    const onClickDelete= () =>{
        deleteProject(projectActual.id);
    }

    return (  
        <Fragment>
            <h2>Project: {projectActual.name}</h2>
            <ul className="listado-tareas">
                {tasksproject.length===0
                    ? (<li className="tarea"><p>No task</p></li>)
                    :   
                    <TransitionGroup>
                         {tasksproject.map(task => (
                          <CSSTransition
                            key={task.id}
                            timeout={200}
                            classNames="tarea"
                          >
                            <Task
                           task={task}
                           /> 
                          </CSSTransition>
                        ))}
                    </TransitionGroup>
                   
                }
                 <button 
                    type="button"
                    className="btn btn-eliminar"
                    onClick={onClickDelete}
            >Delete Project &times;</button>
            </ul>

           
        </Fragment>
    );
}
 
export default ListTask;
