
import React from "react";
import { getUserById, getUserTrades, getUserRatings } from "@/app/lib/databaseCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Trades from "@/app/trades/page";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { RequestTrade } from "@/app/trades/RequestTrade";
import Trade from "@/app/lib/Schema/trade";

export default async function page(props) {
    let id = null;
    let user = null;
    let trades = null;
    let userRatings = null;
    let totalRatings = null;
    try {
        id = props.params.id;
        user = await getUserById(id);
        trades = JSON.parse(JSON.stringify(await getUserTrades(user.discordId)));
        userRatings = await getUserRatings(id);
        totalRatings = userRatings.upvotes + userRatings.downvotes;
    } catch (error) {
        return (
            <div className="bg-gray-100 min-h-screen" >


                <header className=" h-[20vh] flex items-center bg-slate-500" >
                    <div className="max-w-7xl mx-auto px-4 w-full">

                        <div className="flex items-center">
                            {/* Avatar placeholder */}
                            <img src={"/questionmark.png"} className="w-50 h-50 bg-gray-200 rounded-full mr-4 flex-shrink-0" />
                            {/* Username and stats */}
                            <div>
                                <h1 className="text-xl font-semibold text-white " >This user does not exists</h1>
                                <p className="text-white">Completed Trades: 0</p>
                                <div className="flex items-center">
                                    <span className="text-sm text-white">0 <FontAwesomeIcon icon={faThumbsUp} /></span>
                                    <span className="text-white">|</span>
                                    <span className="text-sm text-white">0 <FontAwesomeIcon icon={faThumbsUp} flip="vertical" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }



    return (

        <div className="bg-gray-100 min-h-screen" >


            <header className=" h-[20vh] flex items-center" style={{ backgroundColor: user.BannerColor }}>
                <div className="max-w-7xl mx-auto px-4 w-full">

                    <div className="flex items-center">
                        {/* Avatar placeholder */}
                        <img src={"https://cdn.discordapp.com/avatars/" + user.discordId + "/" + user.ProfilePicture} className="w-30 h-30 bg-gray-200 rounded-full mr-4 flex-shrink-0" />
                        {/* Username and stats */}
                        <div>
                            <h1 className="text-xl font-semibold" style={{ color: user.BannerColor, filter: "invert(100%)" }}>{user.DisplayName}</h1>
                            <p style={{ color: user.BannerColor, filter: "invert(100%)" }}>Completed Trades: {totalRatings}</p>
                            <div className="flex items-center">
                                <span className="text-sm" style={{ color: user.BannerColor, filter: "invert(100%)" }}>{userRatings.upvotes} <FontAwesomeIcon icon={faThumbsUp} /></span>
                                <span style={{ color: user.BannerColor, filter: "invert(100%)" }}>|</span>
                                <span className="text-sm" style={{ color: user.BannerColor, filter: "invert(100%)" }}>{userRatings.downvotes} <FontAwesomeIcon icon={faThumbsUp} flip="vertical" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>wasf</p>
                </div>
            </header>


            <main className=" mx-auto px-4 py-8">

                <h2 className="text-xl font-semibold mb-4">{user.DisplayName}'s Trades</h2>

                <div className="bg-gray-200 min-h-100 rounded-md  ">

                    <Trades trades={trades} />


                </div>
            </main>



        </div>




    );
}


