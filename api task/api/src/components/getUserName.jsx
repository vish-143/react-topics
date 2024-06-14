import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { displayUserName, removeItem,  userNameError, userNameLoading } from "../redux/actionCreator"
import { useEffect } from "react"
import { ReactComponent as Loader } from "../assets/loader.svg"

const GetUserName = (props) => {
    const { history } = props
    const dispatch = useDispatch() 
    const userImages = useSelector(state => state.getImageReducer.userImageList)
    const userNameList = useSelector(state => state.getNameReducer.userNameList)
    console.log("userNameList",userNameList);

    console.log("userImages",userImages);
    const loadingAction = useSelector(state => state.getNameReducer.loading)

    const handleUserNameButton=()=>{
        history.push("/userName")
    }
    const handleUserImageButton=()=>{
        history.push("/userImage")
    }
    const getUserName = async () => {
        dispatch(userNameLoading(true))
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                dispatch(displayUserName(response.data))
            })
            .catch(() => {
                dispatch(userNameError(alert("Something went wrong")))
            })
    }
    useEffect(() => {
        getUserName()
        return()=>{
            dispatch(removeItem())   
        }
    }, [])

    return (
        <div>
            <button onClick={handleUserNameButton }>Get User Names</button>
            <button onClick={handleUserImageButton}>Get User Image</button>

            {loadingAction ? <Loader /> :
                userNameList.map((arrayElements, index) => {
                    return <div key={index}>{arrayElements.name}</div>
                })
            }
        </div>
    )
}
export default GetUserName