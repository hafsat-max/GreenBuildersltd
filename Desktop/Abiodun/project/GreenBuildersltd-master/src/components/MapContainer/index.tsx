import React from 'react'
import "./map.css"

function MapContainer({src} : {src: string}) {
  return (
    <div className={'map'}>
        {/* <Image src={"/svgs/map.svg"} alt='map' fill style={{objectFit: "cover"}} /> */}
        <iframe src={src} width="600" height="450" style={{border: "0"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default MapContainer
