import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Header from "./components/Header/Header"
import MovieCard from "./components/MovieCard/MovieCard";
import SearchBox from "./components/SearchBox/SearchBox";
import { getMovies } from "./features/movies/movieSlice";

function App() {
  const {darkTheme,movies} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search,setSearch] = useState("")
  useEffect(()=>{
    dispatch(getMovies())
  },[dispatch])
  const searchMovies = movies.data?.results.filter(movie => {
    if(!search.length) return movie;
    if(!movie.title) return;
    return movie.title.toLowerCase().includes(search)
  });
  return (
    <div className={`${darkTheme ? 'dark' : ''}`}>
      <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
      <Header/>
      <div className="mb-12 flex items-center justify-between">
        <SearchBox setSearch={setSearch}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {
        searchMovies &&  searchMovies.map(
          (movie) => {
            const {id,backdrop_path,title,overview} = movie;
            return <MovieCard 
            key={id} 
            poster_path={"https://image.tmdb.org/t/p/original"+backdrop_path} 
            title={title} 
            overview={overview}/>
          }
        )
      }
           </div>
      </div>
    </div>
  )
}

export default App
