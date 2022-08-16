import React from 'react'
import { Link } from 'react-router-dom'
import "../style.sass"

const DetailLobby = (props) => {
  return (
    <div className="sdfjldhajlsaklsdad" style={{width: "20%", padding: 10}}>
      <Link to={`/lobby?id_lobby=${props.id_lobby}`}>
        <div id="box" className="dsjkldjsklajskasji gradient-border" style={{width: "100%", height: "auto", cursor: "pointer", padding: 8}}>
          <img className="dsjlkdsajiosjas" style={{width: "100%", aspectRatio: 5/6}} src={props.image} alt="Open" />
        </div>
      </Link>
    </div>
  )
}

export default DetailLobby

