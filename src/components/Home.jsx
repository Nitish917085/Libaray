import React from 'react'
import styled from 'styled-components'
import Subject from './Subject'
import Result from './Result'
// import {useContext } from 'react'
// import { AppContext } from '../context'
import {useGlobalContext} from '../context' //merge both just above imports


const Container=styled.div`
    display: flex;
`
const PlaceHolder=styled.input`
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 20px;
    height: 30px;
    margin-bottom: 20px;
    padding-left: 30px;
    width: 250px;
`
const Left=styled.div`
        border-right: 5px solid gray;
        height: 100vh;
`
const Right=styled.div`
    width: 100vw;
`
const Nav=styled.div`
    padding-bottom: 20px;
    border-bottom: 2px solid gray;
`
const Div=styled.div` 
    margin-left: 20px;
`

const Home = () => {
  const {searchBySubject,searchByTitle}=useGlobalContext();
 
  return (
    <div>
        <Container>
            <Left>
                <PlaceHolder onKeyDown={(e)=>{(searchBySubject(e))}} placeholder='Type subject'/>
                <Subject  />
            </Left>
            
            <Right>
                <Nav>
                    <Div>
                       <PlaceHolder onKeyDown={(e)=>{searchByTitle(e)}} placeholder='search by author or title'/>
                    </Div>                                              
                </Nav>                
                <Result />           
            </Right>
        </Container>
    </div>
  )
}

export default Home