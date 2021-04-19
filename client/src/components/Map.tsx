import GoogleMapReact from 'google-map-react';

interface Location {
  lat: number;
  lng: number;
}
interface MapProps {
  center?: Location;
  zoom?: number;
  key?: string;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API || '' }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
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
