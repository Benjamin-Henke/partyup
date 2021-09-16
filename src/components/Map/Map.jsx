import React, {useState} from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

export default function map() {
    // Currently set to Overland Park, KS. Would like to use users location in future
    const [viewport, setViewport] = useState({
        latitude: 38.984764,
        longitude: -94.677658
    })

    return (
        <>
            <ReactMapGL>
                Hello
            </ReactMapGL>
        </>
    )
}