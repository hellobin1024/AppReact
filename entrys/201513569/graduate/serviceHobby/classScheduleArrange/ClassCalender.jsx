import React from 'react';
import {render} from 'react-dom';

import SectionSchedule from './SectionSchedule.jsx';

var ClassCalender = React.createClass({
    handleSave:function(elem){
        //elem point to the editingElem in ClassEditingElem
        //elem.sectionStart equal to rowIndex
        //elem.sectionDay equal to columnIndex
        console.log("elem===\r\n" + elem);
        this.props.classMatrix.map(function(c,y) {
            c.map(function(cc,x) {
                if(cc.columnIndex==elem.sectionDay)
                {
                    if(cc.rowIndex!=elem.sectionStart)
                    {
                        console.log("rowIndx===" + cc.rowIndex);
                        console.log("columnIndex==="+cc.columnIndex);
                        if(cc.scheduleId!==null&&cc.scheduleId!==undefined)
                        {
                            if(cc.rowIndex>elem.sectionStart) {//cc位于elem之上
                                if(elem.sectionStart+elem.span>cc.rowIndex)
                                    return;
                            }else
                            {//cc位于elem之下
                                if(cc.rowIndex+cc.span>elem.sectionStart)
                                    return;
                            }
                        }
                    }
                }});
        });

        this.props.saveHandleFuntion(elem);
    },
    render: function() {

        var taskList = this.props.taskList;
        var teachTypeList = this.props.teachTypeList;
        var personList=this.props.personList;
        var inputFunc=this.props.inputFunc;
        var handleSave=this.handleSave;
        if (this.props.classMatrix !== null&&this.props.classMatrix!==undefined ) {
            var SectionSchedules = this.props.classMatrix.map(function(day, index) {
                return (
                    <SectionSchedule key={index} day={day} rowIndex={index}
                                     taskList={taskList}
                                     teachTypeList={teachTypeList}
                                     personList={personList}
                                     saveHandleFuntion={handleSave}
                                     inputFunc={inputFunc}/>
                );
            });
        }
        return (
            <table className="table table-bordered classSchedule">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>星期一</th>
                    <th>星期二</th>
                    <th>星期三</th>
                    <th>星期四</th>
                    <th>星期五</th>
                    <th>星期六</th>
                    <th>星期日</th>
                </tr>
                {SectionSchedules}
                </tbody>
            </table>
        );
    }
});
module.exports=ClassCalender;