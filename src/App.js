import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css';

const App=()=>{
  const [name,setName]=useState("");  
  return (
    <div className="App">
      <div className="wrapper">
        <div id='search-bar'>
          <input type="text" placeholder='Enter UserName' onChange={(e)=>{setName(e.target.value)}} />
          <button className='searchButton'>
          <Link to={`/users/${name}/repos`}>Search</Link>
          </button>
        </div>
      </div>
    </div> 
  );
}
export default App;