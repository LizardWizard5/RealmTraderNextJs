"use client";
import React, { useState } from 'react';
import { set } from "mongoose";

export default function RequestTrade(tradeId) {
    const [buttonText, setButtonText] = useState('Request Trade');
    const [isDisabled, setIsDisabled] = useState(false);

    async function handleTradeRequest() {
        //API call to send trade request
        console.log("In the handleTradeRequest function");

        //POST API call to /api/trades/request. The body of the request should be the tradeId
        const response = await fetch('/api/trades/request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tradeId: tradeId }),

        });

        setButtonText('Request Sent');
        setIsDisabled(true);

    }

    return (
        <button className='bg-header ho ver:bg-gray-700 text-white font-bold py-2 px-4 rounded'  disabled={isDisabled} onClick={ handleTradeRequest} >{buttonText}</button>
    )
}