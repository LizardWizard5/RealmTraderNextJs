'use server';
import React from "react";

import { getTradeById } from "@/app/lib/databaseCalls";


export default async function page(props) {

    const trade = await getTradeById(props.params.id);
    console.log(trade);


    return(
        <p>{trade}</p>
    )

}