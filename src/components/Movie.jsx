import React from 'react'

function Movie(props) {
  return (
    <div className='movie'>
    <img src={props.img} 
   alt=""   />
    <p> Title : { props.title}</p>
    <p> Year : {props.year}</p>
    <p> imdbID : {props.imbd}</p>
      
    </div>
  )
}

export default Movie
