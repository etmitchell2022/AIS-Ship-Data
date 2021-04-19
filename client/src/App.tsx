import axios from 'axios';
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Nav from './components/Nav';

function App() {
  const [shipData, setShipData] = useState(null);

  return (
    <div className='App'>
      <Nav />
      <Map />
    </div>
  );
}

export default App;
