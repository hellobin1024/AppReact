import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';
Boot();

function Boot() {

    render(<Panel
            bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"getStudentQuestionnaireInitPanel",
                reactPageName:"questionnairePage"
                }
            }}
            auto={true}
            autoComplete={true}
            />
        , document.getElementById('root'));
}