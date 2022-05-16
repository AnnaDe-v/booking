import React, {FC} from 'react';
import Layout from "../../common/Layout";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFields} from "@/screens//auth/auth.inteerface";

const Auth: FC = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<IAuthFields>({
        mode: 'onChange'
    })
    const onSubmit: SubmitHandler<IAuthFields> = (data) => {

    }


    return <Layout>
        <h1>Auth/register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    </Layout>
};

export default Auth;