'use client';

import React from "react";

export default function ClientFilterUI() {

    return (
        <div className="flex flex-col bg-white w-100">
            <div className="bg-header">
                <h1 className="text-2xl text-center text-white">Filter Trades</h1>
            </div>
            <div className="flex flex-col p-5">
                <div className="flex flex-row items-center mb-4">
                    <img alt="question mark icon" className="icon" src="/questionmark.png" />
                    <p className="ml-2">Search by buying</p>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="sellingCheckbox" name="buying" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="mystery stat potion icon" className="icon" src="items/mystery-potion.png" />
                    <a className="ml-2">Stat pots</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="statPotsCheckbox" name="stat potion" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="greater mystery stat potion icon" className="icon" src="items/greater-potion-rainbow-potion.png" />
                    <a className="ml-2">Greater Stat pots</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="greaterStatPotsCheckbox" name="greater potion" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="Mystery heavy armour icon" className="icon" src="items/mystery-heavy-armor.png" />
                    <a className="ml-2">Heavy Armours</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="heavyArmoursCheckbox" name="heavy armor" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="Mystery light armour icon" className="icon" src="items/mystery-light-armor.png" />
                    <a className="ml-2">Light Armours</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="lightArmoursCheckbox" name="light armor" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="Mystery robe icon" className="icon" src="items/mystery-robe-armor.png" />
                    <a className="ml-2">Robes</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="robesCheckbox" name="robe" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="Mystery ring icon" className="icon" src="items/mystery-ring.png" />
                    <a className="ml-2">Rings</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="ringsCheckbox" name="ring" value="yes" />
                </div>
                <div className="flex flex-row items-center mb-4">
                    <img alt="Mystery shield icon" className="icon" src="items/mystery-shield.png" />
                    <a className="ml-2">Abilities</a>
                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="abilitiesCheckbox" name="ability" value="yes" />
                </div>
            </div>
            <div className="">
                <button className="bg-header hover:bg-gray-700 text-white font-bold py-2 px-4 m-5 w-11/12">
                    Filter
                </button>
            </div>

        </div>

    )
}
