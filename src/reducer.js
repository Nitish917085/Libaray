const reducer = (state,action)=>{

    switch(action.type){
        case "SET_LOADING":
            return {...state,isLoading:true,
            };        
        case "FETCH_DATA":
            return{
                ...state,                
                data:action.payload,
                isLoading:false,
            }
        case "SEARCH_BY_SUBJECT":
            return {
                ...state,querySubject:action.payload,
                
            }
        case "SEARCH_BY_TITLE":
                return{
                    ...state,queryTitle:action.payload,
                    
                }       

    }

    return state;
};
export default reducer;