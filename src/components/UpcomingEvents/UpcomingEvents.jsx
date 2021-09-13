import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
                <div>
                    {events.board_game}
                </div>    
            )}
        </div>
    )
}