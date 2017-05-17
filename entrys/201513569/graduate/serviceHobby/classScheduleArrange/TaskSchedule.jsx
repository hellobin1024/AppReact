import React from 'react';
import {render} from 'react-dom';

import NavbarItem from './NavbarItem';
import ClassCalender from './ClassCalender';

var TaskSchedule = React.createClass({
    selectTerm: function(t){
        this.setState({termSelected: t});
    },

    selectCollege: function (c) {
        if(this.props.initRoom!==undefined && this.props.initRoom!==null){
            this.props.initRoom(c);
        }
        this.setState({collegeSelected: c});
    },

    selectCollege1: function (c1) {
        this.setState({collegeSelected_1: c1});
    },

    selectRoom: function(r){
        this.setState({roomSelected: r});
    },

    queryFunc: function(){
        if (this.state.termSelected == undefined || this.state.termSelected == null){
            alert("请选择学期！");
            return;
        } else if(this.state.collegeSelected == undefined || this.state.collegeSelected == null ||
            this.state.collegeSelected == "-1" || this.state.collegeSelected == -1){
            alert("请选择一级学院！");
            return;
        } else if(this.state.roomSelected == undefined || this.state.roomSelected == null ||
            this.state.roomSelected == "-1" || this.state.roomSelected == -1){
            alert("请选择教室！");
            return;
        }
        // 二级学院是可选的
        this.props.queryFunc(this.state.termSelected,this.state.collegeSelected,
                    this.state.collegeSelected_1, this.state.roomSelected);
    },

    handleSaveScheduleFunc: function(saveElem){
        saveElem.termId = this.state.termSelected;
        saveElem.roomId = this.state.roomSelected;
        this.props.saveHandleFuntion(saveElem);
    },

    getInitialState: function() {
        var termInfo=null;
        if(this.props.termInfo !==null && this.props.termInfo !==undefined){
            termInfo =this.props.termInfo;
        }
        //termInfo 就当前学期所以去第一个
        return {termSelected: termInfo[0].value, collegeSelected: null, collegeSelected_1: null, roomSelected: null};
    },

    render: function() {
        return (
            <div>
                <NavbarItem
                    termInfo={this.props.termInfo}
                    collegeInfo={this.props.collegeInfo}
                    collegeInfo_1={this.props.collegeInfo_1}
                    roomInfo={this.props.roomInfo}
                    queryFunc={this.queryFunc}
                    selectTerm = {this.selectTerm}
                    selectCollege = {this.selectCollege}
                    selectCollege1 = {this.selectCollege1}
                    selectRoom={this.selectRoom}
                    />
                {/*<TermSelection
                 termInfo = {this.props.termInfo}
                 queryFunc = {this.queryWithTerm} />*/}
                {/*  <RoomSelection
                 roomInfo = {this.props.roomInfo}
                 queryFunc = {this.queryWithRoom} />*/}
                <ClassCalender
                    personList={this.props.personList}
                    taskList={this.props.taskList}
                    teachTypeList={this.props.teachTypeList}
                    classMatrix={this.props.classMatrix}
                    saveHandleFuntion={this.handleSaveScheduleFunc}
                    inputFunc={this.props.inputFunc}/>
            </div>
        )
    }
});
module.exports=TaskSchedule;