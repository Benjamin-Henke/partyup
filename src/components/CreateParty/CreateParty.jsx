import './CreateParty.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

export default function CreateParty() {
    // Variables used for React hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // Store user inputs into one local state variable
    const [newParty, setNewParty] = useState({
        boardGame: '',
        location: '',
        numberOfPlayers: '',
        experience: '',
        date: '',
        time: ''
    })

    // Handles inputs from the user
    const handleInputChange = (event) => {
        setNewParty({
            // Spread-operator. Handles all user inputs
            ...newParty,
            [event.target.name]: event.target.value,
        });
    } // end handleInputChange

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('New Party', newParty);
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
                    <option disabled>Experience</option>
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
                    value={newParty.date}
                    onChange={handleInputChange}
                />
                <br />
                <input 
                    type="time" 
                    placeholder="Time"
                    name="time" 
                    value={newParty.time}
                    onChange={handleInputChange}
                />
                <br />
                <button type="submit">Create</button> 
                <br />
                <button onClick={cancelBtn}>Cancel</button>
            </form>
        </div>
    )
}