import axios from 'axios';

 const URL = 'https://api.openweathermap.org/data/2.5/weather';

 const API_KEY = 'f33a484cf794d08d0148764789aaba32';
 interface params {
    q: String,
    units: String,
    APPID: String
 }

 export const getWeather = async (query:string) => {
    let res
    try {
         res = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY
            }
        });
    
        return res.data
    } catch (error) {
        // let errorMessage = "Failed to do something exceptional";
        const statusCode = error.response ? error.response.status : null;
        // if (error instanceof Error) {
        //        res = error.message;
        //      }
          if(statusCode === 404) {
            res = new Error(error)
          } 
        return res;
    }
 }