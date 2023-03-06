import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Div=styled.div`
`
const Div1=styled.button`
      width: 100px;
      height: 30px;  
`

const Div2=styled.button`
      margin-left: 10px;
      height: 30px;
      width: 100px;
`
const Table=styled.table`
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: auto;
    border: 3px solid black;
    border-collapse: collapse;
`
const Td=styled.td`
    border: 1px solid black;
    border-collapse: collapse;
    width: 400px;
    height: 40px;
    font-size: large;
`
const Th=styled.td`
      border: 3px solid black;
      border-collapse: collapse;
      width: 400px;
      height: 30px;
      font-weight: bold;
      font-size: large;
`
const Tr=styled.tr`
      border: 1px solid black;
      border-collapse: collapse;
      font-size: large;
      
`
const divX=styled.div`
      display: flex;
      flex-direction: row;
`
const Div3=styled.div`
     margin-top: 20px;
      bottom: 50px;
      right: 50px;
`
const Div6=styled.div`
      margin-top: 70px;
      bottom: 50px;
      right: 50px;
      font-size: 60px;
`

const Result = (searchtype) => {

  const {data,changeOffsetPre,changeOffsetNext,isLoading,offset}=useGlobalContext();
  console.log(data);

  console.log(data);
  if(isLoading)
      return (<Div6> Loading...</Div6>)
  
  return (
    <div>
      <Div>
      <Table> 
          <thead>
                  <Tr>
                        <Th>Title</Th>
                        <Th>Author</Th>
                        <Th>First Publish Year</Th>
                  </Tr>  
          </thead>
            { 
              data && data.map(item=>{            
              return(<Tr>                                               
                              <Td>{item.title}</Td>
                              <Td>{item.author_name?item.author_name:item.authors[0].name}</Td>                          
                              <Td>{item.first_publish_year}</Td>                         
                    </Tr>)
            })
         }
         </Table>
      </Div>    
      <Div3>
            <Div1 onClick={()=>changeOffsetPre()} > Pre... </Div1>
            <Div2 onClick={()=>changeOffsetNext()}> Next </Div2>
      </Div3>

    </div>
  )
}
export default Result