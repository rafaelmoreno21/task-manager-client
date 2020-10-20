import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext=useContext(projectContext);
    const {form,errorform,showForm,addProject,showError}=projectsContext;

    const [project,saveProject]=useState({
        name:''
    });

    const {name}=project;

    


    const onChangeProject= e =>{
        saveProject({
            ...project,
            [e.target.name]:e.target.value
        })
    }

    const onSubmitProject=e =>{
        e.preventDefault();

        if(name===''){
            showError();
            return;
        }

        addProject(project)

        saveProject({
            name:''
        })
        
    }

    const onClickForm= ()=>{
        showForm();
    }

    return (  
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
            onClick={onClickForm}
        >New Project</button>
       {
           form ? (
            <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProject}
            >
            <input
            type="text"
            className="input-text"
            placeholder="New Project"
            name="name"
            onChange={onChangeProject}
            value={name}
            />
            <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
            />
            </form>
           ) :null }

            {errorform ? <p className="mensaje error">The field is required</p>: null}

        </Fragment>
    );
}
 
export default NewProject;