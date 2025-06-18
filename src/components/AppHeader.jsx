import axios from 'axios';
import { useContext } from 'react';
import { SearchContext } from '../context/SearchProvider.jsx';


const AppHeader = () => {

    const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a6f5a912f5683b60ae1a2352198efc2d&query=`
    const apiUrlSerie = "https://api.themoviedb.org/3/search/tv?api_key=a6f5a912f5683b60ae1a2352198efc2d&language=it_IT&query="

    const { setMovie, setSerie, cercaMovie, setCercaMovie } = useContext(SearchContext);

    const gestisciRicerca = () => {
        axios.get(apiUrlMovie + cercaMovie).then((resp) => {
            setMovie(resp.data.results)
        })
        axios.get(apiUrlSerie + cercaMovie).then((resp) => {
            setSerie(resp.data.results)
            console.log(resp.data.results)
        })
    }

    return <header>
        <div className="search-bar">
            <input type="text" aria-description="Ricerca" id="ricerca" value={cercaMovie} onChange={(event) => setCercaMovie(event.target.value)} />
            <button onClick={gestisciRicerca}>Cerca il tuo film </button>
        </div>
    </header>

}



export default AppHeader