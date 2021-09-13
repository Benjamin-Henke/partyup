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
        setNewParty({
            boardGame: '',
            location: '',
            numberOfPlayers: '',
            experience: ''
        });
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
                <button className="createButton" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                    </svg>
                    <br />
                    Create</button>
                <button className="createButton" onClick={cancelBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                    <br/ >
                    Cancel</button>
            </form>
        </div>
    )
}