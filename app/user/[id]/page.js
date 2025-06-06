'use client'
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Trades from "@/app/trades/page";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faGavel } from "@fortawesome/free-solid-svg-icons";    
import { useParams } from 'next/navigation';


export default function page() {
    const {id} = useParams();


    let [user, setUser] = React.useState()
    let [ratings, setRatings] = React.useState();
    let [trades, setTrades] = React.useState();
    let [totalRatings,setTotalRatings] = React.useState();

 
       
        

        React.useEffect(() => {
            async function fetchData() {

                const userResponse = await fetch(`/api/user/${id}`);

                console.log(userResponse);
                setUser(await userResponse.json());
                
                const tradesResponse = await fetch(`/api/trades/user/${id}`);
                setTrades(await tradesResponse.json());
                const ratingsResponse = await fetch(`/api/user/${id}/ratings`);
                setRatings(await ratingsResponse.json());

                setTotalRatings(ratings.upvotes + ratings.downvotes);   

                  console.log("ID used to fetch data");
                console.log(id);
                console.log("User data fetched");
                console.log(user);
                console.log("Trades data fetched");
                console.log(trades);
                console.log("Ratings data fetched");
                console.log(ratings);
            }
            fetchData();
        },[])
     
    return(
        <div>
            <p>{id}</p>
            <p>{user}</p>
            <p>{trades}</p>
            <p>{ratings}</p>
            <p>{totalRatings}</p>
            

        </div>
    )
      
 
}


