"use client";
import { set } from "mongoose";
import { redirect } from "next/dist/server/api-utils";
import React, {useState} from "react";

import { useSession } from "next-auth/react";

export default function Form() {
    //Get session
    const { data: session, status } = useSession();

    let [buttonValue, setButtonValue] = useState("Submit");
    let [buttonDisabled, setButtonDisabled] = useState(false);

    async function createTrade(formData) {
        if(!session){
            window.location.href = "/api/auth/signin";
            return;
        }
        setButtonValue("Creating Trade...");//Just incase server takes a while to respond

        const res = await fetch("http://localhost:3000/api/trades", {
            method: "POST",
            body: formData,
        });

        const resJson = await res.json();
        
        setButtonValue(resJson.message);
        if(resJson.status === "200"){
            setButtonDisabled(true);
            setTimeout(() => {
                window.location.href = "/trades";
            }, 1000);
        }
       // res.redirect("/trades");
         



    }

    return (
        
        <form id="tradeForm" className="flex flex-col" action={createTrade} >
            <div className="flex flex-row items-center mb-4">
            <label htmlFor="tradeItems" className="mr-1">Seasonal</label>
            <input type="checkbox" id="isSeasonal" name="isSeasonal"></input>
            </div>
            
            <input
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
                disabled={buttonDisabled}
                value={buttonValue}
            />
        </form>
    )
}