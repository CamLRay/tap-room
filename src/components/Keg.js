import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  const kegImageStyle = {
    margin:'auto',
    width: '20%'
  }
  const kegComponentStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between'
  }
  return(
    <div style={kegComponentStyle}>
      <p>{props.brand}</p>
      <img style={kegImageStyle} src={props.imgUrl} alt="Logo" />
      <p>{props.flavor} - ABV {props.abv}%</p>
      <p>{props.remainingPints}/{props.maxPints}</p>
      <button>Poured a pint</button>
    </div>
  )
}

Keg.propTypes = {
  imgUrl: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  remainingPints: PropTypes.number,
  maxPints: PropTypes.number
}

export default Keg;