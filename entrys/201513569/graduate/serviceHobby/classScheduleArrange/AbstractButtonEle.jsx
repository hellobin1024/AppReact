import React from 'react';
import {render} from 'react-dom';

var AbstractButtonEle=React.createClass({
    cb:function(){
        this.props.cb(this.props.ele);
    },
    render:function(){

        var textProperty=this.props.tName;
        return(
            <button type="button" className="list-group-item"
                    onClick={this.cb}>{this.props.ele[textProperty]}</button>
        );
    }
});
module.exports=AbstractButtonEle;