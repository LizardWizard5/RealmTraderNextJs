
import { getTrades, createTrade } from "@/app/lib/databaseCalls";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { createRandomString } from "@/app/lib/useful";
import trade from "@/app/lib/Schema/trade";

export async function GET(request) {
    const trades = await getTrades();
    return new Response(JSON.stringify(trades), {
        headers: { "Content-Type": "application/json" },
    });
}


export async function POST(request, res) {

    const session = await getServerSession(authOptions);
    let tradeItems = null;
    let formData = null;
    if (!session) {
        return new Response(JSON.stringify({ status: "400", message: 'Log in to Create Trade' }));
    }
    console.log(session);

    try{
        formData = await request.formData();
    }
    catch (error) {
        return new Response(JSON.stringify({ status: "400", message: "Error! Formdata failed to parse." }));
    }
    
    console.log(formData);
    let selling = [];
    let buying = [];
    try{
        tradeItems = formData.getAll("tradeItems");
    }
    catch (error) {
        return new Response(JSON.stringify({ status: "400", message: "Something went wrong, please ensure both sides have items and you are signed in." }));
    }

    
    let sellingTags = [];
    let buyingTags = [];


    for (let i = 0; i < tradeItems.length; i++) {
        let item = JSON.parse(tradeItems[i]);
        if (item.selling) {
            sellingTags.push.apply(sellingTags, item.tags);
            selling.push(item);
        }
        else {
            buyingTags.push.apply(buyingTags, item.tags);
            buying.push(item);
        }
    }

    //Check if items exist in both trading and tradingFor.
    if (selling.length === 0 || buying.length === 0) {
        return new Response(JSON.stringify({ status: "400", message: "Trade must have at least one item in each section" }));
    }

    //Check if there are duplicate items like one item in both selling and buying.
    for(let x =0;x<buying.length;x++){
        for(let y=0;y<selling.length;y++){
            if (buying[x].id === selling[y].id){
                return new Response(JSON.stringify({ status: "400", message: "Trade cannot have the same item on both sides." }));
            }
        }
    }
   
    //Piece together the trade object.
    let isSeasonal = formData.get("isSeasonal") === "on" ? true : false;
    let finalTrade = {
        trader: session.user.discordId,
        time: new Date(8.64e15).toString(),
        trading: selling,
        tradingFor: buying,
        buyingTags: [...new Set(buyingTags)],
        sellingTags: [... new Set(sellingTags)],
        isSeasonal: isSeasonal,
        uid: createRandomString(5),
    }
    await createTrade(finalTrade);

    return new Response(JSON.stringify({ status: "200", message: "Trade Created." }));

}

