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
          latitude: company?.latitude,
          longitude: company?.longitude,
        }));
      }
    }, [query, location]);

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
          {location?.map((item: any) => {
            const longitude = (item?.longitude !== '') ? parseFloat(item.longitude) : 0;
            const latitude = (item?.latitude !== '') ? parseFloat(item.latitude) : 0;

            return (
              <Marker
                key={item?.company_id}
                longitude={longitude}
                latitude={latitude}
              >
                <div>
                  <SiteCard
                    name={item?.company_name}
                    image={item?.image_url}
                    address={'Lorem Ipsum'}
                    total={item?.company_assets.length}
                    company_id={item?.company_id}
                  />
                </div>
              </Marker>
            );
          })}
        </ReactMapGL>
    );
};

export default Map;
