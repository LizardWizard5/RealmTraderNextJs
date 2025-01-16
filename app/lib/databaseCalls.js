
'use server';
import dbConnect from './database';

import Trade from './Schema/trade';
import User from './Schema/user';
import Item from './Schema/item';

/**
 * 
 * @returns Array of Trades
 */
export async function getTrades() {
    await dbConnect();
    const rawTrades = await Trade.find({});
    const trades = JSON.parse(JSON.stringify(rawTrades));
    return trades;
}

/**
 * 
 * @param {String} id 
 * @returns Trade
 */
export async function getTradeById(id) {
    await dbConnect();
    id = id.toString();
    const trade = await Trade.findOne({id});
    return trade;
}

/**
 * 
 * @param {String} discordId 
 * @returns User
 */
export async function getUser(discordId) {
    await dbConnect();
    const user = await User.findOne({ discordId});
    return user;
}

/**
 * 
 * @returns Array of items
 */
export async function getItems() {
    await dbConnect();
    const rawItems = await Item.find({});
    const items = JSON.parse(JSON.stringify(rawItems));
    return items;
}



//Post

export async function createTrade(trade) {
    await dbConnect();
    await Trade.create(trade)
}

export async function createUser(user) {
    await dbConnect();
    await User.create(user)
}

