'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import React from 'react';


export default function Header() {
    const { data: session, status } = useSession();

    return (
        <header className="flex flex-wrap items-center pl-5 pt-2 bg-1F1A24 text-white h-auto pb-2">
            {/* Logo Section */}
            <div className="flex-shrink-0 text-white">
                <img className="h-12 w-12 md:h-20 md:w-20" src="/RealmTrader.png" alt="logo" />
            </div>

            {/* Navigation Section */}
            <nav className="ml-4 flex-grow ">
                <ol className="md:flex flex-row space-x-4 ">
                    <li><a className=" hover:border-b-3 hover:border-white" href="/">Home</a></li>
                    <li><a className=" hover:border-b-3 hover:border-white" href="/trades">Trades</a></li>
                </ol>


            </nav>
            {/* Search Section 
            <div>
                <form className="flex items-center space-x-2 color-black">
                    <select className="rounded-lg p-2">
                        <option value="user">User</option>
                        <option value="trade">Trades</option>
                    </select>
                    <input className="rounded-lg p-2" type="text" placeholder="Search" />
                    <button className="bg-1F1A24 text-white rounded-lg p-2">Search</button>
                </form>
            </div>
            */}

            {/* Login Section */}
            <div className="login ml-auto">
                {session ? (
                    <div className=" hover:border-b-3 hover:border-white flex items-center space-x-1 " >
                        <a className="flex items-center text-sm"  href={"/user/" + session.user.id}>
                            
                            <img src="/discord-brands-solid.svg" alt="Login Icon" className="w-5 h-5" />
                        
                            <span>{session.user.DisplayName}</span>
                        </a>
                        <button onClick={() => signOut()} className="bg-1F1A24 text-white rounded-lg p-2 hover:border-white">Logout</button>
                    </div>
                ) : (
                    <button className=" hover:border-b-3 hover:border-white flex items-center space-x-1" onClick={() => signIn()} >
                        <img src="/discord-brands-solid.svg" alt="Login Icon" className="w-5 h-5" />
                        <span>Login</span>
                    </button>
                )}
            </div>
        </header>


    )
}