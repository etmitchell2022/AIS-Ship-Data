import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PortMarker from './PortMarker';
import PortInfo from './PortInfo';

interface Location {
  lat: number;
  lng: number;
}
interface MapProps {
  center?: Location;
  zoom?: number;
  key?: string;
  portData: number[] | string[];
}

const Map: React.FC<MapProps> = ({ center, zoom, portData }) => {
  const [portLocationInfo, setPortLocationInfo] = useState<any>(false);

  const portMarkers = portData.map((port: any) => {
    return (
      <PortMarker
        key={port._id}
        lat={port.latitude}
        lng={port.longitude}
        onClick={() =>
          setPortLocationInfo({
            id: port._id,
            location: port.port_location,
            latitude: port.latitude,
            longitude: port.longitude,
          })
        }
      />
    );
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API || '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {portMarkers}
      </GoogleMapReact>
      {portLocationInfo && <PortInfo info={portLocationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 55.6761,
    lng: 12.5683,
  },
  zoom: 8,
  key: '',
};

export default Map;
