
import { getItems } from "@/app/lib/databaseCalls";

export async function GET(request) {
    const items = await getItems();
    return new Response(JSON.stringify(items), {
        headers: { "Content-Type": "application/json" },
    });

}
