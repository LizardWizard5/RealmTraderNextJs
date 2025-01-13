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

    {/* Login Section */}
    <div className="login ml-auto">
    <a className=" hover:border-b-3 hover:border-white flex items-center space-x-1" href="https://discord.com/oauth2/authorize?client_id=1214717965442883675&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=identify+email">
        <img src="/discord-brands-solid.svg" alt="Login Icon" className="w-5 h-5" />
        <span>Login</span>
    </a>
</div>
</header>


    )
}