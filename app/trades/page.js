'use client';
import React from "react";
import RequestTrade from "./RequestTrade";
import ClientFilterUI from "./clientFilterUI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from "@fortawesome/free-solid-svg-icons";


export default function Trades() {
    const [allTrades, setAllTrades] = React.useState([]);
    const [displayedTrades, setDisplayedTrades] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const pageSize = 15;

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/trades");
            const data = await response.json();
            setAllTrades(data);
            // Set the initial page of trades
            setDisplayedTrades(data.slice(0, pageSize));
        }
        fetchData();
    }, []);

    function handlePageChange(number) {
        if (page + number > Math.ceil(allTrades.length / pageSize) || page + number == 0) {
            return;
        }
        const nextPage = page + number;
        setPage(nextPage);
        const startIndex = (nextPage - 1) * pageSize;
        const endIndex = nextPage * pageSize;
        // Slice the allTrades array to get the trades for the next page
        setDisplayedTrades(allTrades.slice(startIndex, endIndex));
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="w-1/5 m-5 " key="filter">
                
                <ClientFilterUI />
            </div>
            <div className="w-3/5 mt-5 " key="tradeCards">
                <div className="flex flex-row justify-evenly mb-2">

                    <button onClick={() => handlePageChange(-1)}><FontAwesomeIcon icon={faBackward} /></button>
                    <p>Page {page}/{Math.ceil(allTrades.length / pageSize)}</p>
                    <button onClick={() => handlePageChange(1)}><FontAwesomeIcon icon={faBackward} flip="horizontal" /></button>
                </div>

                {displayedTrades.map((trade) => (
                    <div key={trade._id}>
                        <div className='bg-white shadow-md rounded-lg p-6 mb-4' key={trade._id}>
                            
                            <div className='flex flex-row items-center mb-2 flex-nowrap mt-2'>
                                <div className='flex flex-wrap'>
                                    {trade.trading.map((item) => (
                                        <div key={item._id} className='flex items-center mr-4 mb-2'>
                                            <img className='w-10 h-10 mr-2' src={"items/" + item.imageUrl + ".png"} alt={item.name} />
                                            <p className='text-sm font-medium'>x{item.amount}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className='mx-4 text-lg font-semibold'>for</p>
                                <div className='flex flex-wrap'>
                                    {trade.tradingFor.map((item) => (
                                        <div key={item._id} className='flex items-center mr-4 mb-2'>
                                            <img className='w-10 h-10 mr-2' src={"items/" + item.imageUrl + ".png"} alt={item.name} />
                                            <p className='text-sm font-medium'>x{item.amount}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='ml-auto'>
                                    <RequestTrade tradeId={trade._id} />
                                </div>
                            </div>
                            {trade.isSeasonal ? 
                            <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time.split(" ").splice(0,3).join(" ")} - <span className="bg-blue-500 text-white p-1 rounded-lg">Seasonal</span></p>
                             : <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time.split(" ").splice(0,3).join(" ")}</p>}
                            
                        </div>
                    </div>
                ))}
                <div className="flex flex-row justify-evenly mb-2">

                    <button onClick={() => handlePageChange(-1)}><FontAwesomeIcon icon={faBackward} /></button>
                    <p>Page {page}/{Math.ceil(allTrades.length / pageSize)}</p>
                    <button onClick={() => handlePageChange(1)}><FontAwesomeIcon icon={faBackward} flip="horizontal" /></button>
                </div>
            </div>
        </div>
    );
}
