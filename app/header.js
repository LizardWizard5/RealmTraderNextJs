'use client';

import React from 'react';


export default function Header() {
    return (
        <header >
            <div >
                <img src="/RealmTrader.png" alt="logo"></img>
                <ol>
                    <li><a href="/">Home</a></li>
                    <li><a href="/trade">Trades</a></li>
                </ol>
            </div>
            <div className="login">
                <a href="/login">Login</a>
            </div>
        </header>
    )
}