import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import CreatorContainer from 'pages/Creator/CreatorContainer'
import { NotFound } from 'navigation/NotFound'
import {ROOT, CREATOR} from 'navigation/CONSTANTS'


export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
                <Route exact path={CREATOR} component={CreatorContainer}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    )
}
