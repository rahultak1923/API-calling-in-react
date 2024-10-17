import { useEffect, useState } from 'react';
import './App.css';
import { getPosts } from './api';
import Randomuser from './components/Randomuser';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts.results[0])); // Expecting results[0] to be an object
  }, []);

  return (
    <div>
      {/* one step the ki data yahi html se show karana hai to  */}
      {data ? (
        <h2>{data.gender}</h2>
      ) : (<p>no data </p>)}




      {data ? (
        <Randomuser gender={data.gender} />
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

export default App;
