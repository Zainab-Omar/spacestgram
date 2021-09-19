import React, { useState } from 'react'
import redheart from './redheart.svg'
import greyheart from './greyheart.svg'
function Image({image}){
    const [like, setLike] = useState(false)
    const [showDetails, setShowDetails] = useState(false)
    return(
        <div className="image">
            <h5>{image.title} - {image.date} </h5>
            <img src={image.url} alt={image.title} height="300" width="300"/> <br/>

            <button onClick={() => setShowDetails(!showDetails)}>Show Picture explanation</button>
            {showDetails && <ShowDetails details={image.explanation} />}
            <img
                src={like ? redheart : greyheart}
                alt="like button"
                 className="like"
                 onClick={() => setLike((curr) => !curr)}
                width="20" height="20" />
           
           
        </div>
    )
}

export default Image;
