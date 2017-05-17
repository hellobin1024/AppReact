/**
 * Created by outstudio on 16/5/13.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'



var rootRoute = {
    component: 'div',
    childRoutes: [{
        path: '/',
        component: require('./components/App'),
        childRoutes:[
            require('./routes/Calendar')
        ]
    }]

}

render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('root')
)