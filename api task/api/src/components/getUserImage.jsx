import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { displayUserImage, removeItem, removeUserImage, removeUserName, userImageError, userImageLoading } from "../redux/actionCreator"
import { useEffect } from "react"
import { ReactComponent as Loader } from "../assets/loader.svg"

const GetUserImage = (props) => {
    const { history } = props
    const dispatch = useDispatch()
    const userImages = useSelector(state => state.getImageReducer.userImageList)
    const userNameList = useSelector(state => state.getNameReducer.userNameList)
    console.log("userNameList",userNameList);

    console.log("userImages",userImages);
    const loadingAction = useSelector(state => state.getImageReducer.loading)

    const getUserImage = async () => {
        dispatch(userImageLoading(true))
        await axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                dispatch(displayUserImage(response.data))
            })
            .catch(() => {
                dispatch(userImageError(alert("Something went wrong")))
            })
    }
    const handleUserNameButton=()=>{
        history.push("/userName")
    }
    const handleUserImageButton=()=>{
        history.push("/userImage")
    }
    useEffect(() => {
        getUserImage()
        return()=>{
            dispatch(removeItem())
        }
    }, [])

    return (
        <div>
            <div>
                <button onClick={handleUserNameButton}>Get User Names</button>
                <button onClick={handleUserImageButton}>Get User Image</button>
            </div>

            {loadingAction ? <Loader /> :
                userImages.filter((arrayItems) => (arrayItems.id < 10))
                    .map((arrayElements, index) => {
                        return <img src={arrayElements.url} alt="image" key={index}
                        />
                    })
            }
        </div>
    )
}
export default GetUserImage