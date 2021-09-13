import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './UpcomingEvents.css';

export default function RecentPosts () {
    // Set hook variables
    const dispatch = useDispatch();
    // Pull recent 5 searches from database
    // Pulling from upcomingReducer from _rootReducer
    const upcoming = useSelector(store => store.upcomingEvents)

    // Fetch on page load. Calls api/my_parties to get data
    useEffect(() => {
        fetchUpcomingParties();
    }, []); // end useEffect

    const fetchUpcomingParties = () => {
        dispatch({
            type: "FETCH_UPCOMING_EVENTS"  // upcomingEvents.saga
        })
    }

    return (
        <div>
            {upcoming.map((events) => 
                <div class="card">
                    <h5 class="card-header">{events.board_game}</h5>
                    <div class="card-body">
                        <h6 id="loc" class="card-subtitle mb-2 text-muted">{events.location}</h6>
                        <button id="joinBtn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}