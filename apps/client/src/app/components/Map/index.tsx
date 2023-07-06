import React, {useEffect, useState} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import SiteCard from "../Client/AssetDevices/SiteCard";
import {fetchAllCompany, getSites, useGlobalDispatch} from "@infralastic/global-state";

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
}

const Map: React.FC<IMapProps> = ({ mapboxToken, query }) => {
    const MapStyle = "mapbox://styles/mapbox/streets-v9";
    const dispatch = useGlobalDispatch();
    const [location, setLocation] = useState<any>([])
    const getCompany = () => {
      const config: any = {}
      try {
        dispatch(fetchAllCompany(config)).then(async (res: any) => {
          setLocation(res.payload.company_details)
        });
      } catch (err: any) {
        console.error(err);
      }
    }

    useEffect(() => {
        getCompany()
    }, [])

    useEffect(() => {
      const company = location.find((item: any) =>
        item.company_name.toLowerCase().includes(query.toLowerCase())
      );

      if (company) {
        setViewport((prevState) => ({
          ...prevState,
          latitude: company.latitude,
          longitude: company.longitude,
        }));
      }
    }, [query]);

    const [viewport, setViewport] = useState<IViewport>({
        latitude: 41.638409,
        longitude: -70.941208,
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
                                name={item?.company_name}
                                image={item?.image_url}
                                address={'Lorem Ipsum'}
                                total={item?.company_assets.length}
                                site_id={item?.site_id}
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
