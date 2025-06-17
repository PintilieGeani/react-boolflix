import { useEffect } from "react"
import { useState } from "react";
import axios from "axios";

function App() {

  const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a6f5a912f5683b60ae1a2352198efc2d&query=`

  const apiUrlSerie = "https://api.themoviedb.org/3/search/tv?api_key=a6f5a912f5683b60ae1a2352198efc2d&language=it_IT&query="

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



  return (
    <>
      <div className="search-bar">
        <input type="text" aria-description="Ricerca" id="ricerca" value={cercaMovie} onChange={(event) => setCercaMovie(event.target.value)} />
        <button onClick={gestisciRicerca}>Cerca il tuo film </button>
      </div>
      {movie.map((curMovie) => (
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <h1>Film</h1>
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
          <div className="card-image"></div>
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
