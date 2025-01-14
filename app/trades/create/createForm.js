"use client";
import { set } from "mongoose";
import React, {useState} from "react";
export default function Form() {

    let [buttonValue, setButtonValue] = useState("Submit");
    let [buttonDisabled, setButtonDisabled] = useState(false);

    async function createTrade(formData) {
        setButtonValue("Creating Trade...");
        setButtonDisabled(true);

        const res = await fetch("http://localhost:3000/api/trades", {
            method: "POST",
            body: formData,
        });

        const resJson = await res.json();
        console.log(resJson);
        setButtonValue(resJson.message);
         



    }

    return (
        <form id="tradeForm" className="" action={createTrade} >
            <input
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition"
                disabled={buttonDisabled}
                value={buttonValue}
            />
        </form>
    )
}