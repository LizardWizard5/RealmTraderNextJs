
import React from "react";

import { getUser, getUserTrades } from "@/app/lib/databaseCalls";

export default async function page(props) {
    const id = props.params.id;
    const user = await getUser(id);
    const trades = await getUserTrades(id);
    //https://cdn.discordapp.com/avatars/USERID/FILENAME.jpg
    console.log(props);
    console.log(user)


    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header area */}
            <header className="bg-gray-400 h-24 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    {/* User info row */}
                    <div className="flex items-center">
                        {/* Avatar placeholder */}
                        <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0" />
                        {/* Username and stats */}
                        <div>
                            <h1 className="text-xl font-semibold">Username</h1>
                            <p>Completed Trades: 451</p>
                            <div className="flex items-center">
                                <span className="text-sm">24 (thumbsup symbol)</span>
                                <span>|</span>
                                <span className="text-sm">9 (thumbsdown symbol)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Trades title */}
                <h2 className="text-xl font-semibold mb-4">Username's Trades</h2>
                {/* Trades container (placeholder) */}
                <div className="bg-gray-200 h-48 rounded-md">
                    {/* You can replace this gray box with your trades listing content */}
                </div>
            </main>
        </div>
    );
}