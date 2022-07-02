import React from "react";
import PropTypes from 'prop-types';

function KegForm(props){
  return(
    <>
      <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='brand' placeholder='Brand Name' required/>
          <input type='text' name='flavor' placeholder='Keg Flavor' required/>
          <input type='text' name='imgUrl' placeholder='Brand Image Url' required/>
          <input type='number' name='price' placeholder='pint price' required/>
          <input type='number' name='abv' placeholder='abv %' required/>
          <input type='number' name='maxPints' placeholder='Keg Size in pints' required/>
          <input type='number' name='remainingPints' placeholder='Remaining Pints' required/>
          <button type='submit'>{props.buttonText}</button>
        </form>
    </>
  )
}

KegForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func,
  keg: PropTypes.object
}

export default KegForm;