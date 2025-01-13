
import { getTrades, getItems } from "@/app/lib/databaseCalls";

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
            sellingTags.concat(item.tags);
            selling.push(item);
        }
        else {
            buyingTags.concat(item.tags);
            buying.push(item);
        }
    }   

    let finalTrade = {
        trader:"Unknown",
        time: new Date(),
        trading: selling,
        tradingFor: buying,
        sellingTags: new Set(sellingTags),
        buyingTags: new Set(buyingTags)
    }

    console.log("Selling Tags");
    console.log(sellingTags);
    console.log("Buying Tags");
    console.log(buyingTags);

    console.log("Final Trade");

    console.log(finalTrade);

    return new Response(JSON.stringify({ message: "Trade Created", req: request }), {
        headers: { "Content-Type": "application/json" },
    });
    
}