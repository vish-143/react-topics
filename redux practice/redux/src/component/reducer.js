const initialState={incrementValue:0,decrementValue:0}
const reducerFunction=(state=initialState,action)=>{
    switch(action.type){
        case "increment":
            return {...state,incrementValue:state.incrementValue+1}
        case "decrement":
            return {...state,decrementValue:state.decrementValue-1} 
        default:
            return state
    }
}
export default reducerFunction