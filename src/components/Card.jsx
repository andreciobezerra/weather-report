/*
  @brief Component with the card
  @params Props with city and country of local

  eslint-disable react/prop-types
*/

import React from 'react';
import { useFetch } from '../lib/hooks';
import Error from './Error';
import Infos from './Infos';

const Card = (props) => {
  let local = {...props}
  // eslint-disable-next-line react/prop-types
  let [data, loading, error] = useFetch({ city: props.city, country: props.country });
     
  if (error) {
    return <Error error={error}/>
  }

  return (
    <div className='cards'>
      {loading ? 'Loading...' : <Infos data={data} local={local}/>}
    </div>
  )


}

export default Card;