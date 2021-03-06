import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CgProfile } from 'react-icons/cg'
import { IAuthFields } from './auth.interface'

import styles from './Auth.module.scss'
import stylesButton from '../place/BookTrip/BookTrip.module.scss'
import { signUp } from 'next-auth-sanity/dist/client'
import { signIn } from 'next-auth/react'
import { toast } from 'react-toastify'
import Layout from '../../common/Layout'

const Auth: FC = () => {
    const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<IAuthFields>({
        mode: 'onChange'
    })

    const isReg = typeForm === 'register'

    const onSubmit: SubmitHandler<IAuthFields> = async data => {
        if (isReg) {
            const response = await signUp(data)
            if (response.error) toast.error(response.error)
        } else {
            const response = await signIn('sanity-login', {
                redirect: false,
                ...data
            })
            if (response.error) toast.error(response.error)
        }
    }

    return (
        <Layout>
            <h1 className={styles.h1}>Auth/{isReg ? 'Register' : 'login'}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.wrapper}>
                    <input
                        {...register('email', { required: 'Email is invalid!' })}
                        type="text"
                        placeholder="E-mail"
                        className={styles.input}
                    />
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>
                <div className={styles.wrapper}>
                    <input
                        {...register('password', { required: 'Password is invalid!' })}
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                    />
                    {errors.password && (
                        <div className={styles.error}>{errors.password}</div>
                    )}
                </div>
                <button className={stylesButton.button}>
					<span className={stylesButton.text}>
						{isReg ? 'Register' : 'Login'}
					</span>
                    <span className={stylesButton.icon}>
						<CgProfile size="18" />
					</span>
                </button>
                <div className={styles.changeType}>
                    <button onClick={() => setTypeForm(isReg ? 'login' : 'register')}>
                        I want {isReg ? 'login' : 'register'}
                    </button>
                </div>
            </form>
        </Layout>
    )
}

export default Auth