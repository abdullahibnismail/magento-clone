import {login} from '../action/Action'

export type InitialProps={
    email:string
    password:string
}

const initialState:InitialProps= {
        email:'',
        password:''
  }
  
  const rootReducer = (state:InitialProps = initialState, action:any) => {
    switch(action.type){
   
        case "VIEW_COMMENT":
            return {
                ...state,

                commentView:action.payload.commentView
            
            }
            case login:
                return {
                    ...state,
    
                    email:action.payload.email,
                    password:action.payload.password
                
                }   
             
        default:
            return state
    }
 }
 export default rootReducer;