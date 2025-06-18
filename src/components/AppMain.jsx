import { useContext } from "react";
import StarComponent from "./StarComponent.jsx";
import EmptyStarComponent from "./EmptyStarComponent.jsx";
import { SearchContext } from '../context/SearchProvider.jsx';

const AppMain = () => {

        const { movie, serie } = useContext(SearchContext);

        const posterSize = "w342"
        
      const Stelle = (curMovie) => {
        const voto = curMovie.vote_average
        const nStelle = Math.ceil(voto / 2)
        const nStelleVuote = 5 - nStelle
        console.log(nStelle)
        const stellePiene = new Array(nStelle).fill(<StarComponent/>)
        const stelleVuote = new Array(nStelleVuote).fill(<EmptyStarComponent/>)
        return <><div className="stars">{[stellePiene, ...stelleVuote]}</div></>
    }

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

    return (
      movie.map((curMovie) => (
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
      )), 
      serie.map((curSerie) => (
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
      ))
    )
}

export default AppMain