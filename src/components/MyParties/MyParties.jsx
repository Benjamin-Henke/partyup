import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import './MyParties.css';


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
                <div className="card" key={index}>
                    <div class="card-body">
                        <h5 class="card-title">{party.board_game}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{party.location}</h6>
                        <p class="card-text">{party.number_of_players} players</p>
                        <p class="card-text">{party.date_time}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}