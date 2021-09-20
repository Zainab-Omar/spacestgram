import React, { useState } from 'react'
import redheart from './redheart.svg'
import greyheart from './greyheart.svg'
import ShowDetails from './ShowDetails'

function Image({image}){
    const [like, setLike] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    return(
        <div className="image">
            <img src={image.url} alt={image.title} height="300" width="400" className="center"/> <br/>
            <h4>{image.title} - {image.date} </h4>
            <img
                src={like ? redheart : greyheart}
                alt="like button"
                 className="like"
                 onClick={() => setLike((curr) => !curr)}
                 width="30" height="30" /><br/>

            <button onClick={() => setShowDetails(!showDetails)}>Show Picture explanation</button>
            {showDetails && <ShowDetails details={image.explanation} />}
           
           
        </div>
    )
}

export default Image;
