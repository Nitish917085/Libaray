import React from 'react'
import styled from 'styled-components';
import {useGlobalContext} from '../context'

const Div=styled.div`

    height: 30px;
    font-size: 20px;
    cursor: pointer;

`

const Subject = () => {

 

  const {searchBySubjectByTrend}=useGlobalContext();
  return (
    <div>
        <Div onClick={()=>{searchBySubjectByTrend("javascript")}}>Javascript</Div>
        <Div onClick={()=>{searchBySubjectByTrend("science")}}>Science</Div>
        <Div onClick={()=>{searchBySubjectByTrend("history")}}>History</Div>
        <Div onClick={()=>{searchBySubjectByTrend("currency")}}>Currency</Div>
        <Div onClick={()=>{searchBySubjectByTrend("criminal+law")}}>Criminal Law</Div>

    </div>
  )
}

export default Subject