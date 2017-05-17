import React from 'react';
import {render} from 'react-dom';
import Table from '../../../../../../components/forms/Table.jsx';
import ListElement from '../../../../../../components/basic/ListElement.jsx';
import ButtonElement from '../../../../../../components/basic/ButtonElement.jsx';
import CoupleTableElement from '../../../../../../components/compounds/coupleTable/CoupleTableElement.jsx';
import OrdinaryTable from '../../../../../../components/forms/OrdinaryTable.jsx';
import SelectPublicCourse from './selectPublicCourse.jsx';
import SelectAcrossCourse from './selectAcrossCourse.jsx';
import '../../../../../../css/serviceHobby/diminishMainCompound.css';

/**
 * @author:zyy
 */

var DiminishMainCompound=React.createClass({
    onClickPublic:function(){
        this.setState({buttonOption:"public"});
    },
    onClickAcross:function(){
        this.setState({buttonOption:"across"});
    },
    getInitialState:function(){
        return {buttonOption:"cultivate"}
    },
    clickReturn:function(ob){
        return {buttonOption:ob}
    },

    render:function(){

        console.log('...');

        function cb(ob){
            console.log("ob=" + ob);
            if(ob!==undefined&&ob!==null)
            {
                if(ob.index!==undefined&&ob.index!==null) {
                    if(this.props.index!==ob.index)//与发出消息的组件编号不同
                    {
                        var addRegex=/^add/g;
                        var data=this.state.data;
                        if(addRegex.test(ob.method))//将消息源的记录添加
                        {
                            if(ob.multiCheck==true)
                            {
                                ob.content.map(function(item,i){
                                    data.push(item);
                                });
                            }else{
                                data.push(ob.content);
                            }
                            var titles=new Array();
                            var cols;
                            for(var field in data[0])
                            {
                                titles.push(field);
                            }
                            cols=titles.length;
                            this.setState({data:data,cols:cols,titles:titles,data$initialed:true});
                        }
                    }
                }
            }
        }
        function check$apply$1(ob){
            console.log("ob="+ob);
        }

        var check$apply$2=function(ob){
            console.log("ob="+ob);

        }

        var data$options={
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                reactPageName:'newCultivatePlanPage',
                reactActionName:'newPlanSelectCourse'
            }
        }
        var data$options$1={

            subscribe:[{type:'fire',callback:cb}]

        }

        var data$options$2={
            subscribe:[{type:'fire',callback:cb}]
        }

        var data$options$3={
            subscribe:[{type:'fire',callback:cb}]
        }

        var tags=[
            {"data-options":data$options$1}
            ,{"data-options":data$options$2}
            ,{"data-options":data$options$3} ];

        var clickReturn=this.clickReturn;  //点击返回
         //根据buttonOption的状态渲染不同的组件
        if(this.state.buttonOption=="cultivate"){  //渲染培养计划和培养方案
            return(
                <div className="diminishMain">
                    <CoupleTableElement tags={tags} data-options={data$options}/>

                    <button type="button" className="public" onClick={this.onClickPublic}>添加公共选修课</button>
                    <button type="button" className="across" onClick={this.onClickAcross}>跨学院选课</button>
                </div>);
        }
        if(this.state.buttonOption=="public"){  //进入公选课
            return(
                <div className="selectPubMain">
                    <SelectPublicCourse clickReturn={clickReturn} />
                </div>);
        }
        if(this.state.buttonOption=="across"){  //进入跨专业选课
            return(
                <div className="selectAcross">
                    <SelectAcrossCourse clickReturn={clickReturn} />
                </div>);
        }
    }
});
module.exports=DiminishMainCompound;




