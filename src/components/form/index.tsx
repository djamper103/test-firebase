import React, {FC} from 'react';
import style from './index.module.css'
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
    email: string;
    password: string;
};

const schema = yup.object({
    strEmail: yup.string().email(),
    strPassword: yup.string(),
  }).required();

interface FormProps {
    onSubmitForm: (email:string, password:string) => void;
    buttonName: string;
}

export const Form: FC<FormProps> = ({onSubmitForm,buttonName}) => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => {
        onSubmitForm(data.email,data.password)
    };

  return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
            <label>Email</label>
            <input {...register("email")} />
            <p>{errors.email?.message}</p>

            <label>Password</label>
            <input {...register("password")} type='password' />
            <p>{errors.password?.message}</p>
        
            <input type="submit" className={style.sybmit} value={buttonName}/>
        </form>
  );
};
