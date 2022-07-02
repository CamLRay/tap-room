import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props){
  const kegListContainerStyle = {
    display: "grid",
    gridGap: '1em',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    width: '100%',
    justifyContent: 'space-evenly'
  }
return(
  <div style={kegListContainerStyle}>
  {props.kegList
    .sort((a,b) => a.flavor > b.flavor ? 1 : -1)
    .map((keg) =>
      <Keg
        whenKegClicked = { props.onKegSelection }
        whenDecrementClicked = {props.onDecrementPints}
        imgUrl={keg.imgUrl}
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        abv={keg.abv}
        remainingPints={keg.remainingPints}
        maxPints={keg.maxPints}
        id={keg.id}
        key={keg.id}
      />
      )}
  </div>
)
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onDecrementPints: PropTypes.func
}

export default KegList;