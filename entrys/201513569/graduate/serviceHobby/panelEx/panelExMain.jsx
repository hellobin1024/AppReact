import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';

Boot();

function Boot()
{
    var options=[{label:'a',value:0},
        {label:'b',value:1},
        {label:'c',value:2}];
    var data=[
        {row:['stuType|select|'+JSON.stringify(options)]},
        {row:['perIdCard|input|true']},
        {row:['query']}
    ];
    var query={
        url:"/gradms/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"fuckThesis",
            reactActionName:"deegreeThesisReviewResult"
        }
    }
    render(
        <Panel
            data={data}
            autoComplete={true}
            query={query}
            />
        , document.getElementById('root'))

}