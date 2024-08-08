'use client';
import {useState, FormEvent, ChangeEvent} from 'react'
import {useResetPasswordMutation} from '@/redux/features/authApiSlice'
import {toast} from 'react-toastify'
import {useRouter} from 'next/navigation'

export default function useLogin(){
    const [resetPassword, {isLoading}]= useResetPasswordMutation()
    const router= useRouter()
    const [email, setEmail]= useState('')
    const onChange= (event: ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value)
    }
    const onSubmit= (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        resetPassword(email)
        .unwrap()
        .then(()=>{
            toast.success("Request send, Check your email for request link")
        })
        .catch(()=>{
            toast.error("Failed to send password request")
        })
    }
    return {
        email,onChange, onSubmit, isLoading
    }
}