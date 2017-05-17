import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../../components/panel/Panel.jsx';

Boot();

function Boot()
{
    render(<Panel
            title="query school courses"
            bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"allCourseQueryInit",
                reactPageName:"newCultivateAllCourseQueryPage"
                }
            }}
            auto={true}
            autoComplete={true}
            />
        ,document.getElementById('root'));
}