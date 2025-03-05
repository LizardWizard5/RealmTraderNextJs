
import React from "react";
import { getUserById, getUserTrades, getUserRatings } from "@/app/lib/databaseCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { RequestTrade } from "@/app/trades/RequestTrade";
import Trade from "@/app/lib/Schema/trade";

export default async function page(props) {
        
    const id = props.params.id;
    const user = await getUserById(id);
    const trades = await getUserTrades(user.discordId);
    const userRatings = await getUserRatings(id);
    const totalRatings = userRatings.upvotes + userRatings.downvotes;
    
    //https://cdn.discordapp.com/avatars/USERID/FILENAME.jpg
    


    return (
        <div className="bg-gray-100 min-h-screen" >
            {/* Header area */}
            <header className=" h-[25vh] flex items-center" style={{backgroundColor: user.BannerColor}}>
                <div className="max-w-7xl mx-auto px-4 w-full">
                    {/* User info row */}
                    <div className="flex items-center">
                        {/* Avatar placeholder */}
                        <img src={"https://cdn.discordapp.com/avatars/"+user.discordId+"/"+user.ProfilePicture} className="w-30 h-30 bg-gray-200 rounded-full mr-4 flex-shrink-0" />
                        {/* Username and stats */}
                        <div>
                            <h1 className="text-xl font-semibold" style={{color: user.BannerColor, filter: "invert(100%)"}}>{user.DisplayName}</h1>
                            <p style={{color: user.BannerColor, filter: "invert(100%)"}}>Completed Trades: {totalRatings}</p>
                            <div className="flex items-center">
                                <span className="text-sm" style={{color: user.BannerColor, filter: "invert(100%)"}}>{userRatings.upvotes} <FontAwesomeIcon icon={faThumbsUp}/></span>
                                <span style={{color: user.BannerColor, filter: "invert(100%)"}}>|</span>
                                <span className="text-sm" style={{color: user.BannerColor, filter: "invert(100%)"}}>{userRatings.downvotes} <FontAwesomeIcon icon={faThumbsUp} flip="vertical" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Trades title */}
                <h2 className="text-xl font-semibold mb-4">{user.DisplayName}'s Trades</h2>
                {/* Trades container (placeholder) */}
                <div className="bg-gray-200 min-h-100 rounded-md p-4 ">
                    {trades.length === 0 ? (
                      <h1 className="text-center text-lg">This user currently has no trades</h1>
                    ) : (
                      trades.map((trade) => (
                        <div key={trade._id} className="mb-4">
                          <div className='bg-white shadow-md rounded-lg p-6 mb-4' key={trade._id}>
                            <h1 className='text-xl font-bold mb-2'>Trader: {trade.trader}</h1>
                            <div className='flex flex-row items-center mb-4 flex-nowrap'>
                              <div className='flex flex-wrap'>
                                {trade.trading.map((item) => (
                                  <div key={item._id} className='flex items-center mr-4 mb-2'>
                                    <img className='w-10 h-10 mr-2' src={"/items/" + item.imageUrl + ".png"} alt={item.name} />
                                    <p className='text-sm font-medium'>x{item.amount}</p>
                                  </div>
                                ))}
                              </div>
                              <p className='mx-4 text-lg font-semibold'>for</p>
                              <div className='flex flex-wrap'>
                                {trade.tradingFor.map((item) => (
                                  <div key={item._id} className='flex items-center mr-4 mb-2'>
                                    <img className='w-10 h-10 mr-2' src={"/items/" + item.imageUrl + ".png"} alt={item.name} />
                                    <p className='text-sm font-medium'>x{item.amount}</p>
                                  </div>
                                ))}
                              </div>
                              <div className='ml-auto'>
                                
                              </div>
                            </div>
                            <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time}</p>
                          </div>
                        </div>
                      ))
                    )}
                    
                    {/* You can replace this gray box with your trades listing content */}
                </div>
            </main>
        </div>
    );
}