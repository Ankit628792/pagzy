"use client"
import Link from 'next/link'
import Icons from '../global/icons'
import { Button, buttonVariants } from '../ui/button'
import { useEffect, useState } from 'react';
import { account } from '@/appwrite';

function Navbar() {
    const [user, setUser] = useState<any>(null);

    const login = async () => {
        setUser(await account.get());
    }

    useEffect(() => {
        login()
    }, [])

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);
    };

    return (
        <header className='px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg box-border border-border z-50'>

            <div className='flex items-center justify-between h-full mx-auto md:max-w-screen-xl'>
                <div className='flex items-start'>
                    <Link href={"/"} className='flex items-center gap-2'>
                        <Icons.logo className='w-8 h-8' />
                        <span className='text-lg font-medium'>Pagzy</span>
                    </Link>

                </div>

                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <ul className='flex items-center justify-center gap-8'>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>Pricing</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>About</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>Features</Link>
                        </li>
                        <li className='hover:text-foreground/80 text-sm'>
                            <Link href={"/"}>Blog</Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex items-center gap-4'>
                    {
                        user ?
                            <>
                                <span>{user?.name?.split("@")[0]}</span>
                                <Button onClick={logout}>Logout</Button>
                            </>
                            :
                            <>
                                <Link href={"/login"} className={buttonVariants({ size: "sm", variant: "ghost" })}>Login</Link>
                                <Link href={"/login"} className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>Start free trial</Link>
                            </>
                    }
                </div>
            </div>



        </header>
    )
}

export default Navbar