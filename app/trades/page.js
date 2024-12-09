// app/trades/page.js
import React from 'react';
import { getTrades } from '../lib/databaseCalls';
import ClientTradeList from './clientTradeList';

export default async function Trades() {
    const trades = await getTrades(); 
    // Confirm that trades is an array of plain objects. Log it to check:
    console.log(trades);

    return (
        <div>
            <div>
                
            </div>
            <div className='w-2/3'>
                {trades.map((trade) => (
                    <ClientTradeList key={trade._id} trade={trade} />
                ))}
            </div>
        </div>
    );
}
