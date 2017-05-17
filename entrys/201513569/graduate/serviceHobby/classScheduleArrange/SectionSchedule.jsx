import React from 'react';
import {render} from 'react-dom';

import ClassElem from './ClassElem';

var SectionSchedule = React.createClass({
    handleSave:function(scheduleElem){
        console.log("====handleSave cb enter");
        this.props.saveHandleFuntion(scheduleElem);
    },
    render: function() {

        var rowIndex = this.props.rowIndex;
        var taskList = this.props.taskList;
        var teachTypeList = this.props.teachTypeList;
        var personList=this.props.personList;
        var inputFunc=this.props.inputFunc;
        var handleSave=this.handleSave;
        if (this.props.day != null ) {
            var classElems = this.props.day.map(function(elem, index) {
                if (elem === null || elem.spn === null
                    || elem.spn === 0) {
                    return null;
                }
                elem.rowIndex = rowIndex;
                elem.columnIndex = index;
                return (
                    <ClassElem key={index} elem={elem}
                               personList={personList}
                               taskList={taskList}
                               teachTypeList={teachTypeList}
                               saveHandleFuntion={handleSave}
                               inputFunc={inputFunc}/>
                );
            });
        }
        return (
            <tr>
                <th>{this.props.rowIndex + 1}</th>
                {classElems}
            </tr>
        );
    }
});
module.exports=SectionSchedule;