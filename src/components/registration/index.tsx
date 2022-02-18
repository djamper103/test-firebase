import React, {FC, useContext} from 'react';
import {Form} from '../form';
import style from './index.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from '../../index'


export const Registration: FC = () => {

  const {auth} = useContext(Context)
  const navigate = useNavigate();

  const signup = async (email:string, password:string) => {
    await auth.createUserWithEmailAndPassword(email, password)
    navigate("/")
  }

  return (
    <div className={style.container}>
      <div className={style.containerMain}>
          <div className={style.placeholder}>Create account</div>
          <Form onSubmitForm={signup} buttonName={"Create account"}/>
          <div className={style.containerButton}>
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
    </div>
  );
};

