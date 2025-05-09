'use client';
import React from "react";
import RequestTrade from "./RequestTrade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";


export default function Trades(trades) {
    const { data: session, status } = useSession();
    const [allTrades, setAllTrades] = React.useState([]);//Base array just to store all trades
    const [modifiableTrades, setModifiableTrades] = React.useState([]);//Array to store trades that can be modified by filters
    const [displayedTrades, setDisplayedTrades] = React.useState([]);//Array to store trades that will be used for the page system
    const [page, setPage] = React.useState(1);
    const pageSize = 15;
    const [disableAllButtons, setDisableAllButtons] = React.useState(false);
    

    React.useEffect(() => {
        async function fetchData() {
            let response;
            let data;
            if(trades.trades){
                data = trades.trades;

            }
            else{
                response = await fetch("/api/trades");
                data = await response.json();
            }
            console.log("Later..");
            console.log(data);
            setAllTrades(data);
            // Set the initial page of trades
            setModifiableTrades(data);
            setDisplayedTrades(data.slice(0, pageSize));
        }
        fetchData();
    }, []);


    function handleFilter() {
        let filteredTrades = [];
        let filterCheckboxes = document.getElementsByClassName("tradeFilterCheckbox");
        let filterTags = [];

        for (let x = 0; x < filterCheckboxes.length; x++) {
            if (filterCheckboxes[x].checked) {
                filterTags.push(filterCheckboxes[x].name);

            }
        }

        if (filterTags.length === 0) {
            setModifiableTrades(allTrades);
            setPage(1);
            setDisplayedTrades(allTrades.slice(0, pageSize));
            return;
        }
        else if ((filterTags.includes("buying") && filterTags.length === 1)) {
            setModifiableTrades(allTrades);
            setPage(1);
            setDisplayedTrades(allTrades.slice(0, pageSize));
            return;
        }

        if (filterTags.includes("buying")) {
            for (let i = 0; i < allTrades.length; i++) {
                for (let y = 0; y < allTrades[i].buyingTags.length; y++) {
                    if ((filterTags.includes(allTrades[i].buyingTags[y])) || (filterTags.includes("seasonal") && allTrades[i].isSeasonal)) {
                        filteredTrades.push(allTrades[i]);
                        break;
                    }
                }
            }
        }
        else {
            for (let i = 0; i < allTrades.length; i++) {
                for (let y = 0; y < allTrades[i].sellingTags.length; y++) {
                    if (filterTags.includes(allTrades[i].sellingTags[y])) {
                        filteredTrades.push(allTrades[i]);
                        break;
                    }
                }
            }
        }

        setModifiableTrades(filteredTrades);
        setPage(1);
        setDisplayedTrades(filteredTrades.slice(0, pageSize));
    }

    function handlePageChange(number) {
        if (page + number > Math.ceil(modifiableTrades.length / pageSize) || page + number == 0) {
            return;
        }
        const nextPage = page + number;
        setPage(nextPage);
        const startIndex = (nextPage - 1) * pageSize;
        const endIndex = nextPage * pageSize;
        // Slice the allTrades array to get the trades for the next page
        setDisplayedTrades(modifiableTrades.slice(startIndex, endIndex));
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="w-1/5 m-5 " key="filter">

                <div className="text-center mb-6 flex flex-col" >
                    {

                        session && <a href="/trades/create" className='bg-header hover:bg-gray-700 text-white font-bold py-2 px-4  w-full mb-2'>Create Trade</a>

                    }


                    <div>
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
                                    <img alt="mystery stat potion icon" className="icon" src="/seasonal-icon.png" />
                                    <a className="ml-2">Seasonal</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="seasonalCheckbox" name="seasonal" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="mystery stat potion icon" className="icon" src="/items/mystery-potion.png" />
                                    <a className="ml-2">Stat pots</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="statPotsCheckbox" name="stat potion" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="greater mystery stat potion icon" className="icon" src="/items/greater-potion-rainbow-potion.png" />
                                    <a className="ml-2">Greater Stat pots</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="greaterStatPotsCheckbox" name="greater potion" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="Mystery heavy armour icon" className="icon" src="/items/mystery-heavy-armor.png" />
                                    <a className="ml-2">Heavy Armours</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="heavyArmoursCheckbox" name="heavy armor" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="Mystery light armour icon" className="icon" src="/items/mystery-light-armor.png" />
                                    <a className="ml-2">Light Armours</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="lightArmoursCheckbox" name="light armor" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="Mystery robe icon" className="icon" src="/items/mystery-robe-armor.png" />
                                    <a className="ml-2">Robes</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="robesCheckbox" name="robe" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="Mystery ring icon" className="icon" src="/items/mystery-ring.png" />
                                    <a className="ml-2">Rings</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="ringsCheckbox" name="ring" value="yes" />
                                </div>
                                <div className="flex flex-row items-center mb-4">
                                    <img alt="Mystery shield icon" className="icon" src="/items/mystery-shield.png" />
                                    <a className="ml-2">Abilities</a>
                                    <input type="checkbox" className="tradeFilterCheckbox ml-auto" id="abilitiesCheckbox" name="ability" value="yes" />
                                </div>
                            </div>
                            <div className="justify-center">
                                <button className="bg-header hover:bg-gray-700 text-white font-bold py-2 px-4 m-2 w-11/12" onClick={() => handleFilter()}>
                                    Filter
                                </button>
                            </div>

                        </div>

                       
                    </div>

                    
                    
                </div>
            </div>
            <div className="w-3/5 mt-5 " key="tradeCards">
                <div className="flex flex-row justify-evenly mb-2">

                    <button onClick={() => handlePageChange(-1)}><FontAwesomeIcon icon={faBackward} /></button>
                    <p>Page {page}/{Math.ceil(modifiableTrades.length / pageSize)}</p>
                    <button onClick={() => handlePageChange(1)}><FontAwesomeIcon icon={faBackward} flip="horizontal" /></button>
                </div>

                {displayedTrades.map((trade) => (
                    <div key={trade._id}>
                        <div className='bg-white shadow-md rounded-lg p-6 mb-4' key={trade._id}>

                            <div className='flex flex-row items-center mb-2 flex-nowrap mt-2'>
                                <div className='flex flex-wrap'>
                                    {trade.trading.map((item) => (
                                        <div key={item._id} className='flex items-center mr-4 mb-2'>
                                            <img className='w-10 h-10 mr-2' src={"/items/" + item.imageUrl + ".png"} alt={item.name} />
                                            <p className='text-sm font-medium'>x{item.amount}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className='mx-4 text-lg font-semibold'>for</p>
                                <div className='flex flex-wrap'>
                                    {trade.tradingFor.map((item) => (
                                        <div key={item._id} className='flex items-center mr-4 mb-2'>
                                            <img className='w-10 h-10 mr-2' src={"/items/" + item.imageUrl + ".png"} alt={item.name} />
                                            <p className='text-sm font-medium'>x{item.amount}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='ml-auto'>
                                    <RequestTrade
                                        tradeId={trade._id}
                                        disableAllButtons={disableAllButtons}
                                        setDisableAllButtons={setDisableAllButtons}
                                    />

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                {/*<p className="text-gray-500 text-sm mb-2">Buying Tags: {trade.buyingTags.map((tag) => <span className="bg-blue-500 text-white p-1 rounded-lg ml-1">{tag}</span>)}  - Selling Tags: {trade.sellingTags.map((tag) => <span className="bg-blue-500 text-white p-1 rounded-lg">{tag}</span>)}</p>*/}
                                {trade.isSeasonal ?
                                    <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time.split(" ").splice(0, 3).join(" ")} - <span className="bg-blue-500 text-white p-1 rounded-lg">Seasonal</span></p>
                                    : 
                                    <p className='text-gray-500 text-sm'>{trade.uid} - {trade.time.split(" ").splice(0, 3).join(" ")} </p>}

                            </div>

                        </div>
                    </div>
                ))}
                <div className="flex flex-row justify-evenly mb-2">

                    <button onClick={() => handlePageChange(-1)}><FontAwesomeIcon icon={faBackward} /></button>
                    <p>Page {page}/{Math.ceil(allTrades.length / pageSize)}</p>
                    <button onClick={() => handlePageChange(1)}><FontAwesomeIcon icon={faBackward} flip="horizontal" /></button>
                </div>
            </div>
        </div>
    );
}
