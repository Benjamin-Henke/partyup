import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 


export default function MyParties() {
    // Define hook variables
    const dispatch = useDispatch();
    const usersParties = useSelector(store => store.myPartiesReducer);
    console.log('My Parties', usersParties[0]);

    // Fetch on page load. Calls api/my_parties to get data
    useEffect(() => {
        fetchParties();
    }, []); // end useEffect

    const fetchParties = () => {
        dispatch({
            type: "FETCH_MY_PARTIES"
        });
    } // end fetchParties

 

    return (
        <div>
            {usersParties.map((party, index) => (
                <h1 key={index}>{party.board_game}</h1>
            ))}
        </div>
    )
}