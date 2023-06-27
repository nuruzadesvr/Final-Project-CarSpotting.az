import React from 'react'
import "./LoadingRegister.scss"
import BeatLoader from "react-spinners/BeatLoader";
function LoadingRegister() {
  return (
    <div className='bestloader__box'>
      <BeatLoader size={30} color="#f7a300" />
    </div>
  )
}

export default LoadingRegister
