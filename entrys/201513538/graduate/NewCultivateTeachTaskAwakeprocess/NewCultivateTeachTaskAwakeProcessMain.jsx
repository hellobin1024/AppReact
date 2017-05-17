/**
 * Created by dell on 2016/5/23.
 */
import React from 'react';
import {render} from 'react-dom';
import PanelTable from '../../../../components/compounds/panelTable/PanelTable.jsx';
import OrdinaryTable from '../../../../components/forms/OrdinaryTable.jsx'
Boot()

function Boot()
{
    var filterField= {
       "courseNum":true,
        "courseName":true,
        "term":true,
        "input":true
    }

    var query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"newCultivateTeachTaskAwakeprocessRulePage",
            reactActionName:"getTeachTaskAwakeInfoInit"
        }
    }
    render(
        <OrdinaryTable
            query={query}
            autoFetch={true}
            filterField={filterField}
            />
        , document.getElementById('root'))


}