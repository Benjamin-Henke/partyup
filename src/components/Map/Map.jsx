import React, {useState} from 'react';
import ReactMapGL from 'react-map-gl';

export default function map() {
    // Currently set to Overland Park, KS. Would like to use users location in future
    const [viewport, setViewport] = useState({
        latitude: 38.984764,
        longitude: -94.677658,
        width: '75vw',
        height: '75vh',
        zoom: 10,
    })

    return (
        <>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                
                onViewportChange={viewport => { setViewport(viewport) }}
            ></ReactMapGL>
        </>
    )
} 