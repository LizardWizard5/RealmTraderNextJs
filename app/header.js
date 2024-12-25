'use client';

import React from 'react';


export default function Header() {
    return (
<header className="flex flex-wrap items-center pl-5 pt-2 bg-1F1A24 text-white ">
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

    {/* Login Section */}
    <div className="login ml-auto">
    <a className=" hover:border-b-3 hover:border-white flex items-center space-x-1" href="/login">
        <img src="/discord-brands-solid.svg" alt="Login Icon" className="w-5 h-5" />
        <span>Login</span>
    </a>
</div>
</header>


    )
}