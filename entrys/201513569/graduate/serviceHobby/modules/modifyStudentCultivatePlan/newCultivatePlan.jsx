import React from "react";
import {render} from 'react-dom';
import CoupleTableElement from '../../../../../../components/compounds/coupleTable/CoupleTableElement.jsx';
import SelectAcrossCourse from './selectAcrossCourse.jsx';
import SelectPublicCourse from './selectPublicCourse.jsx';
var ProxyQ = require('../../../../../../components/proxy/ProxyQ');


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
var data$options$1={
    subscribe:[{type:'fire',callback:cb}]
}

var data$options$2={
    subscribe:[{type:'fire',callback:cb}]
}
var tags=[
    {"data-options":data$options$1}
    ,{"data-options":data$options$2}
];
var sessionTable={
    url:"/bsuims/reactPageDataRequest.do",
    params:{
        reactPageName:'newCultivateSessionPage',
        reactActionName:'newPlanSelectSession',
        stuId:null,
    }
}

var NewCultivatePlan = React.createClass({
    getInitialState:function(){
        return({
            stuInfo:null,
            stuType:null,
            majorId:null,
            stuName:null,
            stuNum:null,
            grade:null,
            status:null,
            stuTypeArr:null,
            majorArr:null,
            stuId:null,
            flag:null,
            buttonOption:"cultivate",}
        )
    },
    getInitalDataS:function(){
        var manageInfo = {// not proxy
            url: "/bsuims/reactPageDataRequest.do",
            params: {
                reactPageName: 'newVerifyPersonTypePage',
                reactActionName: 'collModifyCulPlanReact'
            }
        };
        ProxyQ.queryHandle(
            null,
            manageInfo.url,
            manageInfo.params,
            null,
            function(data){
                var stuTypeArr = new Array();
                var majorArr = new Array();
                data.stuTypeArray.map(function(index,i){
                    stuTypeArr.push(index);
                });
                data.majorArray.map(function(index,i){
                    majorArr.push(index);
                });
                this.setState({stuTypeArr:stuTypeArr,majorArr:majorArr,status:"1"})
            }.bind(this));
    },
    changeStuType:function(event){
        var val = event.target.value;
        if(val !== undefined && val !== null && val !== ""){

            var manageInfo = {//not proxy
                url: "/bsuims/reactPageDataRequest.do",
                params: {
                    reactPageName: 'newVerifyPersonTypePage',
                    reactActionName: 'collModifyCulPlanReact',
                    stuTypeCode:val,
                }
            };
            ProxyQ.queryHandle(
                null,
                manageInfo.url,
                manageInfo.params,
                null,
                function(data){
                    var majorArr = new Array();

                    data.majorSArray.map(function(index,i){
                        majorArr.push(index);
                    });
                    this.setState({stuType:val,majorArr:majorArr,status:"1"})
                }.bind(this));

        }
    },
    changeMajorId:function(event){
        var val = event.target.value;
        if(val !== undefined && val !== null && val !== "")
            this.setState({majorId:val});
    },
    changeStuName:function(event){
        var val = event.target.value;
        if(val !== undefined && val !== null && val !== "")
            this.setState({stuName:val});
    },
    changeStuNum:function(event){
        var val = event.target.value;
        if(val !== undefined && val !== null && val !== "")
            this.setState({stuNum:val});
    },
    changeGrade:function(event){
        var val = event.target.value;
        if(val !== undefined && val !== null && val !== "")
            this.setState({grade:val});
    },
    modifyHandle:function(event){
        var stuId = event.target.value;
        this.setState({stuId:stuId,flag:"1"});
    },
    queryHandle:function(){
        var queryParam = {//not proxy
            url:'/bsuims/reactPageDataRequest.do',
            params: {
                stuType:this.state.stuType,
                majorId:this.state.majorId,
                stuName:this.state.stuName,
                stuNum:this.state.stuNum,
                grade:this.state.grade,
                flag:"1",
                reactPageName: 'newVerifyPersonTypePage',
                reactActionName: 'collModifyCulPlanReact'
            }
        };

        ProxyQ.queryHandle(
            null,
            queryParam.url,
            queryParam.params,
            null,
            function(data){
                var stuArr = data.stuArr;
                var stu_tr = new Array;
                for(var i = 0; i < stuArr.length;i++){
                    var arr_tr = stuArr[i];
                    var arr_td = new Array();
                    arr_td.push(<td key={"index"}>{i}</td>)
                    arr_td.push(<td key={"perNum"}>{arr_tr["stuNum"]}</td>)
                    arr_td.push(<td key={"perName"}>{arr_tr["stuName"]}</td>)
                    arr_td.push(<td key={"perType"}>{arr_tr["stuType"]}</td>)
                    arr_td.push(<td key={"majorName"}>{arr_tr["majorName"]}</td>)

                    arr_td.push(<td key={"isMark"}>{arr_tr["isMark"]}</td>)
                    arr_td.push(<td key={"checkState"}>{arr_tr["checkState"]}</td>)
                    if(arr_tr["planState"] !== null && arr_tr["planState"] !== undefined && arr_tr["planState"] ===1){
                        var stuId = arr_tr["stuId"];
                        var href={param:"../../gradms/bsuims/reactPageDataRequest.do?reactPageName=newCultivateSessionPage&&reactActionName=newGetVerifyTypeCode&&stuId="+stuId};

                        arr_td.push(<td key={"planState"}><button onClick={this.modifyHandle} value={stuId}>修改</button></td>)
                    }else if(arr_tr["planState"] !== null && arr_tr["planState"] !== undefined && arr_tr["planState"] ===0){
<<<<<<< HEAD
                        var stuId = arr_tr["stuId"];
                        arr_td.push(<td key={"planState"}><button onClick={this.modifyHandle} value={stuId}>查看</button></td>)
=======
                        arr_td.push(<td key={"planState"}>无法修改</td>)
>>>>>>> 6aa9dd509ae55e1a8da1f078947528ee2a92a0fe
                    }
                    stu_tr.push(<tr key={i}>{arr_td}</tr>);
                }
                this.setState({stuInfo:stu_tr});
            }.bind(this));
    },

    onClickPublic:function(){
        this.setState({buttonOption:"public"});
    },
    onClickAcross:function(){
        this.setState({buttonOption:"across"});
    },

    render:function(){
        if(this.state.status !== null && this.state.status !== undefined && this.state.status === "1" &&
            (this.state.stuId === null || this.state.stuId === undefined) &&(this.state.flag === null || this.state.flag === undefined)){

            var stuTypeArr = new Array();
            var majorArr = new Array();
            var stuTypeArray = this.state.stuTypeArr;
            var majorArray = this.state.majorArr;
            for(var i = 0; i < stuTypeArray.length;i++){
                stuTypeArr.push(<option value={stuTypeArray[i].value} key={i}>{stuTypeArray[i].label}</option>);
            }
            for(var i = 0; i < majorArray.length;i++){
                majorArr.push(<option value={majorArray[i].value} key={i}>{majorArray[i].label}</option>);
            }

            return(
                <div className="row" style={{marginTop: 40}}>
                    <div className="container" style={{textAlign:"center"}}>
                        <table className="table table-bordered center">
                            <thead>
                            <tr>
                                <td>学生类型:<select onChange={this.changeStuType}>{stuTypeArr}</select></td>
                                <td>专业:<select onChange={this.changeMajorId}>{majorArr}</select></td>
                            </tr>
                            <tr>
                                <td>学生姓名:<input type="text" onChange={this.changeStuName}/></td>
                                <td>学生学号:<input type="text" onChange={this.changeStuNum}/></td>
                            </tr>
                            <tr>
                                <td>年级:<input type="text" onChange={this.changeGrade}/></td>
                                <td><button onClick={this.queryHandle}>查询</button></td>
                            </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="container" style={{textAlign:"center"}}>
                        <table className="table table-bordered center">
                            <thead>
                            <tr>
                                <td>序号</td>
                                <td>学号</td>
                                <td>姓名</td>
                                <td>学生类型</td>
                                <td>所属专业</td>
                                <td>是否制定培养计划</td>
                                <td>导师审核</td>
                                <td>操作</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.stuInfo}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }else if(this.state.stuId !== null && this.state.stuId !== undefined) {

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

            var data$options={
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                    reactPageName:'newCultivatePlanPage',
                    reactActionName:'newPlanSelectCourse',
                    stuId:this.state.stuId,
                }
            };

            var stuId=this.state.stuId;

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
            if(this.state.buttonOption=="public"){  //进入公选课 ,传入学号
                return(
                    <div className="selectPubMain">
                        <SelectPublicCourse stuId={stuId} clickReturn={clickReturn} />
                    </div>);
            }
            if(this.state.buttonOption=="across"){  //进入跨专业选课，传入学号
                return(
                    <div className="selectAcross">
                        <SelectAcrossCourse stuId={stuId} clickReturn={clickReturn} />
                    </div>);
            }
            //return( <diminishMainCompound tags={tags} data$options={data$options}/>);

        }else if(this.state.flag === null || this.state.flag === undefined){
            this.getInitalDataS();
            return(<p></p>);
        }

    }
});
module.exports=  NewCultivatePlan;