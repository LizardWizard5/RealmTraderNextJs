'use server';
import Discord from 'discord.js';
import {getTradeById} from './databaseCalls';
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.DirectMessages] });
const token =  process.env.BOT_TOKEN;

client.login(token); 

export async function sendTradeAlert(tradeId) {
    let trade = await getTradeById(tradeId);
    const userId = "266774102373564426";
    const message = `Hey Trader! Someone is interested in your trade! ( https://lizardwizard.ca/trade/view/${tradeId} ) Please reach out to them here: LizardWizard#0001`;

    try {
        await client.users.send(userId, message);
        console.log("Message sent successfully!");
    } catch (error) {
        console.error("Error sending message:", error);
    }
}


export async function sendMessage(userId,message){
    client.users.send(userId,message);
   
}
