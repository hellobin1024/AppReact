import React from 'react';
import {render} from 'react-dom';
import PasswordModify from './PasswordModify.jsx';
import './Password.css';
var TodoStore = require('../../../../../../../../components/flux/stores/TodoStore');

var Password = React.createClass({
    _onChange        : function () {
        var stores = TodoStore.getAll();
        for (var id in stores) {
            console.log("id=" + stores[id].id);
            console.log("text=" + stores[id].text);
            console.log();
        }
    },
    render           : function () {
       return (<div>
           {this.props.children}
                </div>)
    },
    componentDidMount: function () {
        //TodoStore.addChangeListener(this._onChange);
        $(this.refs["controller"]).slideDown(300);
    },

    componentWillUnmount: function () {
        $(this.refs["controller"]).slideUp(300);
        //TodoStore.removeChangeListener(this._onChange);
    }
});


module.exports = Password;