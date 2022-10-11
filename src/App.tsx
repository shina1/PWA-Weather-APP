import React, { useState } from 'react';
import './App.css';
import WeatherComponent from './components/WeatherComponent';

function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState({})
  return (
    <>
        <WeatherComponent search={search} setSearch={setSearch} data={data} setData={setData}/>
    </>
  );
}

export default App;
