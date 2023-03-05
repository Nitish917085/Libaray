import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Div=styled.div`

`
const Div1=styled.button``

const Div2=styled.button`
 margin-left: 10px;
`
const Table=styled.table`
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid black;
    border-collapse: collapse;
`
const Td=styled.td`
border: 1px solid black;
border-collapse: collapse;
width: 400px;
`
const Th=styled.td`
border: 1px solid black;
border-collapse: collapse;
width: 400px;
`
const Tr=styled.tr`
border: 1px solid black;
border-collapse: collapse;
`
const divX=styled.div`
  display: flex;
  flex-direction: row;
`
const Div3=styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`

const Result = (searchtype) => {

  const {data,changeOffsetPre,changeOffsetNext,isLoading,subject_or_title}=useGlobalContext();
  console.log(subject_or_title);

  console.log(data);
  if(isLoading)
      return (<div> Loading...</div>)
  
  return (
    <div>
      <Div>
      <Table> 
          <thead>
                  <Tr>
                        <Th>Title</Th>
                        <Th>Author</Th>

                  </Tr>  

          </thead>
          

            { 
              data && data.map(item=>{            
              return(<Tr>                                               
                                  <Td>{item.title}</Td>
                                  <Td>{subject_or_title?item.authors[0].name:item.author_name}</Td>                          

                    </Tr>
                  )
           })
         }
         
         </Table>
      </Div>    
      <Div3>
            <Div1 onClick={()=>changeOffsetPre()}>  Pre..  </Div1>
            <Div2 onClick={()=>changeOffsetNext()}> Next </Div2>
      </Div3>

    </div>
  )
}
export default Result