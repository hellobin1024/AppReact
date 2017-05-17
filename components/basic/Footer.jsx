import React from 'react';
import {render} from 'react-dom';
import '../../css/components/basic/footer.css';
/**
 *
 */
var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                Copyright  山东大学软件学院 &nbsp;&nbsp; 支持邮箱 91680@sdu.edu.cn
            </div>)
    }
});
module.exports = Footer;