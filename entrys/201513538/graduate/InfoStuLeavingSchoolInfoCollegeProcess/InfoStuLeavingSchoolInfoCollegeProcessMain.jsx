/**
 * Created by dell on 2016/6/4.
 */
/**
 * Created by dell on 2016/5/23.
 */
import React from 'react';
import {render} from 'react-dom';
import Panel from '../../../../components/panel/Panel.jsx';
import OrdinaryTable from '../../../../components/forms/OrdinaryTable.jsx'
Boot()

function Boot()
{
    var filterField= {
        "huji":true,
        "dk":true,
        "book":true,
        "xyk":true,
        "ts":true,
        "zzgx":true,
        "xsz":true
    }

    var query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"InfoStuLeavingSchoolInfoCollegeProcessRulePage",
            reactActionName:"infoStuleavingSchoolStuUpdateInfo"
        }
    }

    var title="离校信息办理状态";
    var PanelTitle="需填写信息";
    render(



       <div>
           <div style={{margin:"50px"}}>
        <OrdinaryTable
            query={query}
            autoFetch={true}
            title={title}
            filterField={filterField}
            />
               </div>
        <Panel
           bean={query}
            auto={true}
           autoComplete={true}
           title={PanelTitle}
        />
        </div>
        , document.getElementById('root'))


}