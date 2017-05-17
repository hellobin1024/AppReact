import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'

import '../../../../../css/newsWelcome/commonFunction.css';
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
}



var CommonFunction=React.createClass({
    handleSubmit(event) {

        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path)
    },
    _checkFinish:function(){
        var instance=this;
        console.log('....');
        ProxyQ.queryHandle(null,'/bsuims/reactPageDataRequest.do',
            {
                reactPageName:"freshmanWelcomeWorkbenchRulePage",
                reactActionName:"getHomeWorkbenchInfoStateReact"
            },
            null,function(response){
                var finishes=response.data;
                if(finishes!==undefined&&finishes!==null)
                {
                    var finish_tri='';
                    for(var item in finishes)
                    {
                        finish_tri+=item+':'+finishes[item]+'\n';
                    }
                    console.log('finishes=='+finish_tri);
                }

                this.setState({finishes: finishes});

            }.bind(this));

    },
    _onFinish:function(data){
        var finish=data.detail;
        console.log('finish===' + finish);
        var finishes=this.state.finishes;
        if(finish!==undefined&&finish!==null) {
            if(finishes==null||finishes==undefined)
                finishes = {};
            if(finishes[finish.label]==true)//如果业务已经完成，则不需要提醒业务办理成功
            {
                this.setState({finishes: finishes});
                App.remodal.content("业务办理完成");
                window.App.remodal.show();
                console.log('...');
                //browserHistory.push(window.App.getAppRoute()+"/");
                return;
            }
            else
            {
                finishes[finish.label] = true;
                this.setState({finishes: finishes});
                App.remodal.content("业务办理完成");
                window.App.remodal.show();

            }

        }
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
    fetch:function(){
        var url="/bsuims/reactPageDataRequest.do";
        var params={
            reactPageName:"freshmanWelcomeWorkbenchRulePage",
            reactActionName:"getHomeWorkbenchInfoInitReact"
        };
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
                    ob.funcs=response.data;
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
        return ({finishes: null,funcs:null,step:"120px",left:"0px"});
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
                if(finishes!==null&&finishes!==undefined) {
                    if(finishes[func.label]==true) {
                        span=   <span style={{position: "absolute",marginLeft: "30px",top: "50px",fontSize:"1.6em"}}>
                                <i className="fa fa-check" style={{color:"#222"}}></i>
                            </span>
                    }
                }
                let route=func.route;
                let outerLink=/^http:\/\//;
                if(outerLink.exec(route))//外链
                {
                    let date=new Date();
                    var flag=false;
                    var month=date.getMonth()+1;
                    if(month>=8&&month<=9){
                        if((month==8&&date.getDate() > 15)||(month==9&&date.getDate() < 15)){
                            flag=true;
                        }
                        else if(month==8&&date.getDate() == 15&&date.getHours()>=8){
                            flag=true;
                        }
                        else if(month==9&&date.getDate() == 15&&date.getHours()<18){
                            flag=true;
                        }
                        else{
                            flag=false;
                        }
                    }

                            if (flag) {

                               if(finishes["个人基本信息"]!==undefined&&finishes["个人基本信息"]!==null&&finishes["个人基本信息"]==true
                                   &&finishes["家庭情况调查表"]!==undefined&&finishes["家庭情况调查表"]!==null&&finishes["家庭情况调查表"]==true
                                   &&finishes["个人贷款情况"]!==undefined&&finishes["个人贷款情况"]!==null&&finishes["个人贷款情况"]==true
                                   &&finishes["军训服装"]!==undefined&&finishes["军训服装"]!==null&&finishes["军训服装"]==true
                                   &&finishes["来校行程"]!==undefined&&finishes["来校行程"]!==null&&finishes["来校行程"]==true
                                   &&finishes["发展导师申请"]!==undefined&&finishes["发展导师申请"]!==null&&finishes["发展导师申请"]==true
                               ){

                                       menus.push(
                                           <div className={"block "+trans[i]} key={i}>
                                               {span}
                                               <div className="functionalAreas">
                                                   <a
                                                       href={func.route!==undefined&&func.route!==null?func.route:""}
                                                       target="_blank">
                                                       <img src={Deploy.getResourceDeployPrefix()+"/images/"+func.img}
                                                            alt="功能1"></img>
                                                   </a>
                                                 <span className="functionSpan">
                                                    {func.label}
                                                 </span>
                                               </div>
                                           </div>);
                               }
                               else {
                                       var tip=function(){
                                           App.remodal.content("请先完成前面“个人基本信息”到“发展导师申请”所有需要填写的信息");
                                           App.remodal.show();
                                       }
                                       menus.push(
                                           <div className={"block "+trans[i]} key={i} >
                                               {span}
                                               <div className="functionalAreas">
                                                   <a target="_blank" onClick={tip}>
                                                       <img src={Deploy.getResourceDeployPrefix()+"/images/"+func.img}
                                                            alt="功能1"></img>
                                                   </a>
                                          <span className="functionSpan">
                                              {func.label}
                                            </span>
                                               </div>
                                           </div>);
                                   }


                            }
                       else{

                        var tip=function(){
                            App.remodal.content("选床时间：2016年08月15日8:00 至 2016年09月15日18：00， 须在选房规定时段内才能选房，其它时间无法登录系统。");
                            App.remodal.show();
                        }
                        menus.push(
                            <div className={"block "+trans[i]} key={i} >
                                {span}
                                <div className="functionalAreas">
                                    <a target="_blank" onClick={tip}>
                                        <img src={Deploy.getResourceDeployPrefix()+"/images/"+func.img}
                                             alt="功能1"></img>
                                    </a>
                        <span className="functionSpan">
                            {func.label}
                        </span>
                                </div>
                            </div>);



                    }



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

            return(
                    <div   style={{position:"absolute",width:"1150px",height:"120px"}}>
                        {menus}
                    </div>


            );

        }

    },
    componentDidMount:function(){
        var dom_node=$("#_mustdone")[0];
        dom_node.addEventListener("_finish",this._onFinish);
    },
    componentWillMount:function(){
        var dom_node=$("#_mustdone")[0];
        dom_node.removeEventListener("_finish",this._onFinish);
    }
});
module.exports=CommonFunction;