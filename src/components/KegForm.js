import React from "react";
import PropTypes from 'prop-types';

function KegForm(props){
return(
  <>
    <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='brand' placeholder='Brand Name' />
        <input type='text' name='flavor' placeholder='Keg Flavor' />
        <input type='number' name='abv' placeholder='abv %' />
        <input type='number' name='maxPints' placeholder='Keg Size in pints' />
        <input type='number' name='remainingPints' placeholder='Remaining Pints' />
        <button type='submit'>{props.buttonText}</button>
      </form>
  </>
)
}

KegForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func
}

export default KegForm;