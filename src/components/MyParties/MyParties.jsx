import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 


export default function MyParties() {
    // Define hook variables
    const dispatch = useDispatch();
    const myParties = useSelector(store => store.myPartiesReducer);

    // Fetch on page load. Calls api/my_parties to get data
    useEffect(() => {
        fetchParties();
    }, []); // end useEffect

    const fetchParties = () => {
        dispatch({
            type: "FETCH_MY_PARTIES"
        });
    } // end fetchParties

    console.log('My Parties', myParties);

    return (
        <div>
            {/* {myParties.myParties((party) => (
                <h1>{party.board_game}</h1>
            ))} */}
        </div>
    )
}