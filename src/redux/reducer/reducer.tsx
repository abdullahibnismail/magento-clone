interface initial
{
    
}
const initialState:initial= {
   
    
    
        
  }
  
  const rootReducer = (state:initial = initialState, action:any) => {
    switch(action.type){
   
        case "VIEW_COMMENT":
            return {
                ...state,

                commentView:action.payload.commentView
            
            }
             
        default:
            return state
    }
 }
 export default rootReducer;