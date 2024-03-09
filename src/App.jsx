
import './App.css'
import Headers from './components/Header'
import Movie from './components/Movie'
import mov from "./assets/Movies.json"


function App() {
 


  return (
    
 <div className='app'>

 <Headers/>
 <div className='main'>

{
  mov.map((emment)=>{
    return(
      <Movie 
      
      title={emment.Title}
        year={emment.Year}
        img={emment.Poster}
        imbd={emment.imdbID}
      />
    )
  })
}


 </div>

 </div>
   
    
  )
}

export default App
