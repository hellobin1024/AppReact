import React from 'react';
import {render} from 'react-dom';
import PanelTable from '../../../../../components/compounds/panelTable/PanelTable.jsx';
var ProxyQ=require('../../../../../components/proxy/ProxyQ');
Boot()

function Boot()
{
    var filterField= {
        "order":true,
        "courseNum":true,
        "courseName": true,
        "courseType":true,
        "credit":true,
        "classHour":true,
        "termCount":true,
        "examTypeName":true,
        "managerName":true,
        "link":true
    }

    var  query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactActionName:"allCourseQueryDoQuery",
            reactPageName:"newCultivateAllCourseQueryPage"
        }
    }


    render(
        <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <PanelTable
                bean={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                reactActionName:"allCourseQueryInitWithUpload",
                reactPageName:"newCultivateAllCourseQueryPage"
                }
            }}
                query={query}
                autoComplete={true}
                filterField={filterField}
                />
        </div>
        , document.getElementById('root'))


}