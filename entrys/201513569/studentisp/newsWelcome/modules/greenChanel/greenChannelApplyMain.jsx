import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../../components/panel/Panel.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var GreenChannelApply = React.createClass({


    render : function () {
        console.log('...');
        console.log('...');
        console.log('...');
        console.log('...');
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
        return(
            <div>
                <Panel
                    title="填写个人贷款情况"
                    autoComplete={true}
                    auto={true}
                    bean={bean}
                    query={query}
                    />
            </div>);
    }
});
module.exports = GreenChannelApply;