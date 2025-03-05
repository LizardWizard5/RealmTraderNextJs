"use client";
import React, { useState } from 'react';
import { set } from "mongoose";
import { useSession } from "next-auth/react";
export default function RequestTrade(tradeId) {
    const [buttonText, setButtonText] = useState('Request Trade');
    const [isDisabled, setIsDisabled] = useState(false);
    const { data: session, status } = useSession();

    async function handleTradeRequest() {
        //API call to send trade request

        if(!session){
            setButtonText('Log in to Request Trade');
            setIsDisabled(true);
            return;
        }
        //POST API call to /api/trades/request. The body of the request should be the tradeId
        const response = await fetch('/api/trades/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tradeId: tradeId,requester: session.user.id }),

        });

        setButtonText('Request Sent');
        setIsDisabled(true);

    }

    return (
        <button className='bg-header ho ver:bg-gray-700 text-white font-bold py-2 px-4 rounded'  disabled={isDisabled} onClick={ handleTradeRequest} >{buttonText}</button>
    )
}