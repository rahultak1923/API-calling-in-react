import { useEffect, useState } from 'react';
import './App.css';
import { getPosts,getData } from './api';
import Randomuser from './components/Randomuser';
// second user data fetch 



function App() {
  const [data, setData] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts.results[0])); // Expecting results[0] to be an object
  }, []);

  useEffect(()=>{
    getData().then((user)=>console.log(user))
  },[])

  return (
    <div>
{/* one step the ki data yahi html se show karana hai to  */}
      {data ? (
        <h2>{data.gender}</h2>
      ) : (<p>no data </p>)}

{/* data ko props ke send kar ne ka ak tarika step one  */}
      {data ? (
        <Randomuser gender={data.gender} />
      ) : (
        <p>Loading...</p>
      )}




{/* data ko props ke send kar ne ka second tarika step second  */}
{/* single data ke liye data.map() function use nhi hota hai - agar api me single user ka data hi hai to data.map function use nhi hota hai  */}
{/* {data ? data.map((e)=> <Randomuser gender={e.gender} />):(<p>no data forund</p>)}  */}
    </div>
  );
}

export default App;
