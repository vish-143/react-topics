import { AUTHORIZATION ,PREVIOUS,NEXT} from "./actionType";
const Auth=()=>{
    return {type:AUTHORIZATION}
}
const previousImage=()=>{
    return {type:PREVIOUS}
}
const nextImage=()=>{
    return {type:NEXT}
}
export {Auth,previousImage,nextImage}