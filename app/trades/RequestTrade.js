"use client";
import React, { useState } from 'react';
import { set } from "mongoose";
import { useSession } from "next-auth/react";
export default function RequestTrade(tradeId) {
    const [buttonText, setButtonText] = useState('Request Trade');
    const [isDisabled, setIsDisabled] = useState(false);
    const { data: session, status } = useSession();

    async function handleTradeRequest() {
        setIsDisabled(true);
        //API call to send trade request
        if(buttonText === 'Log in to Request Trade'){
            window.location.href = "/api/auth/signin";
            return;   
        }

        if(!session){
            setButtonText('Log in to Request Trade');
            setIsDisabled(false);
            
            return;
        }
        
        //POST API call to /api/trades/request. The body of the request should be the tradeId
        const response = await fetch('/api/trades/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tradeId: tradeId }),
            credentials: "include",


        });
        const data = await response.json();
        console.log(data);

        setButtonText(data.message);
        setIsDisabled(true);

    }

    return (
        <button className='bg-header text-white font-bold py-2 px-4 rounded  hover:bg-gray-700 hover:text-yellow-300'  disabled={isDisabled} onClick={ handleTradeRequest} >{buttonText}</button>
    )
}