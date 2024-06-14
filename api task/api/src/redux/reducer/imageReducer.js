import { GET_USERIMAGE, GET_USERIMAGE_ERROR, REMOVE_ITEM, REMOVE_USERIMAGE, USERIMAGE_LOADING } from "../actionType"

const globalState = {
    userImageList: [],
    userImageError: "",
    loading: false
}

const getImageReducer = (state = globalState, action) => {
    switch (action.type) {
        case GET_USERIMAGE:
            return { ...state, userImageList: action.payload,loading:false }
        case GET_USERIMAGE_ERROR:
            return { ...state, userImageError: action.payload,loading:false }
        case USERIMAGE_LOADING: 
            return { ...state, loading: action.payload }
        case REMOVE_ITEM:
            return {...state,userImageList:[]}
        default:
            return state
    }
}
export default getImageReducer