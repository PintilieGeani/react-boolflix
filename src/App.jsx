import { SearchProvider } from './context/SearchProvider.jsx';
import AppHeader from './components/AppHeader.jsx';
import AppMain from './components/AppMain.jsx';
import axios from "axios";


function App() {

  // const apiUrlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a6f5a912f5683b60ae1a2352198efc2d&query=`

  // const apiUrlSerie = "https://api.themoviedb.org/3/search/tv?api_key=a6f5a912f5683b60ae1a2352198efc2d&language=it_IT&query="

  // 

  // const apiKey = "a6f5a912f5683b60ae1a2352198efc2d"
  // // const [movie, setMovie] = useState([]);
  // const [serie, setSerie] = useState([])
  // const [cercaMovie, setCercaMovie] = useState("")
 

  // const gestisciRicerca = () => {
  //   axios.get(apiUrlMovie + cercaMovie).then((resp) => {
  //     setMovie(resp.data.results)
  //   })
  //   axios.get(apiUrlSerie + cercaMovie).then((resp) => {
  //     setSerie(resp.data.results)
  //     console.log(resp.data.results)
  //   })
  // }


  return (
    <>
      <SearchProvider>
      <AppHeader />
      <AppMain />
    </SearchProvider>
    </>
  )
}

export default App
