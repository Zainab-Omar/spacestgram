import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Image from './Image'

function ImagesDisplay({images}){
    const imagesArray = images || []
    const renderImages = imagesArray.map(image => <Image key={uuidv4()} image = {image} />)

    return (
        <div>
          {renderImages}
        </div>
    )

}

export default ImagesDisplay;