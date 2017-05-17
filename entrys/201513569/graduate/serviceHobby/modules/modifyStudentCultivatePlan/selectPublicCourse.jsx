/**
 * Created by douxiaobin on 2016/8/24.
 */
import React from 'react';
import {render} from 'react-dom';
import PanelTable_selectCourse from '../../../../../../components/compounds/panelTable/PanelTable_selectCourse.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');

var SelectPublicCourse = React.createClass({
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
<<<<<<< HEAD
            "collegeName":true,
=======
>>>>>>> 6aa9dd509ae55e1a8da1f078947528ee2a92a0fe
            "examTypeName":true,
            "managerName":true,
            "link":true
        };


        var stuId =this.props.stuId;
        var query={
            "url":"/bsuims/reactPageDataRequest.do",
            "params":
            {
                "reactActionName":'publicCourseQueryDoQuery',
                "reactPageName":'newCultivatePublicCourseQueryPage',
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
                reactActionName:"publicCourseQueryInit",
                reactPageName:"newCultivatePublicCourseQueryPage",
                stuId
                }
            }}
                    query={query}
                    autoComplete={true}
                    filterField={filterField}
                    clickReturn={clickReturn}  //µã»÷·µ»Ø
                    />
            </div>);
    }


});
module.exports = SelectPublicCourse;