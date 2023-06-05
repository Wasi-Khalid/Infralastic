import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import SiteCard from "../Client/AssetDevices/SiteCard";
import {getSites} from "@infralastic/global-state";

interface IViewport {
    latitude: number;
    longitude: number;
    zoom: number;
    width: string;
    height: string;
}

interface IMapProps {
    mapboxToken: string;
}

const Map: React.FC<IMapProps> = ({ mapboxToken }) => {
    const MapStyle = "mapbox://styles/mapbox/streets-v9";
    const [location, setLocation] = useState<any>([])
    function fetchSites() {
        const formData: any = {
            company_id: 1
        }
        getSites(formData).then((res) => {
            setLocation(res.data.result.site_details)
        })
    }
    useEffect(() => {
        fetchSites()
    }, [])
    const [viewport, setViewport] = useState<IViewport>({
        latitude: 51.5072,
        longitude: 0.1276,
        zoom: 10,
        width: '100%',
        height: '100%',
    });

    return (
        <ReactMapGL
            mapStyle={MapStyle}
            {...viewport}
            mapboxAccessToken={mapboxToken}
            onMove={(e: any) => setViewport(e.viewState)}
        >
            {location?.map((item: any) => (
                <Marker
                    children={
                        <div>
                            <SiteCard
                                name={item.state_name}
                                image={item.image}
                                address={item.address}
                                total={item.asset_num}
                                site_id={item.site_id}
                            />
                        </div>
                    }
                    longitude={item.longitude}
                    latitude={item.latitude}
                />
            ))}
        </ReactMapGL>
    );
};

export default Map;
