import { INCREMENT_ACTION, DECREMENT_ACTION, API_TEST ,LOADING,ERROR} from "./actionType"
const incrementAction = (data) => {
    return { type: INCREMENT_ACTION, payload: data }
}
const decrementAction = (data) => {
    return { type: DECREMENT_ACTION, payload: data }
}

// const ApiTest=()=>(dispatch)=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response)=>{
//         response.json().then(res=>dispatch(api_test_data(res)))
//     }).catch((err)=>{
//         console.log(err,"error")
//     })
// }

//setTimeOut
// const ApiTest=()=>(dispatch)=>{
//     setTimeout(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response)=>{
//                 response.json().then(res=>dispatch(api_test_data(res)))
//             }).catch((err)=>{
//                 console.log(err,"error")
//             })
//     },3000)
// }

//try/catch
// const ApiTest=()=>async(dispatch)=>{
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       dispatch(api_test_data(data))

//     } catch (error) {
//       console.error(error);
//     }
//   }

//async/await
// const ApiTest=()=>async(dispatch)=>{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     dispatch(api_test_data(data))
// }

//setTimeOut
const ApiTest=()=>(dispatch)=>{
    dispatch({ type: LOADING });
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            response.json().then(res=>dispatch(api_test_data(res)))
        }).catch((err)=>{
            dispatch({ type: ERROR });
        })
        // dispatch(api_test_data([{name:"12345"}]))
    },3000)
}

const api_test_data = (data) => {
    return {
        type: API_TEST, payload: data
    }
}
export { incrementAction, decrementAction, ApiTest, api_test_data }