import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface IViewport {
  latitude: number;
  longitude: number;
  zoom: number;
  width: string;
  height: string;
}

interface IMapProps {
  mapboxToken: string;
  query: string;
  lat: any;
  lng: any;
  isLoading: boolean;

}

const Map: React.FC<IMapProps> = ({ mapboxToken, lat, lng, isLoading }) => {
  const MapStyle = "mapbox://styles/mapbox/streets-v9";


  const [viewport, setViewport] = useState<IViewport>({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: '100%',
    height: '100%',
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ReactMapGL
      mapStyle={MapStyle}
      {...viewport}
      mapboxAccessToken={mapboxToken}
      onMove={(e: any) => setViewport(e.viewState)}
    >
        <Marker
          longitude={lng}
          latitude={lat}
        />
    </ReactMapGL>
  );
};

export default Map;
