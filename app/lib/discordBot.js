'use server';
import Discord from 'discord.js';
import {getTradeById} from './databaseCalls';
const client = new Discord.Client({ intents: [Discord.GatewayIntentBits.DirectMessages] });
const token =  process.env.BOT_TOKEN;

client.login(token); 

export async function sendTradeAlert(tradeId,message){
    let trade = getTradeById(tradeId);
    client.users.send(`${trade.trader}', 'Hey Trader! Someone is interested in your trade(lizardwizard.ca/trade/view/${req.body.tradeId})! Please reach out to them here: ${req.user.discordUsername}`);

}
export async function sendMessage(userId,message){
    client.users.send(userId,message);
   
}
