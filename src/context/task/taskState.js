import React,{useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    TASK_PROJECT,
    ADD_TASK,
    VALIDATE_TASK,
    ELMINATE_TASK,
    STATE_TASK,
    TASK_ACTUAL,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props =>{
    const initialState = {
        tasks: [
            { id: 1, name: 'Elegir Plataforma', state: true, projectId: 1},
            { id: 2, name: 'Elegir Colores', state: false, projectId: 2},
            { id: 3, name: 'Elegir Plataformas de pago', state: false, projectId: 3},
            { id: 4, name: 'Elegir Hosting', state: true, projectId: 4},
            { id: 5, name: 'Elegir Plataforma', state: true, projectId: 1},
            { id: 6, name: 'Elegir Colores', state: false, projectId: 2},
            { id: 7, name: 'Elegir Plataformas de pago', state: false, projectId: 3},
            { id: 8, name: 'Elegir Plataforma', state: true, projectId: 4},
            { id: 9, name: 'Elegir Colores', state: false, projectId: 1},
            { id: 10, name: 'Elegir Plataformas de pago', state: false, projectId: 2},
            { id: 11, name: 'Elegir Plataforma', state: true, projectId: 3},
            { id: 12, name: 'Elegir Colores', state: false, projectId: 4},
            { id: 13, name: 'Elegir Plataformas de pago', state: false, projectId: 3}
        ],
        tasksproject:null,
        errortask:false,
        taskselect:null
    }

    const [state,dispatch]=useReducer(TaskReducer,initialState);


    //Create function

    //Get Task projects
    
    const getTask=projectId =>{
        dispatch({
            type:TASK_PROJECT,
            payload:projectId
        })
    };

    const addTask= task=>{
        task.id=uuidv4();
        dispatch({
            type:ADD_TASK,
            payload:task
        })
    }

    const validateTask= ()=>{
        dispatch({
            type:VALIDATE_TASK
        })
    }

    //Delete task for id

    const deleteTask = id => {
        dispatch({
            type: ELMINATE_TASK,
            payload: id
        })
    }

    const updateTask=task=>{
        dispatch({
            type:UPDATE_TASK,
            payload:task
        })
    }

    const changeStateTask= task=>{
        dispatch({
            type:STATE_TASK,
            payload:task
        })
    }

    const saveTaskActual=task=>{
        dispatch({
            type:TASK_ACTUAL,
            payload:task
        })
    }

    const cleanTask= ()=>{
        dispatch({
            type:CLEAN_TASK
        })
    }


    return (
        <TaskContext.Provider
            value={{
                tasks:state.tasks,
                tasksproject:state.tasksproject,
                errortask:state.errortask,
                taskselect:state.taskselect,
                getTask,
                addTask,
                validateTask,
                deleteTask,
                changeStateTask,
                saveTaskActual,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}


export default TaskState;