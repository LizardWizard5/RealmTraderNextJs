
import { getTrades, createTrade } from "@/app/lib/databaseCalls";
import { createRandomString } from "@/app/lib/useful";
import { getSession } from "next-auth/react";

export async function GET(request) {
    const trades = await getTrades();
    return new Response(JSON.stringify(trades), {
        headers: { "Content-Type": "application/json" },
    });
}


export async function POST(request) {
    // Parse the form data from the request
    /*
    const session = await getSession({request})
    console.log(session);
    if (!session) {
        return new Response(JSON.stringify({status:"401", message: "Unauthorized" }));
    }
*/
    const formData = await request.formData();  
    console.log(formData);
    let selling = [];
    let buying = [];

    const tradeItems = formData.getAll("tradeItems");
    let sellingTags = [];
    let buyingTags = [];
    

    for (let i=0; i<tradeItems.length; i++){
        let item = JSON.parse(tradeItems[i]);
        if (item.selling){
            sellingTags.push.apply(sellingTags, item.tags);
            selling.push(item);
        }
        else {
            buyingTags.push.apply(buyingTags, item.tags);
            buying.push(item);
        }
    }   

    if(selling.length === 0 || buying.length === 0){
        return new Response(JSON.stringify({status:"400", message: "Trade must have at least one item in each section" }));
    }
    
    let finalTrade = {
        trader:"Unknown NEXTJS User",
        time: new Date(8.64e15).toString(),
        trading: selling,
        tradingFor: buying,
        buyingTags: [...new Set(buyingTags)],
        sellingTags:[... new Set(sellingTags)],
        uid: createRandomString(5),
    }
    await createTrade(finalTrade);

    return new Response(JSON.stringify({status:"200", message: "Trade Created" }));
    
}