import React from 'react';
import { Link } from 'react-router'
import '../../css/components/basic/list.css';


var List = React.createClass({

    render: function () {
        var lis;
        if (this.props.data !== undefined && this.props.data !== null) {
            lis = new Array();
            this.props.data.map(function (item, i) {
                lis.push(<li key={i}>
                    <Link to={item.route}><i> </i>{item.label}</Link></li>);
            });
        }

        return (
            <ul className="popular-in">
                {lis}
            </ul>
        )

    }
});
module.exports = List;