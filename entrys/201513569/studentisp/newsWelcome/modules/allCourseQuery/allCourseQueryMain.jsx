import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../../components/panel/Panel.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var AllCourseQuery = React.createClass({
    render: function () {
        //var ob=null;
        // ob=ProxyQ.es6Props(["requiredHandle"],this.props);

        return (<Panel
            title="成绩查询"
            bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"allCourseQueryInit",
                reactPageName:"newCultivateAllCourseQueryPage"
                }
            }}
            auto={true}
            autoComplete={true}
            highLight={true}
            />);
    }


});
module.exports = AllCourseQuery;