import React from 'react';
import {render} from 'react-dom';
import HighChart from '../../components/basic/HighChart.jsx';
Boot()

function Boot()
{
    var data = {
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
        }]
    };


    var query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactActionName:"test",
            reactPageName:"registerRulePage"
        }
    }
    render(

        <HighChart query={query} auto={true}/>

        , document.getElementById('root'))


}