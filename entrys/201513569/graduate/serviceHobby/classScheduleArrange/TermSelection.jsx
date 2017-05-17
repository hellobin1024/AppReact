import React from 'react';
import {render} from 'react-dom';

var TermSelection = React.createClass({
    render: function() {
        var clickFunc = this.props.queryFunc;
        if (this.props.termInfo !== null) {
            var terms = this.props.termInfo.map(function(term, index) {
                return (
                    <ButtonElem key={index} btnElem={term}
                                handleClick={clickFunc} />
                );
            });
        }
        return (
            <div className="list-group">
                {terms}
            </div>
        )
    }
});
module.exports=TermSelection;