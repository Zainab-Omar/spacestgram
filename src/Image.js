import React from "react";

function Image({image}){
    return(
        <div className="image">
            <h5>{image.title} - {image.date} </h5>
            <img src={image.url} alt={image.title} />
            <p>{image.explanation}</p>
            <button>Like</button>
           
        </div>
    )
}

export default Image;
