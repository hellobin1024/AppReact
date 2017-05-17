import React from 'react';
import {render} from 'react-dom';
import News from '../modules/News.jsx';
import PasswordModify from '../password/PasswordModify.jsx';
import Tab from '../../../../../components/basic/Tab.jsx';
import NEWS from '../data/news.json';
import '../../../../../css/serviceHobby/basic/home.css';
import HighLight from '../../../../../components/basic/HighLight.jsx';
var SyncActions = require('../../../../../components/flux/actions/SyncActions');
var Home = React.createClass({
    emitDevote:function(){
        SyncActions.devoteInBusiness(false);
    },
    render: function () {
        this.emitDevote();
        var bean = {
            url   : "/bsuims/reactPageDataRequest.do",
            params: {
                reactPageName  : "degreeAnonymousThesisReviewResult",
                reactActionName: "deegreeThesisReviewPanelUseReact"
            }
        }

        var personBean={

            url:"/bsuims/reactPageDataRequest.do",
            params: {
                reactPageName: "freshmanWelcomeWorkbenchRulePage",
                reactActionName: "getStudentRegisterInfoReact"
            }
        }
        var trafficquery={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                reactPageName  : "StudentTrafficRuleStudentTrafficRulePage",
                reactActionName: "trafficPlanInitReact"
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
            <div className="Home">
                <div>
                    <News query={{
                                             url:"/bsuims/reactPageDataRequest.do",
                                            params:{
                                                reactPageName:"groupNewsReactPage",
                                                reactActionName:"listTypeNewsUseReact"
                                            }
                                         }}
                          auto={true}/>;
                </div>



                <div className="total" style={{minHeight:"650px",marginTop:"0px",paddingBottom:"30px"}}>
                    <Tab data={[
                {
                  "name":"个人信息" ,
                  comp: {
                        name:"Panel",
                        auto:true,
                        autoComplete:true,
                        title:"个人信息",
                        bean:personBean,
                        width:"1024px",
                        paddingLeft:"0px",
                        highLight:false,
                     }
                },
                {
                    "name":"接站车次",
                    comp:{
                        name:"IFrame",
                        category:'05',
                        width:"980px",
                        auto:true
                         }
                },
                {
                    "name":"地图",
                    comp:{
                        name:"Zoomer",
                        data:'images/image-big.jpg',
                        auto:true
                         }
                },
                 {
                    "name":"饮食",
                    comp:{
                        name:"IFrame",
                        category:'01',
                        width:"980px",
                        auto:true
                         }
                 },
                  {
                    "name":"住宿",
                    comp:{
                        name:"IFrame",
                        category:'02',
                        width:"980px",
                        auto:true
                         }
                 },
                  {
                    "name":"交通",
                    comp:{
                        name:"IFrame",
                        category:'03',
                        auto:true,
                        width:"980px"
                         }
                 },
                 {
                    "name":"医疗",
                    comp:{
                        name:"IFrame",
                        category:'04',
                        auto:true,
                        width:"980px"
                         }
                 }

                ]}
                         width="1024px" gradient={true}/>

                    {this.props.children}
                </div>
            </div>

        )

    }
});

export default Home;