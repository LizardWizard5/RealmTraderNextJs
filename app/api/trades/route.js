
import { getTrades, createTrade } from "@/app/lib/databaseCalls";
import { createRandomString } from "@/app/lib/useful";

export async function GET(request) {
    const trades = await getTrades();
    return new Response(JSON.stringify(trades), {
        headers: { "Content-Type": "application/json" },
    });
    
}


export async function POST(request) {
    // Parse the form data from the request
    const formData = await request.formData();  
    //console.log(formData);
    let selling = [];
    let buying = [];

    const tradeItems = formData.getAll("tradeItems");
    let sellingTags = [];
    let buyingTags = [];
    

    for (let i=0; i<tradeItems.length; i++){
        console.log(tradeItems[i]);
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

    let finalTrade = {
        trader:"Unknown NEXTJS User",
        time: new Date(8.64e15).toString(),
        trading: selling,
        tradingFor: buying,
        buyingTags: [...new Set(buyingTags)],
        sellingTags:[... new Set(sellingTags)],
        uid: createRandomString(5),
    }
    createTrade(finalTrade);

    return new Response(JSON.stringify({ message: "Trade Created", req: request }), {
        headers: { "Content-Type": "application/json" },
    });
    
}