import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function RecentPosts () {
    // Set hook variables
    const dispatch = useDispatch();

    // Fetch on page load. Calls api/my_parties to get data
    useEffect(() => {
        fetchRecentParties();
    }, []); // end useEffect

    const fetchRecentParties = () => {
        dispatch({
            type: "FETCH_RECENT_POSTS"  // recentPosts.saga
        })
    }

    return (
        <div>
            Will map through recent posts here 
        </div>
    )
}