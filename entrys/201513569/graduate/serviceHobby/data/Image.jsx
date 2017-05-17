import React from 'react';
import {render} from 'react-dom';
var ProxyQ = require('../../components/proxy/ProxyQ');
import { Link } from 'react-router'
import Icon from '../../components/basic/Icon.jsx';
var Image = React.createClass({
    render: function () {

        var image = null;
        if (this.props.src !== undefined && this.props.src !== null) {
            image = <img src={this.props.src} style={{marginTop:"20px"}}/>
        }

        var icon = null;
        if (this.props.icon !== null && this.props.icon !== undefined) {
            icon = <Icon type={this.props.icon}/>
        }
        else
            icon = <Icon />
        var link = null;
        if (this.props.link !== undefined && this.props.link !== null)
            link = <Link to={this.props.link}>
                {image}
            </Link>
        else {
            link = <Link>
                {image}
            </Link>
        }
        return (
            <div style={{position:"relative"}}>
                {icon}
                {link}
            </div>)
    }
});
module.exports = Image;