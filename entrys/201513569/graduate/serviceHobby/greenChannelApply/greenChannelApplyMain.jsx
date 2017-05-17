import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';


Boot();
function Boot()
{
    var bean={
        url: '/bsuims/reactPageDataRequest.do',
        params: {
            reactActionName: "addApplyInfoInitPanelUseReact",
            reactPageName  : "bksGreenWayPage"
        }
    }


    var query={
        url: '/bsuims/reactPageDataRequest.do',
        reactActionName:"uploadResource",
        reactPageName:"bksGreenWayPage"
    }

    render(

        <Panel
            title="填写个人贷款情况"
            autoComplete={true}
            auto={true}
            bean={bean}
            query={query}
            />
        , document.getElementById('root'))
}