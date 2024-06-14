import React from "react"

import axios from "axios"
const GetApiResponse = (props) => {
    const { history } = props

    return (
        <div>
            <button onClick={()=>history.push("/userName")}>Get User Names</button>
            <button onClick={()=>history.push("/userImage")}>Get User Image</button>
        </div>
    )
}
export default GetApiResponse