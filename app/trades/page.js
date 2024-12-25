// app/tradess/page.js
import React from 'react';
import { getTrades } from '../lib/databaseCalls';
import ClientTradeList from './ClientTradeList';
import ClientFilterUI from './ClientFilterUI';

export default async function Trades() {
    const trades = await getTrades(); 
    // Confirm that tradess is an array of plain objects. Log it to check:
    

    const handleTradeRequest = async (tradeId) => {
        console.log('Trade requested:', tradeId);
        // Implement the trade request feature here
    }


    return (
        <div className='flex flex-row justify-center'>
            <div className='w-1/5 m-5'>
                <ClientFilterUI></ClientFilterUI>
            </div>
            <div className='w-3/5 mt-5'>
                {trades.map((trade) => (
                     <div>
                     <div className='bg-white shadow-md rounded-lg p-6 mb-4' key={trade._id}>
                         <h1 className='text-xl font-bold mb-2'>Trader: {trade.trader}</h1>
                         <div className='flex flex-row items-center mb-4'>
                             <div className='flex flex-wrap'>
                                 {trade.trading.map((item) => (
                                     <div key={item._id} className='flex items-center mr-4 mb-2'>
                                         <img className='w-10 h-10 mr-2' src={"items/"+item.imageUrl+".png"} alt={item.name} />
                                         <p className='text-sm font-medium'>x{2}</p>
                                     </div>
                                 ))}
                             </div>
                             <p className='mx-4 text-lg font-semibold'>for</p>
                             <div className='flex flex-wrap'>
                                 {trade.tradingFor.map((item) => (
                                    
                                     <div key={item._id} className='flex items-center mr-4 mb-2'>
                                         <img className='w-10 h-10 mr-2' src={"items/"+item.imageUrl+".png"} alt={item.name} />
                                         <p className='text-sm font-medium'>x{2}</p>
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
                ))}
            </div>
        </div>
    );
}
