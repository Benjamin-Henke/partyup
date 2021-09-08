export default function CreateParty() {
    return (
        <div>
            <input type="text" placeholder="Board Game" />
            <input type="text" placeholder="Location" />
            <input type="number" placeholder="Number of Players" />
            <select name="Experience">
                <option disabled>Experience</option>
                <option value="saab">Novice</option>
                <option value="mercedes">Intermediate</option>
                <option value="audi">Expert</option>
            </select>
            <input type="date" placeholder="Date" />
            <input type="time" placeholder="Time" />
            <button>Create</button>
            <button>Cancel</button>
        </div>
    )
}