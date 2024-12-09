

import dbConnect from './database';

import Trade from './Schema/trade';
//import User from './Schema/user';
import item from './Schema/item';


export async function getTrades() {
    await dbConnect();
    const rawTrades = await Trade.find({});
    const trades = JSON.parse(JSON.stringify(rawTrades));
    return trades;
}

export async function getTrade(data) {
    await dbConnect();
    const trade = await Trade.findOne(data);
    return trade;
}



