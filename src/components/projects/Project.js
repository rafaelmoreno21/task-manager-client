import React,{useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/task/taskContext';
const Project = ({project}) => {

    const projectsContext=useContext(projectContext);
    const {projectActual}=projectsContext;

    const tasksContext=useContext(taskContext);
    const {getTask}=tasksContext

    //Function add project actual
    const selectProject = id =>{
        projectActual(id); 
        getTask(id);
    }

    return ( 
        <li>
            <button
            type="button"
            className="btn btn-blank"
            onClick={()=>selectProject(project.id)}
        >{project.name}</button>
        </li>
     );
}
 
export default Project;