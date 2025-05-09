
'use server';
import dbConnect from './database';

import Trade from './Schema/trade';
import User from './Schema/user';
import Item from './Schema/item';
import accountRating from './Schema/accountRating';
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
    const trade = await Trade.findById(id);
    return trade;
}

/**
 * 
 * @param {String} discordId 
 * @returns User
 */
export async function getUserByDiscordId(discordId) {
    await dbConnect();
    const user = await User.findOne({ discordId});
    return user;
}


/**
 * 
 * @param {String} id
 * @returns User
 */
export async function getUserById(id) {
    await dbConnect();
    const user = await User.findById(id);
    return user;
}


export async function getUserTrades(discordId){
    await dbConnect();
    const trades = await Trade.find({trader:discordId});
    
    return trades;
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
    //Create a new user
    const newAccount = await User.create(user)

    let accountRate ={
        accountId:newAccount.id,
        upvotes:0,
        downvotes:0,
    }
    //Now create a new account rating for the user
    await accountRating.create(accountRate);

    return newAccount;
}

export async function getUserRatings(discordId){
    await dbConnect();
    const ratings = await accountRating.findOne({accountId:discordId})
    return ratings;
}
