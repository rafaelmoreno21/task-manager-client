import React,{useReducer} from 'react';
import projectContext from './projectContext';
import projectReducer from './projectsReducer';
import {
    FORM_PROJECT, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    PROJECT_ACTUAL,
    DELETE_PROJECT
} from '../../types';
import { v4 as uuidv4 } from 'uuid';


const ProjectState= props => {

    
const projects=[
    {id:1,name:'Tienda virtual'},
    {id:2,name:'Airtek'},
    {id:3,name:'Oficial'},
    {id:4,name:'MERN'},
]

    const initialState = {
        projects:[],
        form:false,
        errorform:false,
        project:null
    }

    //Dispatch

    const [state,dispatch]=useReducer(projectReducer,initialState)

    //function CRUD

    const showForm= ()=>{
        dispatch({
            type: FORM_PROJECT
        })
    }


    //Get projects

    const getProject=()=>{
        dispatch({
            type:GET_PROJECTS,
            payload:projects
        })
    }

    //Add new project
    const addProject=project=>{
        project.id=uuidv4();

        //Insert in the state
        dispatch({
            type:ADD_PROJECT,
            payload:project
        })

    }

    const showError= ()=>{
        dispatch({
            type:VALIDATE_FORM
        })
    }

    const projectActual= projectId=>{
        dispatch({
            type:PROJECT_ACTUAL,
            payload:projectId
        })
    }

    //Delete project
    const deleteProject= projectId =>{
        dispatch({
            type:DELETE_PROJECT,
            payload:projectId
        })
    }


    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                errorform:state.errorform,
                project:state.project,
                showForm,
                getProject,
                addProject,
                showError,
                projectActual,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;