import React from 'react';
import {render} from 'react-dom';

var TodoStore = require('../../../../../components/flux/stores/TodoStore');

var ViceSection = React.createClass({
    _onChange        : function () {
        var stores = TodoStore.getAll();
        for (var id in stores) {
            console.log("id=" + stores[id].id);
            console.log("text=" + stores[id].text);
            console.log();
        }
    },
    render           : function () {


        return <div>{this.props.vice}</div>


    },
    componentDidMount: function () {
        //TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        //TodoStore.removeChangeListener(this._onChange);
    }
});
export default ViceSection;