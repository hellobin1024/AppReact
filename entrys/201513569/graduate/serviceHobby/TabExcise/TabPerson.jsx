import React from 'react';
import {render} from 'react-dom';
import Tab from '../../../../../components/basic/Tab.jsx';
import '../../../../../css/components/basic/tab.css';
Boot();
function Boot() {


    var query = {

        url   : "/bsuims/reactPageDataRequest.do",
        params: {
            reactPageName  : "degreeAnonymousThesisReviewResult",
            reactActionName: "deegreeThesisReviewResultUseReact"
        }
    }
    var bean = {
        url   : "/bsuims/reactPageDataRequest.do",
        params: {
            reactPageName  : "degreeAnonymousThesisReviewResult",
            reactActionName: "deegreeThesisReviewPanelUseReact"
        }
    }
    var filterField = {
        "order"        : true,
        "stuNum"       : true,
        "stuName"      : true,
        "grade"        : true,
        "stuTypeName"  : true,
        "stuMajorName" : true,
        "thesisLevel"  : true,
        "commentResult": true,
        "attachs"      : true
    }


    var data = [
        {
            "name":"查看课表" ,comp: {
                name        : "PanelTable",
            autoComplete: true,
            query       : query,
            bean        : bean,
            filterField : filterField
                            }
        },
        {
            "name":"学生表现" ,comp: {
            name        : "PanelTable",
            autoComplete: true,
            query       : query,
            bean        : bean,
            filterField : filterField
                                }
        },
        {
            "name":"学位信息" ,comp: {
            name        : "PanelTable",
            autoComplete: true,
            query       : query,
            bean        : bean,
            filterField : filterField
                                }
        },
        {
            "name":"学籍信息" ,comp: {
            name        : "PanelTable",
            autoComplete: true,
            query       : query,
            bean        : bean,
            filterField : filterField
                                }
        }
    ];


    render(
        <Tab data={data}/>
        , document.getElementById('root'))
}