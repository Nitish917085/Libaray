//create context api
//provider
//usecontexthook(previously comsumer is used hwich is very lengthy)
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const APISUB="https://openlibrary.org/subjects/";
const APITITLE_AUTH="https://openlibrary.org/search.json?";
let Url="";
let offset=0;
let max_offest=20;
let subject_or_title=true;

const initialData={
    isLoading:false,
    querySubject: "",
    queryTitleAuthor:"",
    page_no:1,
    data:[], 
    objdata:{},    
}
const AppContext=React.createContext();

/////////////////////////////////////////////////////////////////////////////////////////////
//.......................................................................................

//createing provider function
const AppProvider=({children})=>{

const [state,dispatch]=useReducer(reducer,initialData);  // reduceer is function(action Method) it is the only extra differece from useState hook

//........................................................................
    const searchBySubject=(e)=>{        
        if(e.keyCode===13)
         {  
            subject_or_title=true;
            offset=0;
            dispatch({type:"SEARCH_BY_SUBJECT",
                     payload:e.target.value})
         }
           
    }
//........................................................................
        const searchByTitle=(e)=>{
            
            if(e.keyCode===13) 
                {  offset=0;
                    subject_or_title=false;
                    let txt=e.target.value.split(' ');
                    let count=1;
                    let text="";
                    txt.map((item)=>{
                            if(count)
                            {
                                text=item;
                                count=0;
                            }
                            else text=text + "+" + item;
                    })     
                    dispatch({type:"SEARCH_BY_TITLE",
                                payload:text
                            })
            }
    }
//........................................................................
useEffect(()=>{
        const fetchSubjects= async(URL1)=>{
            Url=URL1;
            const URL=`${URL1}${offset}`
            console.log(URL);
            dispatch({type:"SET_LOADING"});
            try{               
                   const res=await fetch(URL);
                   
                    const resjson=await res.json(); 
                    max_offest=resjson.work_count;                  
                     dispatch({
                        type:"FETCH_DATA",
                        payload:resjson.works,                
                        });
                      
        }catch(error){
            console.log(error);
        }};
        
      if(state.querySubject!=="")
        fetchSubjects(`${APISUB}${state.querySubject}.json?ebooks=true&limit=10&offset=`)
       
    },[state.querySubject])
//..............................................................................
    useEffect(()=>{

        const fetchTitle=async(URL2)=>{
            Url=URL2;
            const URL=`${URL2}${offset}`
            dispatch({type:"SET_LOADING"})
            try{
                    const res=await fetch(URL);
                    const resjson=await res.json();
                    max_offest=resjson.num_found;
                    dispatch({type:"FETCH_DATA",
                                payload:resjson.docs    
            });            
            }catch(error){
                console.log(error);
            }
        }
        if(state.queryTitle!=="")
            fetchTitle(`${APITITLE_AUTH}q=${state.queryTitle}&limit=10&offset=`);
    },[state.queryTitle])
    //.................................................
    

    const changeoffsett= async()=>{
            const Urlof=`${Url}${offset}`;            
                       
            dispatch({type:"SET_LOADING"});
            try{               
                   const res=await fetch(Urlof);
                    const resjson=await res.json();
                  
                    if(Url[25]==='e')
                            {
                                dispatch({type:"FETCH_DATA",
                                payload:resjson.docs    
                                        });
                            }
                            else{
                                dispatch({
                                    type:"FETCH_DATA",
                                     payload:resjson.works,                
                                    });  
                            }         
        }catch(error){
            console.log(error);
        }}        
 //................................................................

const changeOffsetPre=()=>{
    offset=offset-10; 
    if(offset>=0)
            changeoffsett();    
}
const changeOffsetNext=()=>{
    offset= offset +10;
    if(offset<max_offest)
        changeoffsett();    
}
//////////////////////////////////////////////////////////////////////////////////////

    return (
            <AppContext.Provider value={{...state,searchBySubject,searchByTitle,changeOffsetNext,changeOffsetPre,subject_or_title}}>
                {children}
            </AppContext.Provider>);
};
//////////////////////////////////////////////////////////////////////////////////////

//use before functyion name is must for custome hook
const useGlobalContext=()=>         //custome hook ao that we can export both AppContext and AppProviser in one hook
{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};
