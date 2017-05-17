import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';

Boot()

function Boot()
{
    var filterField= {
        "id": true,
        "departmentName":true,
        "postTypeName":true,
        "postContentCut":true,
        "postNumber":true,
        "link":true
    }

    var  query={
        url: "/bsuims/reactPageDataRequest.do",
        params:{
            reactActionName:"assTeaListPostInfoUseReact",
            reactPageName:"assitantScholarApplyPage"
        }
    }

    var group$field=['id','departmentName'];

    render(
        <OrdinaryTable
            autoFetch={true}
            query={query}
            filterField={filterField}
            group-field={group$field}
            />
        , document.getElementById('root'))


}