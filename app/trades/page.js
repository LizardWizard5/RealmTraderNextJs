// app/trades/page.js
import React from 'react';
import { getTrades } from '../lib/databaseCalls';
import ClientTradeList from './ClientTradeList';
import ClientFilterUI from './ClientFilterUI';

export default async function Trades() {
    const trades = await getTrades(); 
    // Confirm that trades is an array of plain objects. Log it to check:
    

    return (
        <div className='flex flex-row justify-center'>
            <div className='w-1/5 m-5'>
                <ClientFilterUI></ClientFilterUI>
            </div>
            <div className='w-3/5 mt-5'>
                {trades.map((trade) => (
                    <ClientTradeList key={trade._id} trade={trade} />
                ))}
            </div>
        </div>
    );
}
