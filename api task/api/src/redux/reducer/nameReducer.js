import { GET_USERNAME, GET_USERNAME_ERROR, REMOVE_ITEM, REMOVE_USERNAME, USERNAME_LOADING } from "../actionType"

const globalState = {
    userNameList: [],
    userNameError: "",
    loading: false
}

const getNameReducer = (state = globalState, action) => {
    switch (action.type) {
        case GET_USERNAME:
            return { ...state, userNameList: action.payload,loading:false }
        case GET_USERNAME_ERROR:
            return { ...state, userNameError: action.payload,loading:false }
        case USERNAME_LOADING: {
            return { ...state, loading: action.payload }
        }
        case REMOVE_ITEM:{
            return {...state,userNameList:[]}
        }
        default:
            return state
    }
}
export default getNameReducer