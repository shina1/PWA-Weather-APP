import React from 'react'
import { getWeather } from '../API/api.getwaether';
import './style.css'
import WeatherDisplayUIComponent from './WeatherDisplayUIComponent';

type WeatherComponentProps = {
    search:string,
    data: any,
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setSearch:React.Dispatch<React.SetStateAction<string>>,
    setData:  React.Dispatch<React.SetStateAction<{}>>
}

const WeatherComponent = ({search, data, setData,setSearch, error, setError}:WeatherComponentProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    const performSearch = async (e: { key: string; }) => {
        let result;
        if(e.key === 'Enter'){
            const searchData = await getWeather(search);
            // setData(searchData);
            result = {searchData}
            // console.log('search data', result.searchData.message
            // );
            if(result.searchData.message){
                setError(true);
                setSearch('');
                
            }
            
            setData(searchData);
            setSearch('');
        }
        setError(false)
    }
    
  return (
    <section className="main-container">
      <input type="text" className='search' placeholder='search...' value={search} onChange={(e)=> handleChange(e)}
      onKeyDown={performSearch}
      />
      <WeatherDisplayUIComponent data={data} error={error}/>
    </section>
  )
}

export default WeatherComponent
