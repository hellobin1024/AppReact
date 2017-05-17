import React from 'react';
import {render} from 'react-dom';

var RoomSelection = React.createClass({
    render: function() {
        var clickFunc = this.props.queryFunc;
        if (this.props.roomInfo !== null) {
            var rooms = this.props.roomInfo.map(function(room, index) {
                return (
                    <ButtonElem key={index} btnElem={room}
                                handleClick={clickFunc} />
                );
            });
        }
        return (
            <div className="list-group">
                {rooms}
            </div>
        );
    }
});
module.exports=RoomSelection;