import React from 'react'
import "./Loading.scss"
import BarLoader from "react-spinners/BarLoader";
function Loading() {
  return (
    <div className='loader'>
<BarLoader size={30} color="#f7a300" />

    </div>
  )
}

export default Loading
