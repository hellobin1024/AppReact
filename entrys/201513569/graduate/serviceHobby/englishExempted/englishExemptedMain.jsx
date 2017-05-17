import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';
Boot();
function Boot()
{
    var bean={
        url:"/serviceHall/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"exemptionPage",
            reactActionName:"exemptionEnglishApplyInitUseReact"
        }
    }




    render(
        <Panel
            title="英语免修申请"
            autoComplete={true}
            auto={true}
            bean={bean}
            />
        , document.getElementById('root'))
}