import React from 'react';
import GoogleMapReact from 'google-map-react';
import { type Resource } from './components/types';
import './Map.css';

interface MapProps {
  resources: Resource[];
}

const Marker = ({ text }: { text: string }) => (
  <div className="map-marker">
    {text}
  </div>
);

const Map: React.FC<MapProps> = ({ resources }) => {
  const defaultProps = {
    center: {
      lat: 29.7604, // Houston, TX
      lng: -95.3698
    },
    zoom: 10
  };

  return (
    <div className="map-container">
      <h2>Resource Locations</h2>
      <div className="map-view">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }} // Add your API key here
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {resources.map((resource, index) => (
            <Marker
              key={index}
              lat={resource.lat}
              lng={resource.lng}
              text={resource.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;