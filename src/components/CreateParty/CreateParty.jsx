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

        // Clear user data
        setDate('');
        setTime('');
        setNewParty({});
    }

    // Handles cancel button. Pushes user back to Dashboard
    const cancelBtn = () => {
        history.push('/dashboard');
    } // end cancelBtn

    return (
        <div className="createPartyContainer">
            <form onSubmit={onSubmit}>
                <input className="createForm"
                    type="text" 
                    placeholder="Board Game" 
                    name="boardGame" 
                    value={newParty.boardGame}
                    onChange={handleInputChange}
                    required
                />  
                <br />
                <input className="createForm"
                    type="number"
                    placeholder="Number of Players"
                    name="numberOfPlayers"
                    value={newParty.numberOfPlayers}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <select className="createForm" name="experience" onChange={handleInputChange} required >
                    <option selected disabled value="">Experience</option>
                    <option value="Novice">Novice</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Expert">Expert</option>
                </select>
                <br />
                <input className="createForm"
                    type="text" 
                    placeholder="Address, City, State, Zip"
                    name="location"
                    value={newParty.location}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <input className="createForm"
                    type="date" 
                    placeholder="Date" 
                    name="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
                <br />
                <input className="createForm"
                    type="time" 
                    placeholder="Time"
                    name="time" 
                    value={time}
                    onChange={handleTimeChange}
                    required
                />
                <br />
                <button className="createButton" type="submit">Create</button>
                <button className="createButton" onClick={cancelBtn}>Cancel</button>
            </form>
        </div>
    )
}