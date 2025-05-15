import { getUserRatings } from "@/app/lib/databaseCalls";

//Ratings system is probably going to be reoworked.
export async function GET(request) {

    let id = null;
    let userRatings = null;
    try{
        id = request.url.split("/")[request.url.split("/").length - 2];
        userRatings = await getUserRatings(id);
    }
    catch (error){
        return new Response(JSON.stringify({status: "400", message: "Error! User not found."}));
    }
    
  
    
    return new Response(JSON.stringify({status: "200", message: userRatings}), {
        headers: { "Content-Type": "application/json" },
    });

}