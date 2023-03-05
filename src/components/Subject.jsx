import React from 'react'
import {useGlobalContext} from '../context'



const Subject = () => {

  const {searchsubjectQuery}=useGlobalContext();
  return (
    <div>
        {/* <input value={"javascript"} onClick={(e)=>{searchsubjectQuery(e)}}>Javascript</input> */}

    </div>
  )
}

export default Subject