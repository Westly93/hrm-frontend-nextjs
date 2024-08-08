'use client';
import {Form } from '@/components/forms'
import { usePasswordReset } from '@/hooks'
export default function PasswordResetForm(){
    const {email, isLoading, onChange, onSubmit}= usePasswordReset()
    const config= [
        {
            labelText: "Email",
            labelId: "email",
            value: email,
            type: "email",
            required: true,
        },
        
    ]
    return (
        <Form 
        config= {config}
        isLoading= {isLoading}
        btnText= "Request Password Reset"
        onChange= {onChange}
        onSubmit= {onSubmit}
        />
    )
}