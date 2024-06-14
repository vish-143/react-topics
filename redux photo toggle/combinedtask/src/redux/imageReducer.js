import { PREVIOUS,NEXT } from "./actionType";
const initialState={
    count:0
    }
const imageReducer=(state=initialState,action)=>{
    switch (action.type) {
        case PREVIOUS:{    
            return{...state,count:state.count-1}
        }
        case NEXT:{
            return{...state,count:state.count+1}   
        }
        default:
            return state
        }
    }
export default imageReducer