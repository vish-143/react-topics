import { API_TEST, DECREMENT_ACTION, ERROR, INCREMENT_ACTION, LOADING } from "./actionType"
const initialState={value:0,apiArray:[],loading:false, errorMessage:""}
const reducerFunction=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT_ACTION:
            return{...state,value:state.value+action.payload}
        case DECREMENT_ACTION:
            return{...state,value:state.value-action.payload}
        case API_TEST:
            return{...state,apiArray:action.payload,loading:false,errorMessage:""}
        case LOADING:
            return{...state,loading:true,errorMessage:"Loading Please wait for a while"}
        case ERROR:
            return{...state,loading:false,errorMessage:"JSON contains some error!"}
        default:
            return state
    }
}
export default reducerFunction;

