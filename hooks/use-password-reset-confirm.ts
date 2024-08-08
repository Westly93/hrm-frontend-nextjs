'use client';
import {useState, ChangeEvent, FormEvent} from 'react'
import {useResetPasswordConfirmMutation} from '@/redux/features/authApiSlice'
import {toast} from 'react-toastify'
import {useRouter} from 'next/navigation'

export default function usePasswordResetConfirm(uid:string, token:string){
    const [resetPasswordConfirm, {isLoading}]= useResetPasswordConfirmMutation()
    const router= useRouter()

    const [formData, setFormData]= useState({
        new_password: '',
        re_new_password: '',
    })
    const { new_password, re_new_password }= formData;
    const onChange= (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= event.target
        setFormData({...formData, [name]: value})
    }
    const onSubmit= (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        resetPasswordConfirm({uid, token, new_password, re_new_password})
        .unwrap()
        .then(()=>{
            toast.success("Password Reset Success")
            router.push('/auth/login')
        })
        .catch(()=>{
            toast.error("Password Reset Failed")
        })
    }
    return {
        new_password, re_new_password, onChange, onSubmit, isLoading
    }
}