import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 


export default function MyParties() {
    // Define hook variables
    const dispatch = useDispatch();
    const myParties = useSelector(store => StorageEvent.myPartiesReducer)

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
            Look at my parties!
        </div>
    )
}