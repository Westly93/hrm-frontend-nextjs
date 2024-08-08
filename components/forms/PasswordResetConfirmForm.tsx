'use client';
import { Form } from '@/components/forms';
import { usePasswordResetConfirm } from '@/hooks'
interface Props{
    uid: string,
    token: string
}
export default function PasswordResetConfirmForm({uid, token}:Props){
    const {new_password, re_new_password, isLoading, onChange, onSubmit}= usePasswordResetConfirm(uid, token)
    const config= [
        
        {
            labelText: "New Password",
            labelId: "new_password",
            value: new_password,
            type: "password",
            required: true,
        },
        {
            labelText: "Confirm Password",
            labelId: "re_new_password",
            value: re_new_password,
            type: "password",
            required: true,
        },
    ]
    return (
        <Form 
        config= {config}
        isLoading= {isLoading}
        btnText= "Reset Password"
        onChange= {onChange}
        onSubmit= {onSubmit}
        />
    )
}