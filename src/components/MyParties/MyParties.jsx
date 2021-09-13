import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './MyParties.css';

import PartiesCard from "../PartiesCards/PartiesCards";
import EditParty from "../EditParty/EditParty";


export default function MyParties() {
    // Define hook variables
    const dispatch = useDispatch();

    // Obtain users data to be rendered on the DOM
    const usersParties = useSelector(store => store.myPartiesReducer);

    // Fetch on page load. Calls api/my_parties to get data
    useEffect(() => {
        fetchParties();
    }, []); // end useEffect

    // Handles dispatching event on page load to retrieve database
    const fetchParties = () => {
        dispatch({
            type: "FETCH_MY_PARTIES"
        });
    } // end fetchParties


    return (
        <div>
            {usersParties.map((party, index) => (
                <div className="card">
                    <div class="card-body">
                        <PartiesCard party={party} index={index} />
                    </div>
                </div>
            ))}
        </div>
    )
}