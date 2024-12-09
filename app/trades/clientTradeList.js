'use client';

import React from 'react';

export default function ClientTradeList({ trade }) {
    console.log("recieved trade", trade);

    return (
        <div >
            
                
                <div className='divide-y divide-slate-200' key={trade._id}>
                    <h1>Trader: {trade.trader}</h1>
                    <div className='flex flex-row'>
                        {trade.trading.map((item) => (
                            <div key={item._id}>
                                <p><img src={"items/"+item.imageUrl+".png"} alt={item.name}></img>x{item.amount}</p>
                            </div>
                        ))}
                        <p>for</p>
                        {trade.tradingFor.map((item) => (
                            <div key={item._id}>
                                <p><img src={"items/"+item.imageUrl+".png"} alt={item.name}></img>x{item.amount}</p>
                            </div>
                        ))}
                    </div>
                    <p>{trade.uid} - {trade.time}</p>
                    
                </div>
            
        </div>
    );
}