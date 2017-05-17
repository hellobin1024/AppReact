import React from 'react';
import {render} from 'react-dom';
var HighLight = require('../../../../../components/basic/HighLight.jsx');

Boot();
function Boot() {
    render(
        <HighLight type="Panel"
                   bean={{
                            url:'/bsuims/reactPageDataRequest.do',
                            params: {
                                reactActionName: "addApplyInfoInitPanelUseReact",
                                reactPageName  : "gradGreenWayPage"
                            }
                        }}
                   query={{ url:'/bsuims/reactPageDataRequest.do',
                                reactActionName:"",
                                reactPageName:""}}
                   title="绿色通道申请" auto={true}/>
        , document.getElementById('root'))

}

