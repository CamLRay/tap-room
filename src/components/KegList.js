import React from "react";
import Keg from "./Keg";

function KegList(props){
return(
  <>
  {props.kegList
    .sort((a,b) => a.brand > b.brand ? 1 : -1)
    .map((keg) =>
      <Keg
        imgUrl={keg.imgUrl}
        brand={keg.brand}
        flavor={keg.flavor}
        remainingPints={keg.remainingPints}
        maxPints={keg.maxPints}
        id={keg.id}
        key={keg.id}
      />
      )}
  </>
)
}

export default KegList;