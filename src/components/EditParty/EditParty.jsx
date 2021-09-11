import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';

export default function EditParty({party, index}) {
    // Define hook variables
    const dispatch = useDispatch();

    // Grab the party to be edited from myParties.reducer
    const partyToEdit = useSelector(store => store.myPartiesReducer)
    console.log('Editing Party', partyToEdit);

    // Handle date input
    const handleDateChange = (e) => {
        setDate(e.target.value)
    } // end handleDateChange

    // Handle time input
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    } // end handleDateChange

    // Store user inputs into one local state variable
    const [editedParty, setEditedParty] = useState({
        boardGame: '',
        location: '',
        numberOfPlayers: '',
        experience: ''
    })

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    let newEdits= {};

    // Handles inputs from the user
    const handleInputChange = (e) => {
        // Grab user information
        setEditedParty({
            // Spread-operator. Handles all user inputs
            ...editedParty, [e.target.name]: e.target.value,
        });
    } // end handleInputChange

    // Called when the edit button is clicked on individual cards
    // Will send user to Edit Party Page
    const editThisParty = (party) => {
        let momentObj = moment(date + time, 'YYYY-MM-DD HH:mm').format();
        console.log(momentObj);

        newEdits = {
            id: party.id,
            boardGame: editedParty.boardGame,
            location: editedParty.location,
            numberOfPlayers: editedParty.numberOfPlayers,
            experience: editedParty.experience,
            dateTime: momentObj
        }
        dispatch({
            type: "EDIT_THIS_PARTY",
            payload: newEdits
        })
    } // end editParty


    return (
        <div>
            <input
                type="text"
                placeholder={party.board_game}
                name="boardGame"
                value={editedParty.boardGame}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder={party.number_of_players}
                name="numberOfPlayers"
                value={editedParty.numberOfPlayers}
                onChange={handleInputChange}
            />
            <select name="experience" onChange={handleInputChange}>
                <option>Experience</option>
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
            <input
                type="text"
                placeholder={party.location}
                name="location"
                value={editedParty.location}
                onChange={handleInputChange}
            />
            <input
                type="date"
                name="date"
                value={date}
                onChange={handleDateChange}
            />
            <br />
            <input
                type="time"
                name="time"
                value={time}
                onChange={handleTimeChange}
            />
            <button onClick={() => editThisParty(party)}>Save</button>
        </div>
    )
};