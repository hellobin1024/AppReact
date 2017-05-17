import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../../components/panel/Panel.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var TrafficPlan = React.createClass({


    render : function () {
        var query={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                reactPageName  : "StudentTrafficRuleStudentTrafficRulePage",
                reactActionName: "trafficPlanInitReact"
            }
        }
        var PanelTitle="出行计划";
        return(
        <div>
            <Panel
                bean={query}
                auto={true}
                autoComplete={true}
                title={PanelTitle}
                />
        </div>);
    }
});
module.exports = TrafficPlan;