import React from "react";
import Keg from "./Keg";

function KegList(props){
  const kegListContainerStyle = {
    display: "grid",
    gridGap: '2em',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    // flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly'
  }
return(
  <div style={kegListContainerStyle}>
  {props.kegList
    .sort((a,b) => a.brand > b.brand ? 1 : -1)
    .map((keg) =>
      <Keg
        imgUrl={keg.imgUrl}
        brand={keg.brand}
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

export default KegList;