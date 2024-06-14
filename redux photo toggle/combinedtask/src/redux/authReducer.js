import { AUTHORIZATION } from "./actionType";
const initialState={toggle:false}
const authReducer=(state=initialState,action)=>{
    console.log(action.type);
    switch (action.type) {
        case AUTHORIZATION:
           return{...state,toggle:!state.toggle} 
        default:
            return state
    }
}
export default authReducer