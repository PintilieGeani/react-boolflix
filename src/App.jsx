import { useEffect } from "react"
import { useState } from "react";
import axios from "axios";
import StarComponent from "./components/StarComponent.jsx";
import EmptyStarComponent from "./components/EmptyStarComponent.jsx";

function App() {

  const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a6f5a912f5683b60ae1a2352198efc2d&query=`

  const apiUrlSerie = "https://api.themoviedb.org/3/search/tv?api_key=a6f5a912f5683b60ae1a2352198efc2d&language=it_IT&query="

  const posterSize = "w342"

  const apiKey = "a6f5a912f5683b60ae1a2352198efc2d"
  const [movie, setMovie] = useState([]);
  const [serie, setSerie] = useState([])
  const [cercaMovie, setCercaMovie] = useState("")
  const flags = [
    {
      Lingua: "en",
      img: "/img/united-kingdom.png"
    },
    {
      Lingua: "it",
      img: "/img/italy.png"
    },
    {
      Lingua: "ger",
      img: "/img/germany.png"
    },
  ]

  const gestisciRicerca = () => {
    axios.get(apiUrlMovie + cercaMovie).then((resp) => {
      setMovie(resp.data.results)
    })
    axios.get(apiUrlSerie + cercaMovie).then((resp) => {
      setSerie(resp.data.results)
      console.log(resp.data.results)
    })
  }

  const Stelle = (curMovie) => {
      const voto = curMovie.vote_average
      const nStelle = Math.ceil(voto / 2)
      const nStelleVuote = 5 - nStelle
      console.log(nStelle)
      const stellePiene = new Array(nStelle).fill(<StarComponent/>)
      const stelleVuote = new Array(nStelleVuote).fill(<EmptyStarComponent/>)
      return <><div className="stars">{[stellePiene, ...stelleVuote]}</div></>
  }




  return (
    <>
      <div className="search-bar">
        <input type="text" aria-description="Ricerca" id="ricerca" value={cercaMovie} onChange={(event) => setCercaMovie(event.target.value)} />
        <button onClick={gestisciRicerca}>Cerca il tuo film </button>
      </div>
      {movie.map((curMovie) => (
        <div className="card">
          <div className="card-image">
            {curMovie.poster_path ? (<img src = {"https://image.tmdb.org/t/p/" + posterSize + curMovie.poster_path}/>) : (<p>Immagine non disponibile</p>)}
          </div>
          <div className="card-text">
            <h1>Film </h1> {Stelle(curMovie)}
            <h2>Titolo: {curMovie.title}</h2>
            <h3>Titolo originale: {curMovie.original_title}</h3>
            <p>Lingua: {flags
              .filter((movieToFind) => movieToFind.Lingua === curMovie.original_language)
              .map((curMovie) => (
                <img key={curMovie.Lingua} src={curMovie.img} alt={curMovie.Lingua} />
              ))}
              </p>
            <p>Voto: {curMovie.vote_average}</p>
          </div>
        </div>
      ))}
      {serie.map((curSerie) => (
        <div className="card">
          <div className="card-image">
             {curSerie.poster_path ? (<img src = {"https://image.tmdb.org/t/p/" + posterSize + curSerie.poster_path}/>) : (<p>Immagine non disponibile</p>)}
          </div>
          <div className="card-text">
            <h1>Serie</h1>
            <h2>Titolo: {curSerie.name}</h2>
            <h3>Titolo originale: {curSerie.original_name}</h3>
            {flags
              .filter((movieToFind) => movieToFind.Lingua === curSerie.original_language)
              .map((curSerie) => (
                <img key={curSerie.Lingua} src={curSerie.img} alt={curSerie.Lingua} />
              ))}
            <p>Voto: {curSerie.vote_average}</p>
          </div>
        </div>
      ))}

    </>
  )
}

export default App
