import React from 'react';
import {render} from 'react-dom';
import Password from '../../../../../components/compounds/password/PasswordElement.jsx';


Boot();

function Boot() {

    var title = "修改密码";
    var action = "/ReactJPChatter/react/commitPassword.do";


    render(
        <Password title={title} action={action}/>
        , document.getElementById('root'))
}

