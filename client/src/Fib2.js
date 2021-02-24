import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getValues,fetchIndexes,setItem} from './api';



function Fib2(props) {
    const [values, setValues] = useState([]);
    const [seenIndexes, setSeenIndexes] = useState([]);
    const[index, setIndex] = useState('');

    useEffect(() => {
    let mounted = true;
    getValues()
      .then(values => {
        if(mounted) {
            console.log(values);
            setValues( values.data);
        }
      })
    return () => mounted = false;
  }, []);

  useEffect(() => {
    let mounted = true;
    fetchIndexes()
      .then(values => {
        if(mounted) {
         //   console.log(values);
            setSeenIndexes(values.data);
            console.log(seenIndexes);
        }
      })
    return () => mounted = false;
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(index)
    setIndex('');
  };

   const renderSeenIndexes =() => {
    return seenIndexes.map(({ number }) => number).join(', ');
  }

  const renderValues =() => {
    const entries = [];

    for (let key in values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {values[key]}
        </div>
      );
    }

    return entries;
  }



    return (<div><h1>Hello World</h1>
    
    <form onSubmit={handleSubmit}>
        <label>
          <p>New Item</p>
          <input type="text" onChange={event => setIndex(event.target.value)} value={index} />
        </label>
        <button type="submit">Submit</button>
      </form>
    <h1> {renderSeenIndexes()}</h1>
    <h1>{renderValues()}</h1>
  
    
    </div>);

    //    const fetchValues = () => {
    //     const values = await axios.get('/api/values/current');

    //   }

    //   const fetchIndexes = () => {
    //     const seenIndexes = await axios.get('/api/values/all');

    //   }

}



export default Fib2;