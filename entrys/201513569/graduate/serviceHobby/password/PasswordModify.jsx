import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';
var PasswordModify=React.createClass({

    render:function(){

        var bean={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                "reactActionName": "changePasswordInitReact",
                "reactPageName": "userPasswordManageRulePage"
            }

        }
       return(
           <Panel
               title="修改密码"
               autoComplete={true}
               auto={true}
               bean={bean}
               />
       );


    }
});
export default PasswordModify;

