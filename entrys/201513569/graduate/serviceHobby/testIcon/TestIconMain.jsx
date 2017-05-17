import React from 'react';
import {render} from 'react-dom';
import Icon from '../../../../../components/basic/Icon.jsx';
Boot();
function Boot() {
    var data =
    {type: "add"}
    render(
        <Icon data={data}/>
        , document.getElementById('root'))

}