import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../../components/panel/Panel.jsx';
import PanelTable from '../../../../../../components/compounds/panelTable/PanelTable.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var AllCourseQuery = React.createClass({
    render: function () {
        //var ob=null;
        // ob=ProxyQ.es6Props(["requiredHandle"],this.props);
        var filterField= {
            "order":true,
            "courseNum":true,
            "courseName": true,
            "courseType":true,
            "credit":true,
            "classHour":true,
            "termCount":true,
            "examTypeName":true,
            "managerName":true,
            "link":true
        }
        var query={
         "url":"/bsuims/reactPageDataRequest.do",
         "params":
         {
         "reactActionName":'allCourseQueryDoQuery',
         "reactPageName":'newCultivateAllCourseQueryPage'
         }
        }

        return (
            <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
                <PanelTable
            bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"allCourseQueryInit",
                reactPageName:"newCultivateAllCourseQueryPage"
                }
            }}
            query={query}
            autoComplete={true}
            filterField={filterField}
            />
                </div>);
    }


});
module.exports = AllCourseQuery;