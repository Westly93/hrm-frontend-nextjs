'use client';
import {Form} from '@/components/forms';
import {useRegister} from '@/hooks';
export default function(){
    const { first_name, last_name, email, password, re_password, onChange, onSubmit, isLoading } = useRegister()
    const config= [
        {
            labelText: 'First Name',
            labelId: "first_name",
            type: "text",
            value: first_name,
            require: true,
        },
        {
            labelText: 'Last Name',
            labelId: "last_name",
            type: "text",
            value: last_name,
            require: true,
        },
        {
            labelText: 'Email',
            labelId: "email",
            type: "email",
            value: email,
            require: true,
        },
        {
            labelText: 'Password',
            labelId: "password",
            type: "password",
            value: password,
            require: true,
        },
        {
            labelText: 'Confirm Password',
            labelId: "re_password",
            type: "password",
            value: re_password,
            require: true,
        },
    ]
    return (
        <Form 
        config= {config}
        isLoading={isLoading}
        btnText= "Sign up"
        onChange= {onChange}
        onSubmit= {onSubmit}
        />
    )
}