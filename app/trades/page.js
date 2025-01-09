"use server";
import React from "react";
import { getTrades } from "../lib/databaseCalls";
import { sendTradeAlert } from "../lib/discordBot";

import ClientTradeList from "./ClientTradeList";
import ClientFilterUI from "./ClientFilterUI";


export default async function Trades() {

    

    const trades = await getTrades();


    return (
        <div className="flex flex-row justify-center">
            <div className="w-1/5 m-5" key="filter">
                <div className="text-center mb-6 flex flex-col" >
                    <a href="/trades/create" className='bg-header hover:bg-gray-700 text-white font-bold py-2 px-4  w-full mb-2'>
                        Create Trade
                    </a>
                    <div>
                        {/* Add your filter UI here */}
                        <ClientFilterUI />
                    </div>
                </div>

            </div>
            <div className="w-3/5 mt-5" key="tradeCards">
                {trades.map((trade) => (
                    console.log("Trade in trades page"),
                    console.log(trade),
                    <ClientTradeList trade={trade} />

                ))}
            </div>
        </div>
    );
}
