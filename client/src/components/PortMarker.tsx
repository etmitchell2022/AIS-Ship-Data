import React from 'react';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';

interface markerProps {
  lng: number | undefined;
  lat: number | undefined;
  key: number;
  onClick: any;
}
const LocationMarker: React.FC<markerProps> = ({ lat, lng, onClick }) => {
  return (
    <div onClick={onClick}>
      <LocationOnRoundedIcon color='secondary' fontSize='large' />
    </div>
  );
};

export default LocationMarker;
