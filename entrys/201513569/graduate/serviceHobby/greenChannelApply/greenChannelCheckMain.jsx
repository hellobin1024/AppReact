import React from 'react';
import {render} from 'react-dom';
import PanelTable from '../../../../../components/compounds/panelTable/PanelTable.jsx';

Boot();
function Boot()
{
    var bean={
        url:'/bsuims/reactPageDataRequest.do',
        params: {
            reactActionName: "studentGradGreenwayCheckPanelUseReact",
            reactPageName  : "gradGreenWayPage"
        }
    }



    var filterField= {
        "stuName": true,
        "stuId":true,
        "stuCollegeName":true,
        "stuMajorName":true,
        "thesisLevel":true,
        "commentResult":true,
        "attachs":true
    }


    render(
        <PanelTable
            autoComplete={true}
            bean={bean}
            filterField={filterField}
            />
        , document.getElementById('root'));

}