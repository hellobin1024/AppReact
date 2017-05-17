import React from 'react';
import {render} from 'react-dom';

var TermLink=React.createClass({

    submenuClicked:function(evt) {
        var target=evt.target;
        //var changed= $("#term_changed_node").text(target.text);
        this.props.queryFunc(this.props.term);

    },

    render:function(){
        return (
            <a href="#" onClick={this.submenuClicked}>{this.props.termName}</a>
        )

    }
})
module.exports=TermLink;