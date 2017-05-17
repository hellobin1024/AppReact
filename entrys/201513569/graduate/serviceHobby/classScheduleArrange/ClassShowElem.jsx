import React from 'react';
import {render} from 'react-dom';

var ClassShowElem = React.createClass({
    render: function() {
        var title=this.props.elem.title
        if(this.props.elem.teaName!==null&&this.props.elem.teaName!==undefined)
            title+="( "+this.props.elem.teaName+" )";
        return (

            //rowSpan与this.props.elem.spn抽离
            //property this.props.elem.spn should control td rowSpan
            <td rowSpan={this.props.elem.spn}
                onClick={this.props.handleClick} >

                {title}
            </td>
        );

    }
});
module.exports=ClassShowElem;