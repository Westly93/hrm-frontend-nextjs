'use client';
import {Form } from '@/components/forms'
import { useLogin } from '@/hooks'
export default function LoginForm(){
    const {email, password, isLoading, onChange, onSubmit}= useLogin()
    const config= [
        {
            labelText: "Email",
            labelId: "email",
            value: email,
            type: "email",
            required: true,
        },
        {
            labelText: "Password",
            labelId: "password",
            value: password,
            link: {
                linkText: "Forgot password?",
                href: '/password-reset'
            },
            type: "password",
            required: true,
        },
    ]
    return (
        <Form 
        config= {config}
        isLoading= {isLoading}
        btnText= "Sign in"
        onChange= {onChange}
        onSubmit= {onSubmit}
        />
    )
}