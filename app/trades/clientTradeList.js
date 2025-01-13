import { sendTradeAlert } from '../lib/discordBot';
import { getTradeById } from '../lib/databaseCalls';
import React from 'react';

export default function ClientTradeList({ trade }) {

    // This is the server action
    async function handleTradeRequest(tradeId) {
        "use server";

        // API call to delete an item
        console.log("In the handleTradeRequest function");
        console.log(tradeId);




        // Example API call: await fetch(`/api/deleteItem`, { method: 'POST', body: data });
    };

    return (
        <p>Balls</p>
    );
}