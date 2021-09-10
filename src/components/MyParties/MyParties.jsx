import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router"; 
import './MyParties.css';

import PartiesCard from "../PartiesCards/PartiesCards";


export default function MyParties() {
    // Define hook variables
    const dispatch = useDispatch();
    const history = useHistory();

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

    // Called when the edit button is clicked on individual cards
    // Will send user to Edit Party Page
    const editThisParty = (party) => {
        console.log('Editing Party', party);
        dispatch({
            type: "EDIT_THIS_PARTY",
            payload: party
        })
        history.push(`/edit_party/${party.id}`);
        // dispatch({
        //     type: "FETCH_MY_PARTIES",
        // });
    } // end editParty



    return (
        <div>
            {editParty ?
                <div id="party_cards">
                    {usersParties.map((party, index) => (
                        // {editParty ?""}
                        <PartiesCard party={party} index={index} />
                    ))}
                </div>
            :
                <div id="edit_party_cards" class="card-body">
                    <input
                        type="text"
                        placeholder="Board Game"
                    />
                    <input
                        type="number"
                        placeholder="Number of Players"
                    />
                    <select name="experience">
                        <option>Options:</option>
                        <option value="Novice">Novice</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                    />
                    <input
                        type="date"
                        name="date"
                    />
                    <br />
                    <input
                        type="time"
                        name="time"
                    />
                    <button onClick={()=> {toggleEditParty()}}>Back</button>
                    <button onClick={()=> editThisParty(party)}>Save</button>
                </div>
        }
            
        </div>
    )
}