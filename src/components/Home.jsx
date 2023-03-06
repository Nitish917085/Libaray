import React from 'react'
import styled from 'styled-components'
import Subject from './Subject'
import Result from './Result'
// import {useContext } from 'react'
// import { AppContext } from '../context'
import {useGlobalContext} from '../context' //merge both just above imports


const Container=styled.div`
    display: flex;

    @media screen and (max-width: 626px)
        {  
            display: block;
        }
        
    
`
const PlaceHolder=styled.input`
    border-radius: 10px;
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    height: 40px;
    margin-bottom: 20px;
    padding-left: 30px;
    width: 270px;
    opacity: 50%;
`
const Left=styled.div`
        border-right: 5px solid gray;
        height: 100vh;
        @media screen and (max-width: 626px)
        {
            border-bottom: 2px solid gray;
            height: 30vh;
            position: static;
        }
        
    
`
const Right=styled.div`
    width: 100vw;
    position: static;
`
const Nav=styled.div`
    padding-bottom: 20px;
    border-bottom: 2px solid gray;
`
const Div=styled.div` 
    margin-left: 20px;
`
const Div5=styled.div` 
    margin-left: 20px;
    margin-top: 30px;
    font-size: 25px;
`
const Div6=styled.div` 
    position: static;
`

const Home = () => {
  const {searchBySubject,searchByTitle}=useGlobalContext();
 
  return (
    <div>
        <Container>
            <Left>
                 <Div5>Trending Subjects</Div5>
                <PlaceHolder onKeyDown={(e)=>{(searchBySubject(e))}} placeholder='Search by subject' />
                 <Div6><Subject  /> </Div6>
            </Left>
            
            <Right>
                <Nav>
                    <Div>
                       <PlaceHolder onKeyDown={(e)=>{searchByTitle(e)}} placeholder='Search by Author or Title'/>
                    </Div>                                              
                </Nav>                
                <Result />           
            </Right>
        </Container>
    </div>
  )
}

export default Home