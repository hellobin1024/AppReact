import React from 'react';
import {render} from 'react-dom';

import ClassEditingElem from './ClassEditingElem';
import ClassShowElem from './ClassShowElem';

var ClassElem = React.createClass({
    handleClick: function() {
        this.setState({editing: true});
    },
    cancelClick: function() {
        this.setState({editing: false});
    },
    updateClick: function(scheduleElem) {
        scheduleElem.action = 'saveOrUpdateTeachScheduleJS';
        this.props.saveHandleFuntion(scheduleElem);
        this.setState({editing: false});
    },
    deleteClick: function(scheduleElem) {
        scheduleElem.action = 'deleteTeachScheduleJS';
        this.props.saveHandleFuntion(scheduleElem);
        this.setState({editing: false});
    },
    getInitialState: function() {
        return {editing: false};
    },
    render: function() {
        if (this.state.editing) {
            return (
                <ClassEditingElem
                    elem={this.props.elem}
                    taskList={this.props.taskList}
                    teachTypeList={this.props.teachTypeList}
                    personList={this.props.personList}
                    inputFunc={this.props.inputFunc}
                    saveClick={this.updateClick}
                    cancelClick={this.cancelClick}
                    deleteClick={this.deleteClick} />
            );
        } else {
            return (
                <ClassShowElem
                    elem={this.props.elem}
                    handleClick={this.handleClick} />
            );
        }
    }
});
module.exports=ClassElem;