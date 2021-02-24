import axios from 'axios';

export async function  getValues() {
    const values = await axios.get('/api/values/current');
    return values;
  }

  
export async function  fetchIndexes() {
    const values = await axios.get('/api/values/all');
    return values;
  }


  export async function setItem(index){
   

    await axios.post('/api/values', {
      index: index
    });
    
  };
 
  
