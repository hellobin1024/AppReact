import React from 'react';
import {render} from 'react-dom';
import Contact from '../../../../../components/compounds/contact/ContactElement.jsx';


Boot();


function Boot(){
    var title="博士生、硕士生导师列表";
    var action="/ReactJPChatter/person/stuinfo_personBasicInfoUpdate.do";
    var content=[
        {
            set: [{field: "联系电话", name: "perTelephone"}, {field: "移动电话", name: "mobilephone"}]
        }
        ,
        {
            set:[{field:"QQ号",name:"qq"},{field:"MSN",name:"msn"}]
        }
        ,
        {
            set:[{field:"电子邮件",name:"email"},{field:"邮政编码",name:"perPostalCode"}]
        }
        ,
        {
            set:[{field:"通讯地址",name:"perAddress"}]
        }
    ];

    render(
        <Contact title={title} action={action} inputFields={content} td-complete={true}/>
        , document.getElementById('root'))
}