import './CreateParty.css';
import { useHistory } from 'react-router';

export default function CreateParty() {
    const history = useHistory();

    const cancelBtn = () => {
        history.push('/dashboard');
    }

    return (
        <div className="createPartyContainer">
            <input type="text" placeholder="Board Game" /> 
            
            <br />

            <input type="text" placeholder="Location" /> 
            
            <br />

            <input type="number" placeholder="Number of Players" /> 

            <br />

            <select name="Experience">
                <option disabled>Experience</option>
                <option value="saab">Novice</option>
                <option value="mercedes">Intermediate</option>
                <option value="audi">Expert</option>
            </select> 
            
            <br />

            <input type="date" placeholder="Date" />
            
             <br />

            <input type="time" placeholder="Time" />
            
             <br />

            <button>Create</button> 

            <br />

            <button onClick={cancelBtn}>Cancel</button>
        </div>
    )
}