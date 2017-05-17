import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';


Boot();

function Boot()
{
    var filterField= {
        "courseName": true,
        "courseNum":true,
        "courseType":true,
        "credit":true,
        "classHour":true,
        "termCount":true,
        "examTypeName":true,
        "managerName":true
    }




    render(<OrdinaryTable

            query={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"allCourseQueryDoQuery",
                reactPageName:"newCultivateAllCourseQueryPage"
                }
            }}
            autoFetch={true}
            autoComplete={true}
            filterField={filterField}
            />
        ,document.getElementById('root'));
}