import React from 'react';
import {render} from 'react-dom';

var RoomLink=React.createClass({

    submenuClicked:function(evt) {
        var target=evt.target;
        var changed= $("#room_changed_node").text(target.text);
        this.props.queryFunc(this.props.room);

    },

    render:function(){
        return (
            <li><a href="#" onClick={this.submenuClicked}>{this.props.roomName}</a></li>
        )

    }
})
module.exports=RoomLink;