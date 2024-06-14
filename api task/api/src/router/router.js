import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GetApiResponse from '../components/home'
import GetUserName from '../components/getUserName'
import GetUserImage from '../components/getUserImage'

const RouterShell = () => {
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={GetApiResponse} />
            <Route exact path='/userName' component={GetUserName} />
            <Route exact path='/userImage' component={GetUserImage}/>
            </Switch>
        </Router>
    )
}
export default RouterShell