import { useState } from "react";
import { useSelector } from "react-redux";

export default function EditParty({party, index}) {
    // Grab the party to be edited from myParties.reducer
    const partyToEdit = useSelector(store => store.myPartiesReducer)
    console.log('Editing Party', partyToEdit);

    // Variable used for conditional rendering
    const [editParty, setEditParty] = useState(true);

    // Called when the edit button is clicked on individual cards
    // Will send user to Edit Party Page
    const editThisParty = (party) => {
        console.log('Editing Party', party);
        dispatch({
            type: "EDIT_THIS_PARTY",
            payload: party
        })
    } // end editParty


    return (
        <div>
            <input
                type="text"
                placeholder={party.board_game}
            />
            <input
                type="number"
                placeholder={party.number_of_players}
            />
            <select name="experience">
                <option>Selected: {party.experience}</option>
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
            <button onClick={() => { toggleEditParty() }}>Back</button>
            <button onClick={() => editThisParty(party)}>Save</button>
        </div>
    )
};