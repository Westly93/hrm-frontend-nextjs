'use client';
import { useAppSelector } from "@/redux/hooks";
import {Spinner} from '@/components/common';
import {useRouter} from 'next/navigation';
import {toast} from 'react-toastify';
interface Props{
    children: React.ReactNode;
}
export default function RequireAuth({children}: Props){
    const {isAuthenticated, isLoading}= useAppSelector(state=>state.auth);
    const router= useRouter()
    if (isLoading){
        return (
            <div className='flex justify-center my-8'>
				<Spinner lg />
			</div>
        )
    }
    if (!isAuthenticated){
        //toast.error("Please Login to access this resource")
        router.push('/auth/login')
    }
    return <>{children}</>
}