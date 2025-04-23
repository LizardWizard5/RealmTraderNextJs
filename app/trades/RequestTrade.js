"use client";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";

export default function RequestTrade({ tradeId, disableAllButtons, setDisableAllButtons }) {
    const [buttonText, setButtonText] = useState('Request Trade');
    const { data: session, status } = useSession();

    async function handleTradeRequest() {
        if (buttonText === 'Log in to Request Trade') {
            window.location.href = "/api/auth/signin";
            return;   
        }

        if (!session) {
            setButtonText('Log in to Request Trade');
            return;
        }

        if (disableAllButtons) {
            return; // Prevent clicking during cooldown
        }

        setDisableAllButtons(true); // Disable all buttons globally
        setButtonText("Requesting...");

        try {
            await fetch('/api/trades/request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tradeId }),
                credentials: "include",
            });

            setButtonText("Trade Requested!");
        } catch (error) {
            setButtonText("Request Failed");
        }

        // Keep buttons disabled for 5 seconds, then re-enable
        setTimeout(() => {
            setDisableAllButtons(false);
            setButtonText("Request Trade");
        }, 5000);
    }

    return (
        <button 
            className='bg-header text-white font-bold py-2 px-4 rounded hover:bg-gray-700 hover:text-yellow-300' 
            disabled={disableAllButtons} // Disables all buttons for 5 seconds
            onClick={handleTradeRequest}
        >
            {buttonText}
        </button>
    );
}
