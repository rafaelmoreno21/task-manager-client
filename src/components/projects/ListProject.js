import React,{useContext,useEffect} from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import {TransitionGroup,CSSTransition} from 'react-transition-group'
const ListProject = () => {

    //Extract project state init
    const projectsContext=useContext(projectContext);
    const {projects,getProject}=projectsContext;

    useEffect(()=>{
        getProject();

        // eslint-disable-next-line


    },[]);

    //check projects so that it is not empty
    if(projects.length===0) return <p>There are no projects, start by creating one</p>;
    
    

    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project=>(
                <CSSTransition
                    key={project.id}
                    timeout={200}
                    classNames="proyecto"
                >
                <Project
                    project={project}
                />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ListProject;