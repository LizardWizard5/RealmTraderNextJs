import { sendTradeAlert } from "@/app/lib/discordBot";


import { getSession } from "next-auth/react"

export async function POST(request) {
    console.log(request)
    const body = await request.json();
    const requester = body.requester;
    console.log(requester + " is requesting a trade alert");

    if (!requester) {
        console.log("Unauthorized");
        return new Response(JSON.stringify({status:"401", message: "Unauthorized" }));
    }
    console.log("Authorized");
    
    console.log(body);
    await sendTradeAlert(body.tradeId.tradeId);
    return new Response(JSON.stringify({ message: "Trade Alert Sent" }), {
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