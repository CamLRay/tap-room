import React from "react";
import PropTypes from 'prop-types';

function Keg(props){
  const kegImageStyle = {
    margin:'auto',
    width: '15%'
  }
  const kegComponentStyle = {
    display: 'flex',
    backgroundColor:'#c9c9c9',
    borderRadius:'1em',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'space-between'
  }
  return(
    <div style={kegComponentStyle}  >
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <p>{props.brand}</p>
        <img style={kegImageStyle} src={props.imgUrl} alt="Logo" />
        <p>{props.flavor} - ABV {props.abv}%</p>
        <p>${props.price}</p>
        <p>{props.remainingPints}/{props.maxPints} Pints</p>
      </div>
      <button onClick={() => props.whenDecrementClicked(props.id)}>Poured a pint</button>
    </div>
  )
}

Keg.propTypes = {
  imgUrl: PropTypes.string,
  abv: PropTypes.number,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  remainingPints: PropTypes.number,
  maxPints: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenDecrementClicked: PropTypes.func,

  id: PropTypes.string
}

export default Keg;