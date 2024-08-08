import { ChangeEvent } from "react";
import Link from 'next/link';
interface Props{
    labelId: string;
    type: string;
    value: string;
    link?:{
        linkText: string;
        href: string;
    }
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
    children: React.ReactNode;
    required?:boolean;
}
export default function({
    labelId,
    type,
    onChange,
    value, 
    link,
    children,
    required= false
}: Props){
return (
    <div>
        <div className="flex justify-between align-center">
        <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
        {children}
        </label>
        {link && (
            <div className="text-sm">
                <Link href={link.href} className="text-semibold text-indigo-600 hover:text-indigo-500 ">{ link.linkText }</Link>
            </div>
        )}
        </div>
        <div className="mt-2">
        <input
            id={labelId}
            name={labelId}
            value={value}
            onChange= {onChange}
            type={type}
            required={required}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        </div>
    </div>
)
}