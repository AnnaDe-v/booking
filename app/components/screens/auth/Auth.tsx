import React, {FC, useState} from 'react';
import Layout from "../../common/Layout";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFields} from "@/screens//auth/auth.inteerface";
import styles from '../auth/Auth.module.scss'
import stylesForButton from '../place/BookTrip/BookTrip.module.scss'
import {AiFillSecurityScan} from "react-icons/all";
import {signUp} from "next-auth-sanity/dist/client";


const Auth: FC = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IAuthFields>({
        mode: 'onChange'
    })
    const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

    const onSubmit: SubmitHandler<IAuthFields> = async data => {
        await signUp(data)
    }


    return <Layout>
        <h1>Auth/register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapper}>
                <input
                    {...register('email', {required: 'Email is required'})}
                    type="text"
                    placeholder='email'
                    className={styles.input}
                />
                {errors.email && <div className={styles.error}>{errors.email}</div>}
            </div>
            <div className={styles.wrapper}>
                <input
                    {...register('password', {required: 'Password is required'})}
                    type="text"
                    placeholder='password'
                    className={styles.input}
                />
                {errors.password && <div className={styles.error}>{errors.password}</div>}
            </div>
            <button className={stylesForButton.button}>
                <span className={stylesForButton.text}>{typeForm === 'register' ? 'Register' : 'Login'}</span>
                <span className={stylesForButton.icon}><AiFillSecurityScan size='18' /></span>
            </button>
        </form>
    </Layout>
};

export default Auth;