import React from 'react';
import {render} from 'react-dom';
import PasswordModify from '../password/PasswordModify.jsx';
import AllCourseQuery from './allCourseQuery/allCourseQueryMain.jsx';
import GreenChannelApply from './greenChanel/greenChannelApplyMain.jsx';
var config=require('../../../../../config.json');
import News from './News.jsx';
import TrafficPlan from './TrafficPlan/TrafficPlanMain.jsx';
import '../../../../../css/serviceHobby/basic/mainSection.css';
var SyncActions = require('../../../../../components/flux/actions/SyncActions');


var MainSection = React.createClass({
    iframeLoad          : function (evt) {
        var target = evt.target;
        //$("#mainFrame").context.documentElement.scrollHeight
        var height = null;
        height = target.contentDocument.body.scrollHeight;
        target.height = height;
        //height=document.body.scrollHeight;


    },
    syncHandle          : function (ob) {
        //TODO:create new ob or update...
        var route = this.state.route[0];
        var label;
        switch (route) {
            case "/password/modify":
                label = "密码修改";
                break;
            case "/allCourseQuery":
                label = "成绩查询";
                break;
            case "/news":
                label = "查看新闻";
                break;
            default:
                label = "";
                break;
        }
        if (ob.completed) {
            SyncActions.cleanRoute(route);
        }
        else
            SyncActions.updateData(route, ob.required, label);
    },
    emitDevote:function(path){
        SyncActions.devoteInBusiness(true);
    },
    getInitialState:function(){
      return ({route:[]});
    },
    render              : function () {
        var path = this.props.route.path;
        var ctrl;
        var breadcrumb;
        var label;
        var data = this.props.route.data;
        console.log('....'+this.props.route.path);
        if (path !== undefined && path !== null) {
            this.emitDevote(path);
            var route = this.state.route;
            if (route.length != 1)
                route.splice(0, 1);
            route.push(path);
            switch (path) {
                case App.getAppRoute() + "/password/modify":
                    ctrl = <PasswordModify/>
                    label = "密码改业务";
                    break;
                case App.getAppRoute() + "/allCourseQuery":
                    ctrl = <AllCourseQuery syncHandle={this.syncHandle} route={path}>
                    </AllCourseQuery>
                    label = "成绩查询业务";
                    break;
                case App.getAppRoute() + "/news":
                    ctrl = <News query={{
                                             url:"/bsuims/reactPageDataRequest.do",
                                            params:{
                                                reactPageName:"groupNewsReactPage",
                                                reactActionName:"listTypeNewsUseReact"
                                            }
                                         }}
                                 auto={true}/>;
                    label = "新闻查询业务";
                    break;
                case App.getAppRoute() + "/newCultivateAllCourseQueryPage":
                    ctrl =  <AllCourseQuery/>;
                    label = "课程查询业务";
                    break;
                case App.getAppRoute() + "/greenChannelApply":
                    console.log('......')
                    ctrl = <GreenChannelApply/>;
                    label = "绿色通道";
                    break;
                case App.getAppRoute() + "/trafficPlan":
                    ctrl = <TrafficPlan/>;
                    label = "出行计划";
                    break;
                default:
                    var reg = /.*\.do.*[\.do|\.jsp]?.*/;
                    var re = reg.exec(path);

                    var proxyServer="";
                    if(window.App.getModel()=="debug")
                    {
                        if(window.App.getAppRoute()=="")
                        {
                            console.log('......');
                            var proxy=config.devServer.proxy;
                            for (var field in proxy)
                            {
                                var re = /^(\/.*?)\//;
                                proxyServer= re.exec(field)[1];
                                break;
                            }
                        }
                        else if(window.App.getAppRoute().indexOf("/")!=-1)
                        {
                            var re = /^(\/.*?)\//;
                            proxyServer= re.exec(window.App.getAppRoute())[1];
                        }
                    }else{
                        proxyServer='';
                    }




                    if (re !== undefined && re !== null) {
                        //TODO:iframe component render
                        path = path.replace(App.getAppRoute(), "");
                        ctrl =
                            <iframe style={{width:"100%",position:"relative"}} id="mainFrame"
                                    frameBorder="0" scrolling="no"
                                    src={proxyServer+path+(data!=null&&data!==undefined?data:"")} onLoad={this.iframeLoad}
                                />

                    } else {

                    }
                    break;
            }

            var paths = path.split("/");
            var spans = new Array();
            if (paths[0] == "" && paths[1] == "") {
                spans.push(<span className="separator" key={0}>/</span>);
            } else {
                var k = 0;
                paths.map(function (item, i) {
                    if (i == 0)
                        spans.push(<span className="separator" key={k++}></span>);
                    else {
                        spans.push(<span className="path-segment" key={k++}>{item}</span>);
                        if (i !== paths.length - 1)
                            spans.push(<span className="separator" key={k++}>/</span>);
                    }

                });
            }
            breadcrumb =
                <div className="crumb_box">
                    <div className="crumb_title">
                        <span className="crumb_title_content">{spans}</span>

                        <div className="crumb_detail">{label}</div>
                    </div>
                </div>
        }

        //remove breadcrumb by zyy,yeah i am so native


        return (
            <div style={{margin: "0px auto 0 auto",paddingBottom:"200px",width:"100%"}} className="baba">
                <div ref="mainSection" className="mainSection"
                     style={{display:"none",width:"1024px",marginLeft:"auto",marginRight:"auto"}}>
                    {ctrl}
                </div>
            </div>
        );


    },
    componentDidMount   : function () {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["mainSection"]).slideDown(300);
    },
    componentWillUnmount: function () {
        //TODO:emit change
        $(this.refs["mainSection"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});
module.exports = MainSection;