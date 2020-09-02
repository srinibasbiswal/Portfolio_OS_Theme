import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
  } from "react-simple-maps";
import {LocationDetails} from './dataComponents/dataSet';
  
function MapComponent(){

    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    return(
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-80, -10, -5],
                scale: 500
            }}
        >
            <ZoomableGroup>
                <Geographies
                    geography={geoUrl}
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                    }
                </Geographies>
                {LocationDetails.map((location, index) => {
                    return(
                        <Annotation
                            subject={[location.longitude, location.latitude ]}
                            dx={location.dx}
                            dy={location.dy}
                            connectorProps={{
                                stroke: "#FF5533",
                                strokeWidth: 3,
                                strokeLinecap: "round"
                            }}
                            fill ="F5F4F6"
                        >
                            <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                            {location.placeName}
                            </text>
                        </Annotation>
                                            
                    )
                })}               
            </ZoomableGroup>
        </ComposableMap>
    )

}

export default MapComponent;