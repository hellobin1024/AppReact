import React from 'react';
import {render} from 'react-dom';

var ShowError = React.createClass({
    render: function() {
        var divRowStyle = {
            marginTop: 20
        };
        var pStyle = {
            textAlign: "center",
            color: "#888",
            family: "Microsoft YaHei, SimHe"
        }
        return (
            <div className="row" style={divRowStyle}>
                <div className="col-lg-8">
                    <p id="error_tag" style={pStyle}>{this.props.errorMsg}</p>
                </div>
            </div>
        );
    }
});
module.exports=ShowError;