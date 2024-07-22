import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (API) => {
  const [data,setData] = useState(null);
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(true);

  const fetchingData = () => {
    setTimeout(async () => {  //tidak disarankan ini hanya sekedar untuk manipulasi component dalam fetching API. untuk real impemlntation lebih baik fetching api distate managament global like redux,zuxtand dll agar state dapat digunakan dibanyak component.   
      try {
        const res = await axios.get(API);
        if(res.status !== 200){
          throw new Error(true);
        }
        setData(res.data)
      
      } catch (error) {
      setError(error);
    } finally{
      setLoading(false);
    }
  }, 1000)
  }

  useEffect(() => {
    fetchingData();
    console.log('fetching');
  },[])

  return {
    data,
    error,
    loading
  }
}
 
export default useFetch;