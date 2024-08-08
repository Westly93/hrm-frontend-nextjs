import {useEffect, useRef} from 'react'
import {useRouter, useSearchParams} from 'next/navigation';
import {useAppDispatch} from '@/redux/hooks';
import {setAuth} from '@/redux/features/authSlice';
import {toast} from 'react-toastify';

export default function useSoacialAuth(
    authenticate: any,
    provider: string
){
    const dispatch = useAppDispatch();
    const effectRan= useRef(false)
    const router= useRouter();
    const searchParams= useSearchParams();
    useEffect(()=>{
        const code= searchParams.get("code");
        const state= searchParams.get('state')
        if(state && code && !effectRan.current){
            authenticate({provider, state, code})
            .unwrap()
            .then(()=>{
                dispatch(setAuth());
                toast.success("Logged in");
                router.push('/dashboard');
            })
            .catch(()=>{
                toast.error("Failed to log in")
                router.push('/auth/login')
            })
        }
        return ()=>{
            effectRan.current= true;
        }
    }, [authenticate, provider])
}