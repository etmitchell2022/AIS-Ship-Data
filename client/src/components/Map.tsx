import GoogleMapReact from 'google-map-react';

interface Location {
  lat: number;
  lng: number;
}
interface MapProps {
  center?: Location;
  zoom?: number;
}
const Map: React.FC<MapProps> = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDmK_l9TgYGkl6xLfPyB9YZEo6tSYxrNGg' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 55.6761,
    lng: 12.5683,
  },

  zoom: 8,
};

export default Map;
