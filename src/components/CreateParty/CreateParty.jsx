import './CreateParty.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function CreateParty() {
    // Variables used for React hooks
    const history = useHistory();
    const dispatch = useDispatch();

    // States used to concatenate date + time for database
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

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
        experience: '',
        dateTime: ''
    })

    // Handles inputs from the user
    const handleInputChange = (e) => {
        setNewParty({
            // Spread-operator. Handles all user inputs
            ...newParty, [e.target.name]: e.target.value,
        });
    } // end handleInputChange

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Date', date);
        console.log('Time', time);
        let momentObj = moment(date + time, 'DD.MM.YYYY HH:mm');
        let dateTime = momentObj.format('DD.MM.YYYY HH:mm')
        console.log(dateTime);
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
                <br />
                <button onClick={cancelBtn}>Cancel</button>
            </form>
        </div>
    )
}