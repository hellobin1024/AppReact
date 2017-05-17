import React from 'react';
import {render} from 'react-dom';
import NotedList from '../../../../../components/basic/NotedList.jsx';

Boot()

function Boot(){

    var title="个人信息";

    var data=[
        {content:"学号"},
        {content:"姓名"},
        {content:"年级"},
        {content:"职称"}
    ]

    var query={
        url:"/serviceHall/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"personInfoPage",
            reactActionName:"getPersonInfoUseReact"
        }
    }
    render(
        <NotedList
            title={title}
            query={query}
            auto={true}
            comp="note"
            />
        , document.getElementById('root'))
}