"use client"
import Link from 'next/link'
import logo from "@/images/freshcart-logo.svg"
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {



    const session = useSession()

    console.log("x", session.data)

    function handleLogOut() {
        signOut({ redirect: true, callbackUrl: "/Login" })
    }

    return <>
        <nav className=' flex justify-between pb-10 shadow-sm'>
            <div>




                <ul className='flex gap-3 mt-3'>

                    <div>
                        <p className='ps-8 rounded-lg font-semibold'>Graph Theory Visualizer</p>
                    </div>

                </ul>
            </div>

            <div>
                <ul className='flex justify-around gap-3 mt-3'>


                    <li>
                        <Link href={"/"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition'>Home</Link>
                    </li>


                    <li>
                        <Link href={"/Algorithem"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition '>Algorithem</Link>
                    </li>

                    <li>
                        <Link href={"/workspace"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition '>Visualizer</Link>
                    </li>

                    <li>
                        <Link href={"/about-us"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition '>About Us</Link>
                    </li>

                    {session.data ? <li><button onClick={handleLogOut} className='hover:bg-blue-700 text-black px-4 py-3 pt-0 rounded-lg font-semibold transition'>Log out</button></li> : <>

                        <li>
                            <Link href={"/Login"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition '> Login</Link>

                        </li>

                        <li>
                            <Link href={"/signup"} className='hover:bg-blue-700 text-black px-4 py-3 rounded-lg font-semibold transition '> Signup</Link>
                        </li>
                    </>}
                </ul>
            </div>


        </nav>
    </>
}
