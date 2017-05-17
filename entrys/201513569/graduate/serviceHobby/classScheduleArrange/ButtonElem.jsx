import React from 'react';
import {render} from 'react-dom';

var ButtonElem = React.createClass({
    handleClick: function() {
        this.props.handleClick(this.props.btnElem);
    },
    render: function() {
        return (
            <button type="button" className="list-group-item"
                    onClick={this.handleClick}>{this.props.btnElem.name}</button>
        );
    }
});
module.exports=ButtonElem;