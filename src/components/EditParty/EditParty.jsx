import { useSelector } from "react-redux";

export default function EditParty({party}) {
    // Grab the party to be edited from myParties.reducer
    const partyToEdit = useSelector(store => store.myPartiesReducer)
    console.log('Editing Party', partyToEdit);
    return (
        <div>
            Let's edit {partyToEdit.board_game}
        </div>
    )
}