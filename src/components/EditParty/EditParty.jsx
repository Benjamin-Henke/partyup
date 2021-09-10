import { useSelector } from "react-redux";

export default function EditParty({party}) {
    // Grab the party to be edited from myParties.reducer
    console.log('Editing Party', party);
    return (
        <div>
            Let's edit {party}
        </div>
    )
}