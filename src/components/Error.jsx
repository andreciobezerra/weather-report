/*
  @brief Component with the error handler
  @params Props with infos about the error

  eslint-disable react/prop-types
*/

import React from 'react';

const Error = (props) => {
  console.log(props.error)
  let errorCode = props.error.request.status;
  let errorMessage = props.error.request.statusText;
  
  return(
    <div className='errors'>
      <p>Sorry, there was an error!</p>
      <p>{`Code:${errorCode} - ${errorMessage}`}</p>   
    </div>
  )
}

export default Error;