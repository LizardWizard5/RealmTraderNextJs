import { getUserTrades } from "@/app/lib/databaseCalls";

export async function GET(request) {
    let id = null;
    let trade = null;
    try{
        id = request.url.split("/").pop();
        trade = await getUserTrades(id);
    }
    catch (error){
        return new Response(JSON.stringify({status: "400", message: "Error! User not found."}));
    }
    
    
    return new Response(JSON.stringify({status: "200", message: trade}), {
        headers: { "Content-Type": "application/json" },
    });
}