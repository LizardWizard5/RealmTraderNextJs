import { sendTradeAlert } from "@/app/lib/discordBot";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return new Response(JSON.stringify({ status: "400", message: 'Log in to Request Trade' }));
    }
    console.log(request)
    const body = await request.json();

    
    console.log(body);
    await sendTradeAlert(body.tradeId.tradeId);
    return new Response(JSON.stringify({status:"200", message: "Request Sent" }), {
        headers: { "Content-Type": "application/json" },
    });
    /*
    // Parse the json data from the request
    try {
        const data = await request.json();
        console.log(data);

        sendTradeAlert(data.id);
        return new Response(JSON.stringify({ message: "Trade Alert Sent" }), {
            headers: { "Content-Type": "application/json" },
        });
    }
    catch (e) {
        return new Response(JSON.stringify({status:"400", message: "Trade Alert Failed, expected JSON recieved something else." }), {
            headers: { "Content-Type": "application/json" },
        });
    }*/


}