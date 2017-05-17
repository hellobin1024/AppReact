import React from 'react';
import {render} from 'react-dom';
import News from '../modules/News.jsx';
import PasswordModify from '../password/PasswordModify.jsx';
import Tab from '../../../../../components/basic/Tab.jsx';
import NEWS from '../data/news.json';
import '../../../../../css/serviceHobby/basic/home.css';
import HighLight from '../../../../../components/basic/HighLight.jsx';
var Home =React.createClass({

    render:function(){
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
         <div className="total" style={{minHeight:"650px",marginTop:"0px",paddingBottom:"30px"}}>
             <HighLight type="OrdinaryTable"
                        title='<span  style="font-size: 14px;color: #6EA0FF;font-weight:bold;text-align:center">个人信息状态</span>'
                        query={{ url:'/bsuims/reactPageDataRequest.do',
                                   params: {
                                      reactActionName: "registerInformationReact",
                                      reactPageName  : "registerRulePage"
                                            }
                                 }}
                        filterField={{
                               "stuName":true,
		                       "stuNum":true,
		                       "feeStatus":true,
		                       "baseInfoFillStatus":true,
		                       "moralityFillStatus":true,
		                       "greenwayStatus":true,
		                       "trafiicFillStatus":true,
                               "studyStateStr":true
                             }}
                 />
             {this.props.children}
         </div>
     )

    }
});

export default Home;