import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../components/panel/Panel.jsx';
Boot()

function Boot()
{

    var query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName  : "StudentTrafficRuleStudentTrafficRulePage",
            reactActionName: "trafficPlanShowInitReact"
        }
    }
    var PanelTitle="出行计划";
    render(
        <div>
            <Panel
                bean={query}
                auto={true}
                autoComplete={true}
                title={PanelTitle}
                />
        </div>
        , document.getElementById('root'))
}