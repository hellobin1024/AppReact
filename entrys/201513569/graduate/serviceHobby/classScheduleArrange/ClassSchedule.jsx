//classSchedule 学院排课
import React from 'react';
import {render} from 'react-dom';

import TaskSchedule from './TaskSchedule';

var ClassSchedule = React.createClass({
    initTermAndCollege: function(){
        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: 'json',
            data: {reactPageName: 'newCultivateTeachSchedulePage',
                reactActionName: 'getTermListCollegeListJS'},
            cache: false,
            success: function(data) {
                this.setState({
                    termInfo: data.termList, initedTerm: true,
                    teachTypeList: data.teachTypeList,
                    collegeInfo: data.collegeList, initedCollege: true,
                    secondCollegeInfo:data.secondCollegeList, //此次返回数据里面只有 ‘请选择’
                    roomInfo:data.roomList, //此次返回数据里面只有 ‘请选择’
                    });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    initSecondCollegeAndRoom:function(collegeSelected){
        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: 'json',
            data: {
                reactPageName: 'newCultivateTeachSchedulePage',
                reactActionName: 'getSecondCollegeAndRoomListJS',
                collegeId:collegeSelected,
            },
            cache: false,
            success: function(data) {
                this.setState({secondCollegeInfo:data.secondCollegeList,initedSecondCollege: true,
                    roomInfo: data.roomList, initedRoom: true});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    initRoom:function(collegeSelected,secondCollegeSelected){
        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: 'json',
            data: {
                reactPageName: 'newCultivateTeachSchedulePage',
                reactActionName: 'getRoomListJS',
                collegeId:collegeSelected,
                secondCollegeId:secondCollegeSelected,
            },
            cache: false,
            success: function(data) {
                this.setState({roomInfo: data.roomList, initedRoom: true});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleQuery: function(termInfo, collegeInfo, secondCollegeInfo, roomInfo) {
        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: "json",
            data: {reactPageName: 'newCultivateTeachSchedulePage',
                reactActionName: 'getScheduleMatrixAndTaskListJS',
                termId: termInfo,
                collegeId: collegeInfo,
                collegeId1: secondCollegeInfo,
                roomId: roomInfo
            },
            cache: false,
            success: function(data) {
                this.setState({classMatrix: data.schemduleMatrix,taskList: data.taskList});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleSave: function(saveElem) {
        saveElem.reactPageName = 'newCultivateTeachSchedulePage';
        saveElem.reactActionName = saveElem.action;
        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: "json",
            data: saveElem,
            cache: false,
            success: function(data) {
                this.setState({classMatrix: data.schemduleMatrix});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleInput:function(evt){
        var target=evt.target;
        var ob=target.value;
        var keyCode=evt.keyCode;
        if(keyCode!=13&&keyCode!="13")
        {
            console.log("enter enter key");
            return ;
        }
        var content=undefined;
        var type=undefined;
        if(ob==undefined||ob==""||ob==null) {
            alert("请输入有效工号或者姓名");
            return ;
        }

        try{
            content = ob;
            if(isNaN(parseInt(ob)))
                type="String";
            else
                type = "Integer";

        }catch(e)
        {
            console.log("error message===\r\n" + e);
            return ;
        }

        $.ajax({
            type: 'POST',
            url: 'reactPageDataRequest.do',
            dataType: "json",
            data: {reactPageName: 'newCultivateTeachSchedulePage',
                reactActionName: 'reactGetPersonInfoListByInput',
                queryContent: content,
                queryType:type
            },
            cache: false,
            success: function(data) {
                console.log("data back......................\r\n"+data);
                $("#personMenu")[0].style.visibility = "visible";
                $('#input_personinfo').dropdown('toggle');
                $('#input_personinfo').dropdown('toggle');
                $('#input_personinfo').on('click.bs.dropdown', function(){
                    $("#personMenu")[0].style.visibility = "hidden";
                });
                this.setState({personList: data.list});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log("no...........................");
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {initedTerm: false, initedRoom: false, initedCollege: false};
    },
    render: function() {
        var divRowStyle = {
            marginTop: 20
        };
        var showInfo = null;
        if (!this.state.initedTerm || !this.state.initedCollege) {
            this.initTermAndCollege();
        } else {
            showInfo =<TaskSchedule
                termInfo={this.state.termInfo}
                collegeInfo={this.state.collegeInfo}
                secondCollegeInfo={this.state.secondCollegeInfo}
                roomInfo={this.state.roomInfo}
                initSecondCollegeAndRoom={this.initSecondCollegeAndRoom}
                initRoom={this.initRoom}
                personList={this.state.personList}
                queryFunc={this.handleQuery}
                taskList={this.state.taskList}
                teachTypeList={this.state.teachTypeList}
                classMatrix={this.state.classMatrix}
                saveHandleFuntion={this.handleSave}
                inputFunc={this.handleInput}/>
        }
        return (
            <div style={{border:"1px solid #336699",margin:"20px"}}>
                <div className="row" style={divRowStyle}>
                    <div className="col-lg-12">
                        {showInfo}
                    </div>
                </div>
            </div>
        );
    }
});
module.exports=ClassSchedule;
