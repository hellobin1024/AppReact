import React from 'react';
import {render} from 'react-dom';
import SidebarMenuElement from '../../../../components/basic/SidebarMenuElement.jsx';


Pack();


function Pack(){
    var render$node=document.getElementById('react$render$menu');
    var userName=render$node.getAttribute("userName");
    var data$options={
        query:{
            url:"/ReactJPChatter/menu/getPersonalMenu.do",
            params:{
                userName:userName
            }
        },
        auto:true,
        projName:'ReactJPChatter'
    }

    var basicStyle={
        listStyle:"none",
        padding:0,
        margin:0
    };
    render(
        <SidebarMenuElement data-options={data$options} style={basicStyle}/>
        , document.getElementById('react$render$menu'));
}
