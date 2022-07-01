import React from "react";
import PropTypes from 'prop-types';

function KegDetails(props){
  const { keg, onClickingDelete } = props;
  return(
    <>
      <h1>{keg.flavor} | {keg.brand}</h1>
      <img src={keg.imgUrl} alt="brand logo" />
      <h3>Alcohol/Vol {keg.abv}%</h3>
      <h4>{keg.remainingPints}/{keg.maxPints}</h4>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Remove Keg</button>
    </>
  )
}

KegDetails.propTypes = {
  imgUrl: PropTypes.string,
  abv: PropTypes.number,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  remainingPints: PropTypes.number,
  maxPints: PropTypes.number,
  keg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func

}
export default KegDetails;