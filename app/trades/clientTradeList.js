'use client';

import React from 'react';

export default function ClientTradeList({ trade }) {

 
    
    let uniqueTradeItems = [];
    let tradeItemCount = trade.trading.reduce((acc, item) => {
        acc[item._id] = (acc[item._id] || 0) + 1;
        return acc;
    }, {});

    let tradeForItemCount = trade.tradingFor.reduce((acc, item) => {
        acc[item._id] = (acc[item._id] || 0) + 1;
        return acc;
    }, {});

    
    for (let i = 0; i < trade.trading.length; i++) {
        if (!uniqueTradeItems.some(uniqueItem => uniqueItem._id === trade.trading[i]._id)) {
            uniqueTradeItems.push(trade.trading[i]);
           
        }
    }

    let uniqueTradingForItems = [];

    for (let i = 0; i < trade.tradingFor.length; i++) {
        if (!uniqueTradingForItems.some(uniqueItem => uniqueItem._id === trade.tradingFor[i]._id)) {
            uniqueTradingForItems.push(trade.tradingFor[i]);
            
        }
    }

    return (
        <div>
            <div className='bg-white shadow-md rounded-lg p-6 mb-4' key={trade._id}>
                <h1 className='text-xl font-bold mb-2'>Trader: {trade.trader}</h1>
                <div className='flex flex-row items-center mb-4'>
                    <div className='flex flex-wrap'>
                        {uniqueTradeItems.map((item) => (
                            <div key={item._id} className='flex items-center mr-4 mb-2'>
                                <img className='w-10 h-10 mr-2' src={"items/"+item.imageUrl+".png"} alt={item.name} />
                                <p className='text-sm font-medium'>x{tradeItemCount[item._id]}</p>
                            </div>
                        ))}
                    </div>
                    <p className='mx-4 text-lg font-semibold'>for</p>
                    <div className='flex flex-wrap'>
                        {uniqueTradingForItems.map((item) => (
                            <div key={item._id} className='flex items-center mr-4 mb-2'>
                                <img className='w-10 h-10 mr-2' src={"items/"+item.imageUrl+".png"} alt={item.name} />
                                <p className='text-sm font-medium'>x{tradeForItemCount[item._id]}</p>
                            </div>
                        ))}
                    </div>
                    <div className='ml-auto'>
                        <button className='bg-header hover:bg-gray-700 text-white font-bold py-2 px-4   '>
                            Request Trade
                        </button>
                    </div>
                </div>
                <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time}</p>
            </div>
        </div>
    );
}