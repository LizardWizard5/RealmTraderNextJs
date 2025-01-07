
import React from 'react';

export default function ClientTradeList({ trade }) {

    // This is the server action
    const handleDelete = async (data) => {
        "use server";

        // API call to delete an item
        console.log("Delete item");
        console.log(data.itemId);
        console.log(data.get("itemId"));

        // Example API call: await fetch(`/api/deleteItem`, { method: 'POST', body: data });
    };
    console.log("Trade in cleintTradeList");
    console.log(trade);
    return (
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
                    <form action={handleDelete}>
                                    <input name="itemId" className="hidden" value={trade._id} />
                                    <button className='bg-header hover:bg-gray-700 text-white font-bold py-2 px-4   ' type="submit">
                                     Request Trade
                                 </button>
                                </form>
                    </div>
                </div>
                <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time}</p>
            </div>
        </div>
    );
}