import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const NewAccount = () => {

    const [user,saveUser]=useState({
        
        name:'',
        email:'',
        password:'',
        confirm:''
    })

    const {name,email,password,confirm}=user;


    const onChange = e =>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit=e =>{
        e.preventDefault();

        


    }


    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Sign up</h1>
                <form
                onSubmit={onSubmit}
                >
                      <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        placeholder="Confirm Password"
                        value={confirm}
                        onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Sign up"
                        />
                    </div>


                </form>
                <Link to="/" className="enlace-cuenta">
                Do you already have an account?
                </Link>
            </div>
        </div>
    );
}
 
export default NewAccount;