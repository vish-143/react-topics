import React,{Component} from 'react'
import {connect} from 'react-redux'
import { incrementAction,decrementAction,ApiTest} from './redux/actionCreator'
class Main extends Component{
    render(){
        if(this.props.loading){
            return <h1>Loading</h1>
        }
        return(
            <div>
                <button onClick={()=>this.props.incrementAction(2)}>Increment</button>
                <div>value:{this.props.value}</div>
                <button onClick={()=>this.props.decrementAction(6)}>Decrement</button>
                <div>User Name:{this.props.apiArray.map(element=><h2 key={element.id}>{element.name}</h2>)}</div>
                
                {/* <div>{this.props.loading}</div>
                <div>{this.props.errorMessage}</div> */}
            </div>
        )
    }
componentDidMount=()=>{
    this.props.ApiTest()
}
}
const mapStateToProps=(state,ownProps)=>{
    return{
        value:state.value,
        apiArray:state.apiArray,
        errorMessage:state.errorMessage,
        loading:state.loading
    }
}
const mapDispatchToProps={
       incrementAction,
       decrementAction,
       ApiTest
    }
export default connect(mapStateToProps,mapDispatchToProps)(Main)