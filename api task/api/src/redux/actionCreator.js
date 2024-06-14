import { GET_USERIMAGE, GET_USERIMAGE_ERROR, GET_USERNAME, GET_USERNAME_ERROR, REMOVE_ITEM, REMOVE_USERIMAGE, REMOVE_USERNAME, USERIMAGE_LOADING, USERNAME_LOADING } from "./actionType"

export const displayUserName = (data) => {
    return ({type:GET_USERNAME,payload:data})
}

export const userNameLoading=(data)=>{
    return ({type:USERNAME_LOADING,payload:data})
}

export const userNameError=(data)=>{
    return ({type:GET_USERNAME_ERROR,payload:data})
}

export const displayUserImage = (data) => {
    return ({type:GET_USERIMAGE,payload:data})
}

export const userImageLoading=(data)=>{
    return ({type:USERIMAGE_LOADING,payload:data})
}

export const userImageError=(data)=>{
    return ({type:GET_USERIMAGE_ERROR,payload:data})
}

export const removeItem=()=>{
    return({type:REMOVE_ITEM})
}
