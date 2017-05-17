import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import Ul from '../../../../../components/basic/Ul.jsx';

import '../../../../../css/serviceHobby/commonFunction.css';
var SyncActions= require('../../../../../components/flux/actions/SyncActions');

var SyncStore = require('../../../../../components/flux/stores/SyncStore');
var ProxyQ = require('../../../../../components/proxy/ProxyQ');


var trans={
    '0':'one',
    '1':'two',
    '2':'three',
    '3':'four',
    '4':'five',
    '5':'six',
    '6':'seven'
};



var CommonFunction=React.createClass({
    downCb:function(){
        let candidate_panel=this.refs["candidate-panel"];
        if($(candidate_panel).css("display")=="none")
            $(candidate_panel).show();
        else
            $(candidate_panel).hide();
    },
    candidateCb:function(ob){
        //TODO:process ob
        this.fetch(ob);
    },
    cancelCb:function(){
        let candidate_panel=this.refs["candidate-panel"];
        $(candidate_panel).hide();
    },
    clickCb:function(){
        var slider=this.refs.slider;
        var left=this.state.left;
        $("#slider").animate({left:"-920px"});
    },
    clickCbRight:function(){
        var slider=this.refs.slider;
        $("#slider").animate({left:"920px"});
    },
    fetch:function(candidate){
        var url="/bsuims/reactPageDataRequest.do";
        var params={
            reactPageName:"registerRulePage",
            reactActionName:"getStepInfoReact"
        };
        //将已选中的菜单加入
        if(candidate!==undefined&&candidate!==null)
            params.candidate = JSON.stringify(candidate);
        ProxyQ.queryHandle(
            null,
            url,
            params,
            null,
            function(response){
                //这里需要统一规范后台返回的数据格式
                var ob=null;
                if(response.data!==undefined&&response.data!==null&&response.data!="")
                {
                    if(ob==null)
                        ob=new Object();
                    //已选菜单
                    ob.funcs=response.data[0];
                    //未选菜单
                    ob.candidate_funcs=response.data[1];
                    SyncActions.updateRoute(response.data);
                }
                else
                    console.log("type of response is wrong");
                if(response.finishes!==undefined&&response.finishes!==null)
                    ob.finishes=response.finishes;
                if(ob!==null)
                    this.setState(ob);

            }.bind(this)
        );

    },


    getInitialState:function(){
        let candidate=null;
        if(this.props.candidate!==undefined&&this.props.candidate!==null)
            candidate=this.props.candidate;
        return ({finishes: null,funcs:null,step:"120px",left:"0px",candidate:candidate,candidate_funcs:null});
    },

    render:function(){
        var funcs=this.state.funcs;
        if(funcs==null||funcs==undefined){
            if(this.props.auto==true)
                this.fetch();
            return <div></div>
        }else{
            funcs=this.state.funcs;
            var menus=new Array();
            var finishes=this.state.finishes;
            funcs.map(function(func,i) {
                var span=null;
                //if(finishes!==null&&finishes!==undefined) {
                //    if(finishes[func.label]==true) {
                //        span=   <span style={{position: "absolute",marginLeft: "30px",top: "50px",fontSize:"1.6em"}}>
                //                <i className="fa fa-check" style={{color:"#222"}}></i>
                //            </span>
                //    }
                //}
                let route=func.route;
                let outerLink=/^http:\/\//;
                if(outerLink.exec(route))//外链
                {
                    menus.push(
                        <div className={"block "+trans[i]} key={i} >
                            {span}
                            <div className="functionalAreas">
                                <a
                                    href={func.route!==undefined&&func.route!==null?func.route:""} target="_blank">
                                    <img src={Deploy.getResourceDeployPrefix()+"/images/"+func.img}
                                         alt="功能1"></img>
                                </a>
                                <span className="functionSpan">
                                    {func.label}
                                </span>
                            </div>
                        </div>);

                }else {
                    menus.push(
                        <div className={"block "+trans[i]} key={i} >
                            {span}
                            <div className="functionalAreas">
                                <Link
                                    to={App.getAppRoute()+(func.route!==undefined&&func.route!==null?func.route:"")}>
                                    <img src={Deploy.getResourceDeployPrefix()+"/images/"+func.img}
                                         alt="功能1"></img>
                                </Link>
                                <span className="functionSpan">
                                    {func.label}
                                </span>
                            </div>
                        </div>);
                }
            });

            let candidate=null;
            let down=null;
            if(this.state.candidate==true)
            {
                var candidate_funcs=this.state.candidate_funcs;

                candidate=
                    <div className="candidate-panel" ref="candidate-panel">
                        <Ul candidateCb={this.candidateCb}
                            menus={candidate_funcs}
                            cancelCb={this.cancelCb}/>
                    </div>;

                down=
                    <div className="down">
                        <span className="fa fa-angle-double-down" onClick={this.downCb}></span>
                    </div>;
            }
            return(
                <div className="common-function"   style={{position:"absolute",width:"1150px",height:"100px"}}>
                    {menus}
                    {candidate}
                    {down}
                </div>


            );

        }

    },
    componentDidMount:function(){
        // var dom_node=$("#_mustdone")[0];
        // dom_node.addEventListener("_finish",this._onFinish);
    },
    componentWillMount:function(){
        // var dom_node=$("#_mustdone")[0];
        // dom_node.removeEventListener("_finish",this._onFinish);
    }
});
module.exports=CommonFunction;

