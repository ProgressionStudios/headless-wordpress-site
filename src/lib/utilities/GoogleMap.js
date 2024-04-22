"use client";

import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScriptNext, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 38.44766894858549,  // Latitude for 4002 Saddlerock Ct Santa Rosa, CA 95405
    lng: -122.66454458476261 // Longitude for 4002 Saddlerock Ct Santa Rosa, CA 95405
};

const mapStyles = [
    { "featureType": "all", "stylers": [{ "saturation": 0 }, { "hue": "#e7ecf0" }] },
    { "featureType": "road", "stylers": [{ "saturation": -70 }] },
    { "featureType": "transit", "stylers": [{ "visibility": "off" }] },
    { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
    { "featureType": "water", "stylers": [{ "visibility": "simplified" }, { "saturation": -60 }] }
];

const GoogleMapComponent = () => {
    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [markerLoaded, setMarkerLoaded] = useState(false);
    const markerRef = useRef(null);

    const handleMarkerClick = () => {
        setShowInfoWindow(!showInfoWindow);  // Toggle InfoWindow visibility
    };

    useEffect(() => {
        if (markerLoaded) {
            setShowInfoWindow(true);  // Only set to true if marker is loaded
        }
    }, [markerLoaded]);

    const onMarkerLoad = () => {
        setMarkerLoaded(true);  // Set markerLoaded state to true
    };

    return (
        <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                    styles: mapStyles  // Apply custom styles to the map
                }}
            >
                <Marker
                    position={center}
                    onClick={handleMarkerClick}
                    onLoad={onMarkerLoad}
                    ref={markerRef}
                >
                    {showInfoWindow && (
                        <InfoWindow
                            anchor={markerRef.current}
                            onCloseClick={handleMarkerClick}
                        >
                            <div>
                                <h5>Progression Studios</h5>
                                <div>Santa Rosa, CA</div>
                            </div>
                        </InfoWindow>
                    )}
                </Marker>
            </GoogleMap>
        </LoadScriptNext>
    );
}

export default GoogleMapComponent;
