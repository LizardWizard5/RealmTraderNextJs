
import { getUserById } from "@/app/lib/databaseCalls";


export async function GET(request){
    let id = null;
    let user = null;
    try{
        id = request.url.split("/").pop();
        user = await getUserById(id);
    }
    catch (error){
        return new Response(JSON.stringify({status: "400", message: "Error! User not found."}));
    }
    

    //Sensor discord info - discordid, email, username
    user.discordId = null;
    user.email = null;
    user.username = null;


  
    
    return new Response(JSON.stringify({status: "200", message: user}), {
        headers: { "Content-Type": "application/json" },
    });
}