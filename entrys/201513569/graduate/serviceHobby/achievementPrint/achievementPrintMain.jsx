import React from 'react';
import {render} from 'react-dom';
import PanelTable from '../../../../../components/compounds/panelTable/PanelTable.jsx';

Boot()

function Boot()
{
    var filterField = {
        "checkM": true,
        "stuNum": true,
        "stuName": true,
        "mustCredit": true,
        "selectCredit": true,
        "totalCredit": true,
        "avScores": true,
        "link":true
    };

    var  query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactActionName:"getStuListForCredit",
            reactPageName:"newCultivateAchievementProcessPage"
        }
    }


    render(
        <PanelTable
            bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"newCultivateStuScorePrintInit",
                reactPageName:"newCultivateAchievementProcessPage"
                }
            }}
            autoComplete={true}
            query={query}
            filterField={filterField}
            />
        , document.getElementById('root'))
}