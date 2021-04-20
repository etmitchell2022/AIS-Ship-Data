import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Map from './components/Map';
import Nav from './components/Nav';

import axios from './utils/axios';
import './'

function App() {
  const [portData, setPortData] = useState<any>([]);
  const [shipData, setShipData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('/ports');
      setPortData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Nav />
      {!loading ? <Map portData={portData} /> : <Loader />}
    </div>
  );
}

export default App;
