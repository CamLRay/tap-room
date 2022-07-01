import React from "react";
import PropTypes from 'prop-types';

function KegDetails(props){
  const { keg } = props;
  return(
    <>
      <h1>{keg.flavor} | {keg.brand}</h1>
      <img src={keg.imgUrl} alt="brand logo" />
      <h3>Alcohol/Vol {keg.abv}%</h3>
      <h4>{keg.remainingPints}/{keg.maxPints}</h4>
      <button onClick={props.onClickingEdit}>Update Keg</button>
    </>
  )
}

KegDetails.propTypes = {
  imgUrl: PropTypes.string,
  abv: PropTypes.number,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  remainingPints: PropTypes.number,
  maxPints: PropTypes.number,
  onClickingEdit: PropTypes.func
}
export default KegDetails;