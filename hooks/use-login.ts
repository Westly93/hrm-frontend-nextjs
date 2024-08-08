'use client';
import {useState, ChangeEvent, FormEvent} from 'react'
import {useLoginMutation} from '@/redux/features/authApiSlice'
import {setAuth} from '@/redux/features/authSlice';
import {useAppDispatch} from '@/redux/hooks'
import {toast} from 'react-toastify'
import {useRouter} from 'next/navigation'

export default function useLogin(){
    const [register, {isLoading}]= useLoginMutation()
    const router= useRouter()
    const dispatch= useAppDispatch();
    const [formData, setFormData]= useState({
        email: '',
        password: '',
    })
    const { email, password }= formData;
    const onChange= (event: ChangeEvent<HTMLInputElement>)=>{
        const {name, value}= event.target
        setFormData({...formData, [name]: value})
    }
    const onSubmit= (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        register({email, password})
        .unwrap()
        .then(()=>{
            dispatch(setAuth())
            toast.success("Login success")
            router.push('/dashboard')
        })
        .catch(()=>{
            toast.error("Failed to login ")
        })
    }
    return {
        email, password, onChange, onSubmit, isLoading
    }
}