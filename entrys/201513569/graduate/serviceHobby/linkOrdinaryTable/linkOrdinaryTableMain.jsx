import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';


Boot();

function Boot()
{

    var query={
        url:'/serviceHall/bsuims/reactPageDataRequest.do',
        params:{
            reactActinName:"",
            reactPageName:""
        }
    }
    var parseQuery=JSON.stringify(query);
    var data=[
        {no:1,sex:'m',stu:110,link:'detail|link|'+parseQuery},
        {no:1,sex:'f',stu:112,link:'detail|link|'+parseQuery},
        {no:3,sex:'m',stu:113,link:'detail|link|'+parseQuery},
        {no:1,sex:'m',stu:114,link:'detail|link|'+parseQuery},
        {no:3,sex:'f',stu:115,link:'detail|link|'+parseQuery},
        {no:2,sex:'f',stu:116,link:'detail|link|'+parseQuery},
        {no:2,sex:'f',stu:117,link:'detail|link|'+parseQuery}
    ];


    render(<OrdinaryTable
            title="申请助教奖学金"
            data={data}
            />
        ,document.getElementById('root'));
}