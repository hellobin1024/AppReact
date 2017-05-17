/**
 * Created by outstudio on 16/6/1.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'


/**
 * use lazy load
 */


const rootRoute = {
    component  : 'div',
    childRoutes: [{
        path       : '/',
        component  : require('./components/App'),
        childRoutes: [
            require('./routes/password'),
            require('./routes/register')
        ]
    }]

}

render(
    <Router history={browserHistory} routes={rootRoute}/>,
    document.getElementById('root')
)
