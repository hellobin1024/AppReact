import React from 'react';
import {render} from 'react-dom';
var News = require('./News.jsx');
var Tab = require('../../../../../../components/basic/Tab.jsx');
var NEWS = require('../../data/news.json');
import '../../../../../../css/serviceHobby/basic/home.css';
var Home = React.createClass({

    render: function () {
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


        return (
            <div style={{marginTop:"120px"}}>

                <News data={NEWS}/>

                <div className="vcc-index_title_box vcc-index_title_box_1">
                    <div className="vcc-index_title">
                        <span href="#" className="vcc-index_title_a">个人信息</span>

                        <div className="vcc-index_title_box2">个人信息小助手 方便快速管理查看个人信息</div>
                    </div>
                </div>


                <Tab data={[
        {
            "name":"查看课表" ,comp: {
                name        : "Task",
            data:[
            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,

            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,


            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,
            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,
            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,
            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
            ,
            [
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"},
                {name: "生理健康", rowSpan: "2"}
            ]
        ]
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
    ]} width="1024px"/>


                {this.props.children}
            </div>
        )

    }
});

export default Home;