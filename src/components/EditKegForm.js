import React from "react";
import KegForm from "./KegForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({
      imgUrl: event.target.imgUrl.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      abv: parseInt(event.target.abv.value),
      maxPints: parseInt(event.target.maxPints.value),
      remainingPints: parseInt(event.target.remainingPints.value),
      id: keg.id
    })
  };

  return(
    <>
      <KegForm 
        keg={props.keg}
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg"
      />
    </>
  )
  
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;