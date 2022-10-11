import React from 'react'
import { getWeather } from '../API/api.getwaether';
import './style.css'

type WeatherComponentProps = {
    search:string,
    data: object,
    setSearch:React.Dispatch<React.SetStateAction<string>>
    setData:  React.Dispatch<React.SetStateAction<{}>>
}

const WeatherComponent = ({search, data, setData,setSearch}:WeatherComponentProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    const performSearch = async (e: { key: string; }) => {
        if(e.key === 'Enter'){
            const searchData = await getWeather(search);
            setData(searchData);
            setSearch('');
        }
    }
    
  return (
    <section className="main-container">
      <input type="text" className='search' placeholder='search...' value={search} onChange={(e)=> handleChange(e)}
      onKeyDown={performSearch}
      />
    </section>
  )
}

export default WeatherComponent
