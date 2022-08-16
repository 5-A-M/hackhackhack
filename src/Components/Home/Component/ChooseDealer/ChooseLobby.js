import React, { useState } from 'react'
import { useEffect } from 'react'
import DetailLobby from './component/DetailLobby'
import _ from "lodash"

const ChooseLobby = (props) => {
  const [random1Array, setRandom1Array]= useState(()=> [])
  const [random2Array, setRandom2Array]= useState(()=> [])
  useEffect(()=> {
    const a= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90) ]
    setRandom1Array(()=> a)
    const b= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90)]
    setRandom2Array(()=> b)
  }, [])
  useEffect(()=> {
    const intervalId= setInterval(()=> {
      const a= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90) ]
      setRandom1Array(()=> a)
      const b= [_.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90), _.random(61, 90)]
      setRandom2Array(()=> b)
    }, 300000)
    return ()=> clearInterval(intervalId)
  }, [])
  return (
    <div className="sjaklsjaksjakseoas" style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
      <DetailLobby ratewin={random1Array} id_lobby={1} image={"https://hackbcr.net/img/thumbnails-aecasino.jpg"} />
      <DetailLobby ratewin={random2Array} id_lobby={2} image={"https://hackbcr.net/img/thumbnails-sagaming.jpg"} />
    </div>
  )
}

export default ChooseLobby