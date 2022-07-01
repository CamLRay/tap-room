import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  const kegImageStyle = {
    width: '5%'
  }
  return(
    <>
      <img style={kegImageStyle} src={props.imgUrl} alt="Logo" />
      <p>{props.brand} - {props.flavor}</p>
      <p>{props.remainingPints}/{props.maxPints}</p>
      <button>Poured a pint</button>
    </>
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