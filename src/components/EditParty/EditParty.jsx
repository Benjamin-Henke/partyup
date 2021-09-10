import { useSelector } from "react-redux";

export default function EditParty({party}) {
    // Grab the party to be edited from myParties.reducer
    const partyToEdit = useSelector(store => store.myPartiesReducer)
    console.log('Editing Party', partyToEdit);
    return (
        <div>
            <input 
                type="text"
                placeholder={partyToEdit.board_game}
            />
            <input
                type="number"
                placeholder={partyToEdit.number_of_players}
            />
            <select name="experience">
                <option>Previously: {partyToEdit.experience}</option>
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
            <input
                type="text"
                placeholder={partyToEdit.location}
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
        </div>
    )
};