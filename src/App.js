//78782b50

import {  useState , useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


function App() {
  const [movies,setMovies]=useState([]);

  const [searchTerm, setsearchTerm]= useState('')


  const API_URL= 'https://www.omdbapi.com/?apikey=78782b50';

  const searchMovies= async(title)=>{
   
  
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
      }
  

  useEffect(()=>{
    searchMovies('mom')
  },[])



  return (
    
    <div className="app">
      <h1>MovieLand</h1>
  
      
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img src={SearchIcon}
          alt='Search'
          onClick={()=>searchMovies(searchTerm)}
        />
      </div>

      <div className='container'>
        {movies?.length>0?(movies.map((movie)=><MovieCard movie={movie} />)):(<h1>No Movies Found...</h1>)}
      </div>


    </div>
  );
}

export default App;
