'use client';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {useRouter, usePathname} from 'next/navigation';
import {logout as setLogout} from '@/redux/features/authSlice';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import Link from 'next/link';
import {Navlink} from '@/components/common';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
export default function Navbar(){
    const {isAuthenticated} = useAppSelector(state=>state.auth);
    const [logout]= useLogoutMutation()
    const dispatch = useAppDispatch();
    const router= useRouter()
    const pathname= usePathname()
    const handleLogout= ()=>{
        logout(undefined)
        .unwrap()
        .then(()=>{
            dispatch(setLogout())
        })
        .finally(()=>{
            router.push('/auth/login')
        })
    }
    const isSelected= (path: string)=> path===pathname ? true : false;
    const authLinks=(isMobile: boolean)=>(
        <>
        <Navlink 
        isSelected={isSelected('/dashboard')}
        isMobile={isMobile}
        href= '/dashboard'
        > 
        dashboard
        </Navlink>
        <Navlink 
        isMobile={isMobile}
        onClick={handleLogout}
        > 
        Logout
        </Navlink>
        </>
    )
    const guestLinks= (isMobile: boolean)=>(
        <>
        <Navlink 
        isSelected={isSelected('/auth/login')}
        isMobile={isMobile}
        href= '/auth/login'
        > 
            Login
        </Navlink>
        <Navlink 
        isSelected={isSelected('/auth/register')}
        isMobile={isMobile}
        href= '/auth/register'
        > 
            Register
        </Navlink>
        </>
    )
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link href="/" className="text-gray-300 rounded-md px-3 py-2 font-medium">Full Auth</Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            { isAuthenticated ? authLinks(false) : guestLinks(false)}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    { isAuthenticated && (
                        <Menu as="div" className="relative ml-3">
                        <div>
                            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="h-8 w-8 rounded-full"
                            />
                            </MenuButton>
                        </div>
                        <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                Your Profile
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                Settings
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <button className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100" role= "button" onClick={handleLogout}>
                                Sign out
                            </button>
                            </MenuItem>
                        </MenuItems>
                        </Menu>
                    )}
                    </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        { isAuthenticated ? authLinks(true) : guestLinks(true)}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}