import React from 'react';
import {render} from 'react-dom';
import Password from '../../../../../components/compounds/password/PasswordElement.jsx';
var PasswordModify = React.createClass({

    render: function () {

        var title = "修改密码";
        var action = "/serviceHall/react/commitPassword.do";

        return (
            <Password title={title} action={action} highLight={true}/>
        );
    }
});
export default PasswordModify;

