import axios from 'axios';
import { useState, useEffect } from 'react';
import Map from './components/Map';

function App() {
  const [shipData, setShipData] = useState(null);

  return (
    <div className='App'>
      <Map />
    </div>
  );
}

export default App;
