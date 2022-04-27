import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";

const api='https://omdbapi.com?apikey=f5413fa8';


const Home = () => {

    const [myMovie,setMyMovie]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');
    const searchMovies= async (title) => {
        const response= await fetch(`${api}&s=${title}`);
        const data= await response.json();
        const movie= data.Search;
        const movies=movie[1];
        const newMovies=movie.filter((actionmovies)=>actionmovies.Year==="2012");
        const oldMovies=movie.filter((inm)=>inm.Genre==="action");
        
        /* the console logs are testings */
        console.log(data.Search); 
        console.log(movie);
        console.log(movies);
        console.log(newMovies);
        console.log(oldMovies);
        setMyMovie(movie);
    }

    useEffect(()=>{
        searchMovies('divergent');
    },[]);
    return ( 
        <div className="home" >
            <div className="search">
               <label>Search</label>
               <div className="inputgroup">
                  <input placeholder="search for movies" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} onInput={()=>searchMovies(searchTerm)}/>
               </div>
            </div>
            <div className="moviecat">
               <h3>New</h3>
               <div className="card">
                   {myMovie.map((newmoves)=> <Moviecard newmoves={newmoves}/>)}
               </div>
            </div>
            <div className="moviecat">
                <h3>old</h3>
                <div className="card">
                    {myMovie.map((newmoves)=> <Moviecard newmoves={newmoves} />)}
               </div>
            </div>
        </div>
     );
}
 
export default Home;