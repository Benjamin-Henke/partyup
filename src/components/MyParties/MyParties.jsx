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
                                 <button onClick={() => toggleEditParty(party)}>Edit</button>
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