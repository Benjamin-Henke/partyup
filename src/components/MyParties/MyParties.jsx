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
    // Variable used for conditional rendering
    const [editParty, setEditParty] = useState(true);

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

    // Conditional rendering to let user edit the party on the card
    const toggleEditParty = (party) => {
        setEditParty(!editParty);
        switch (editParty) {
            case true:
                return;
            case false:
                return;
            default:
                return state
        } // end switch statement
    } // end toggleEditParty

    return (
        <div>
            {usersParties.map((party, index) => (
                <div>
                    {editParty ? 
                        <div class="card">
                            <div class="card-body">
                                <PartiesCard party={party} index={index} />
                                <button
                                    name="edit"
                                    onClick={() => { toggleEditParty(party) }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" /></svg>
                                </button>
                            </div>
                           
                        </div>
                    :
                        <div class="card">
                            <div class="card-body">
                                <EditParty party={party} index={index} />
                                <button onClick={()=> toggleEditParty(party)}>Back</button>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}