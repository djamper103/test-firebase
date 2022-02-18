import React, {FC, useContext} from 'react';
import style from './index.module.css'
import firebase from 'firebase/compat/app';
import {Form} from '../form';
import {NavLink, useNavigate} from 'react-router-dom';
import {Context} from '../../index'


export const Login: FC = () => {

    const {auth} = useContext(Context)
    const navigate = useNavigate();

    const loginGoogle = async () =>{
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
        navigate("/")
    }

    const login = async (email:string, password:string) =>{
        await auth.signInWithEmailAndPassword(email, password)
        navigate("/")
    }

  return (
    <div className={style.container}>
      <div className={style.containerMain}>
        <div className={style.placeholder}>Sing in</div>
          <Form onSubmitForm={login} buttonName={"Sign in"}/>
          <div className={style.containerFooter}>
            <button onClick={loginGoogle}>Sing with Google</button>
            <NavLink to="/registration">Create account</NavLink>
          </div>
        </div>
    </div>
  );
};

