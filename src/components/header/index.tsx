import React, {FC, useContext} from 'react';
import {NavLink} from 'react-router-dom';
import style from './index.module.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'


export const Header: FC = () => {

  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  const sign = () =>{
    auth.signOut()
  }

  return (
    <>
      {
        user && 
        <div className={style.container}>
            <NavLink to="/home">Home</NavLink>
            <button onClick={sign}>Sign</button>
        </div>
      }
    </>
  );
};
