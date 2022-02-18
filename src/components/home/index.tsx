import React, {FC, useContext} from 'react';
import style from './index.module.css'
import {Login} from '../login';
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'


export const Home: FC = () => {

  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return (
    <div className={style.container}>
        {
          user ?
          <div>Home</div>:
          <Login/>
        }
    </div>
  );
};

