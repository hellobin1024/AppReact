import React from 'react';
import {render} from 'react-dom';

var Register = React.createClass({

    render: function () {

        return (
            <div>it is register
                {this.props.children}
        </div>)
    }
});
module.exports = Register;