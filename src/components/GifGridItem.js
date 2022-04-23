import React from 'react'

export const GifGridItem = ( {id,title,image} ) => {
  
  return (
    <div key={id} className="card " >
        <img src={image} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
