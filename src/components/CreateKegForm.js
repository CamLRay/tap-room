import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import KegForm from "./KegForm";

function CreateKegForm(props) {
  function handleCreateKegFormSubmission(event) {
    event.preventDefault();
    props.onKegCreation({
      imgUrl: event.target.imgUrl.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      abv: parseInt(event.target.abv.value),
      maxPints: parseInt(event.target.maxPints.value),
      remainingPints: parseInt(event.target.remainingPints.value),
      id: v4()
    })
  }

  return(
      <KegForm
        formSubmissionHandler={handleCreateKegFormSubmission}
        buttonText="Add Keg" />
  );
}

CreateKegForm.propTypes = {
  onKegCreation: PropTypes.func
}

export default CreateKegForm;