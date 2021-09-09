import './CreateParty.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function CreateParty() {
    // Variables used for React hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Handle date input
    const handleDateChange = (e) => {
        setDate(e.target.value)
    } // end handleDateChange

    // Handle time input
    const handleTimeChange = (e) => {
        setTime(e.target.value)
    } // end handleDateChange

    // Store user inputs into one local state variable
    const [newParty, setNewParty] = useState({
        boardGame: '',
        location: '',
        numberOfPlayers: '',
        experience: ''
    })

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    let createdParty = {};

    // Handles inputs from the user
    const handleInputChange = (e) => {
        // Grab user information
        setNewParty({
            // Spread-operator. Handles all user inputs
            ...newParty, [e.target.name]: e.target.value,
        });
    } // end handleInputChange

    // Handles when form is submitted via Create button
    const onSubmit = (e) => {
        e.preventDefault(e);

        let momentObj = moment(date + time, 'YYYY-MM-DD HH:mm').format();
        console.log(momentObj);

        createdParty = {
            boardGame: newParty.boardGame,
            location: newParty.location,
            numberOfPlayers: newParty.numberOfPlayers,
            experience: newParty.experience,
            dateTime: momentObj
        }

        console.log(createdParty);

        dispatch({
            type: "NEW_PARTY_CREATED",
            payload: createdParty
        })

        // Push user to My Parties
        history.push('/dashboard'); // NEED TO CHANGE ONCE COMPONENT IS MADE
    }

    // Handles cancel button. Pushes user back to Dashboard
    const cancelBtn = () => {
        history.push('/dashboard');
    } // end cancelBtn

    return (
        <div className="createPartyContainer">
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Board Game" 
                    name="boardGame" 
                    value={newParty.boardGame}
                    onChange={handleInputChange}
                />  
                <br />
                <input
                    type="number"
                    placeholder="Number of Players"
                    name="numberOfPlayers"
                    value={newParty.numberOfPlayers}
                    onChange={handleInputChange}
                />
                <br />
                <select name="experience" onChange={handleInputChange}>
                    <option>Experience</option>
                    <option value="Novice">Novice</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
                <br />
                <input 
                    type="text" 
                    placeholder="Address, City, State, Zip"
                    name="location"
                    value={newParty.location}
                    onChange={handleInputChange}
                />
                <br />
                <input 
                    type="date" 
                    placeholder="Date" 
                    name="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <br />
                <input 
                    type="time" 
                    placeholder="Time"
                    name="time" 
                    value={time}
                    onChange={handleTimeChange}
                />
                <br />
                <button type="submit">Create</button> 
                <button onClick={cancelBtn}>Cancel</button>
            </form>
        </div>
    )
}