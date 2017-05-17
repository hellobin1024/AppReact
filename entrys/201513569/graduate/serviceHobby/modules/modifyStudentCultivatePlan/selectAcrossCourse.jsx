/**
 * Created by douxiaobin on 2016/8/24.
 */
import React from 'react';
import {render} from 'react-dom';
import PanelTable_selectCourse from '../../../../../../components/compounds/panelTable/PanelTable_selectCourse.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var SelectAcrossCourse = React.createClass({
    clickReturn:function(ob){
        if(this.props.clickReturn!==undefined&&this.props.clickReturn!==null)
        {
            this.props.clickReturn(ob);
        }
    },

    render: function () {
        //var ob=null;
        // ob=ProxyQ.es6Props(["requiredHandle"],this.props);
        var filterField= {
            "order":true,
            "courseNum":true,
            "courseName": true,
            "courseAttribute":true,
            "credit":true,
            "classHour":true,
            "termCodeName":true,
            "examTypeName":true,
            "managerName":true,
            "link":true
        };

        var stuId =this.props.stuId;
        var query={
            "url":"/bsuims/reactPageDataRequest.do",
            "params":
            {
                "reactActionName":'acrossCourseQueryDoQuery',
                "reactPageName":'newCultivateAcrossCourseQueryPage',
                stuId
            }
        };

        var clickReturn=this.clickReturn;

        return (
            <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
                <PanelTable_selectCourse
                    bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"acrossCourseQueryInit",
                reactPageName:"newCultivateAcrossCourseQueryPage",
                stuId}

            }}
                    query={query}
                    autoComplete={true}
                    filterField={filterField}
                    clickReturn={clickReturn}  //µã»÷·µ»Ø
                    />
            </div>);
    }


});
module.exports = SelectAcrossCourse;