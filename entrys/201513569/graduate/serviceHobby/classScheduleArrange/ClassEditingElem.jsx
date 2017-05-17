import React from 'react';
import {render} from 'react-dom';

import AbstractButtonEle from './AbstractButtonEle';
import ButtonElem from './ButtonElem';

var ClassEditingElem = React.createClass({
    personSelectFunc:function(target) {

        console.log("person select===" + target.perName);
        this.state.editingElem.teacher=target;
        this.setState({teacherName: target.perName});
        $("#input_personinfo").val(target.perName);
    },
    menuBlurFunc:function(evt) {
        console.log("mouse click");
        $("#personMenu")[0].style.visibility = "hidden";
    },
    focusFunc:function(evt) {
        $("#personMenu")[0].style.visibility = "hidden";

    },
    blurFunc:function(evt) {
        $("#personMenu")[0].style.visibility = "hidden";
    },
    changeFunc:function(evt){
        var target=evt.target;
        console.log("value=====\r\n" + target.value);
        var v=target.value;
        try{
            if(v==undefined||v=="")
                return ;
            v=parseInt(target.value);
            if(typeof v!="number"&&typeof v!=Number)
                return ;
            if(isNaN(v))
                return ;
        }
        catch(e)
        {
            alert("请输入有效整数");
            console.log("error message=====\r\n"+e.toString());
            return ;
        }
        if(target.id=="input_weekStart")
            this.state.editingElem.weekStart=v;
        if(target.id=="input_weekCount")
            this.state.editingElem.weekCount=v;
        console.log("weekStart=====\r\n" + this.state.editingElem.weekStart+
            "\r\nweekCount=====\r\n"+this.state.editingElem.weekCount);

    },
    saveClickFunc: function() {
        if(this.state.editingElem.taskId==undefined || this.state.editingElem.taskId==null){
            alert("请选择课程！");
            return;
        } else if(this.state.editingElem.weekCount==undefined || this.state.editingElem.weekCount==null){
            alert("请填写课程周长！");
            return;
        }

        this.props.saveClick(this.state.editingElem);
    },
    deleteClickFunc: function() {
        this.props.deleteClick(this.state.editingElem);
    },
    taskSelectClickFunc: function(t) {
        this.state.editingElem.title = t.name;
        this.state.editingElem.taskId = t.value;
        this.setState({editingElem: this.state.editingElem});
    },
    teachTypeSelectClickFunc: function(t) {
        this.state.editingElem.teachTypeName = t.name;
        this.state.editingElem.teachType = t.value;
        this.setState({editingElem: this.state.editingElem});
    },
    spanSelectClickFunc: function(e) {
        this.state.editingElem.sectionCount = parseInt(e.target.textContent);
        this.setState({editingElem: this.state.editingElem});
    },
    ioewSelectClickFunc: function(e) {
        if(e.target.checked) {
            this.state.editingElem .isOddorEvenWeek = 1;
        } else {
            this.state.editingElem.isOddorEvenWeek = 0;
        }
        this.setState({editingElem: this.state.editingElem, ioew: e.target.checked});
    },
    getInitialState: function() {
        var editingElem = {};
        editingElem.sectionStart = this.props.elem.rowIndex+1; //上课节次从1开始
        editingElem.sectionDay = this.props.elem.columnIndex+1; //上课日期从周1开始
        editingElem.title = this.props.elem.title;
        editingElem.taskId = this.props.elem.taskId;
        editingElem.sectionCount = this.props.elem.spn;
        editingElem.scheduleId = this.props.elem.scheduleId;
        editingElem.teachTypeName = this.props.elem.teachTypeName;
        editingElem.teachType = this.props.elem.teachType;
        editingElem.weekStart=this.props.elem.weekStart;
        editingElem.weekCount=this.props.elem.weekCount;
        editingElem.teaName=this.props.elem.teaName;
        editingElem.teaNum=this.props.elem.teaNum;
        editingElem.isOddorEvenWeek=this.props.elem.isOddorEvenWeek;

        var ioew = false;
        if (this.props.elem.isOddorEvenWeek === 1) {
            ioew = true;
        }
        var teacherName="";
        if(this.props.elem.teaName!=null)
            teacherName=this.props.elem.teaName;
        return {editingElem: editingElem, ioew: ioew,teacherName:teacherName};
    },
    render: function() {
        {/*style element below*/}
        var tdStyle={width:"20%"};
        var maginStyle = {marginLeft: "30px",marginBottom:"-2px"};
        var alignStyle={verticalAlign:"text-bottom"};
        var sizeStyle = {width: "20px", height: "20px"};
        var spanMaginStyle = {marginTop: "2px"};
        var inlineStyle = {display: "inline"};
        var marginLeftStyle = {marginLeft: "30px"};
        var spanStyle = {marginTop: "20px"};
        var divStyle = {marginTop: "10px",marginLeft:"0px"};
        var bottomStyle = {marginBottom: "10px"};
        var hideStyle = {display: "none"};
        var unVisibleStyle = {visibility: "hidden"};

        {/*variable element below*/}


        var taskSelectClickFunc = this.taskSelectClickFunc;
        if (this.props.taskList != null ) {
            var tasks = this.props.taskList.map(function(task, index) {
                return (
                    <li key={index}>
                        <ButtonElem btnElem={task}
                                    handleClick={taskSelectClickFunc} />
                    </li>
                );
            });
        }
        var teachTypeSelectClickFunc = this.teachTypeSelectClickFunc;
        if (this.props.teachTypeList != null ) {
            var teachTypes = this.props.teachTypeList.map(function(teachType, index) {
                return (
                    <li key={index}>
                        <ButtonElem btnElem={teachType}
                                    handleClick={teachTypeSelectClickFunc} />
                    </li>
                );
            });
        }
        var personLists=undefined;
        var personSelectFunc=this.personSelectFunc;
        if(this.props.personList) {
            personLists=this.props.personList.map(function(personInfo,index) {

                return( <li key={index}><AbstractButtonEle ele={personInfo} tName="perName" cb={personSelectFunc}/></li>);
            });
        }

        //if(this.props.elem.spn!=1) {
        //    alert("spn exception ===" + this.props.elem.spn);
        //}
        //console.log("teachInfo===\r\n"+ this.state.editingElem.teacherInfo);

        {/*property this.props.elem.spn in ClassEditingElem control rowSpan???*/}
        return (
            <td rowSpan={this.props.elem.spn} colSpan={1} style={tdStyle}>
                <div className="input-group" style={bottomStyle}>
                    <div>
                        <span >选择课程</span>
                        <div className="dropdown" style={Object.assign(inlineStyle,marginLeftStyle)}>
                            <button className="btn btn-default dropdown-toggle"
                                    type="button" id="taskdropdownmenu" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true">
                                {this.state.editingElem.title}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="taskdropdownmenu">
                                {tasks}
                            </ul>
                        </div>
                    </div>
                    <div  style={divStyle}>
                        <span>授课类型</span >
                        <div className="dropdown" style={Object.assign(inlineStyle,marginLeftStyle)}>
                            <button className="btn btn-default dropdown-toggle"
                                    type="button" id="teachtypedropdownmenu" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true">
                                {this.state.editingElem.teachTypeName}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="teachtypedropdownmenu">
                                {teachTypes}
                            </ul>
                        </div>
                    </div>
                    <div  style={divStyle}>
                        <span>课时跨度</span>
                        <div className="dropdown" style={Object.assign(inlineStyle,marginLeftStyle)}>
                            <button className="btn btn-default dropdown-toggle"
                                    type="button" id="spandropdownmenu" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="true">
                                {this.state.editingElem.sectionCount}
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="spandropdownmenu">
                                <li><button type="button" className="list-group-item"
                                            onClick={this.spanSelectClickFunc}>1</button></li>
                                <li><button type="button" className="list-group-item"
                                            onClick={this.spanSelectClickFunc}>2</button></li>
                                <li><button type="button" className="list-group-item"
                                            onClick={this.spanSelectClickFunc}>3</button></li>
                                <li><button type="button" className="list-group-item"
                                            onClick={this.spanSelectClickFunc}>4</button></li>
                            </ul>
                        </div>
                    </div>


                    <div style={divStyle}>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon1">起始周</span>
                            <input id="input_weekStart" type="text" className="form-control" placeholder="编辑开始时间" aria-describedby="basic-addon1"
                                   defaultValue={this.state.editingElem.weekStart} onChange={this.changeFunc}/>
                        </div>
                    </div>
                    <div style={divStyle}>
                        <div className="input-group">
                            <span className="input-group-addon" id="basic-addon2">课程周长</span>
                            <input id="input_weekCount" type="text" className="form-control" placeholder="编辑周长" aria-describedby="basic-addon2"
                                   defaultValue={this.state.editingElem.weekCount} onChange={this.changeFunc}/>
                        </div>
                    </div>
                    <div style={divStyle}>
                        <span >是否单双周</span>
                        <input type="checkbox" onClick={this.ioewSelectClickFunc}
                               checked={this.state.ioew} style={Object.assign(maginStyle,alignStyle,sizeStyle)}></input>
                    </div>
                </div>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={this.saveClickFunc}>保存</button>
                </span>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={this.props.cancelClick}>返回</button>
                </span>
				<span className="input-group-btn">
                    <button className="btn btn-default" type="button"
                            onClick={this.deleteClickFunc}>删除</button>
                </span>
            </td>
        );

    }
});
module.exports=ClassEditingElem;