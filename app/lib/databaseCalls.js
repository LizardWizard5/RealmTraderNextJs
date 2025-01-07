
'use server';
import dbConnect from './database';

import Trade from './Schema/trade';
import User from './Schema/user';
import item from './Schema/item';


export async function getTrades() {
    await dbConnect();
    const rawTrades = await Trade.find({});
    const trades = JSON.parse(JSON.stringify(rawTrades));
    return trades;
}

export async function getTradeById(id) {
    await dbConnect();
    const trade = await Trade.findOne(id);
    return trade;
    
}

export async function getUser(discordId) {
    await dbConnect();
    const user = await User.findOne({ discordId });
    return user;
}
