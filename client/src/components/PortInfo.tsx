import React from 'react';

interface PortProps {
  info: any;
}

const PortInfo: React.FC<PortProps> = ({ info }) => {
  return (
    <div className='port-info'>
      <h2>Port Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          Location: <strong>{info.location}</strong>
        </li>
        <li>
          Latitude: <strong>{info.latitude}</strong>
        </li>
        <li>
          Longitude: <strong>{info.longitude}</strong>
        </li>
      </ul>
    </div>
  );
};

export default PortInfo;
