import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import KegForm from "./KegForm";

function CreateKegForm(props) {
  function handleCreateKegFormSubmission(e) {
    e.preventDefaul();
    props.onKegCreation({
      brand: e.target.brand.value,
      flavor: e.target.flavor.value,
      abv: parseInt(e.target.abv.value),
      maxPints: parseInt(e.target.maxPints.value),
      remainingPints: parseInt(e.target.remainingPints.value),
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