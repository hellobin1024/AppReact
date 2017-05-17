import React from 'react';
import {render} from 'react-dom';
import PanelTable from '../../../../../components/compounds/panelTable/PanelTable.jsx';


Boot();

function Boot(){
    var comps=[
        {row:['stuType|select','query']}
    ];
    var query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"degreeAnonymousThesisReviewResult",
            reactActionName:"deegreeThesisReviewResultUseReact"
        }
    }
    var bean={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"degreeAnonymousThesisReviewResult",
            reactActionName:"deegreeThesisReviewPanelUseReact"
        }
    }
    var filterField= {
        "order":true,
        "stuNum":true,
        "stuName": true,
        "grade":true,
        "stuTypeName":true,
        "stuMajorName":true,
        "thesisLevel":true,
        "commentResult":true,
        "attachs":true
    }


    var pageInfo = {
        perSize: 40
    }

    render(
        <PanelTable
            autoComplete={true}
            query={query}
            bean={bean}
            filterField={filterField}
            pageInfo={pageInfo}
            />
        , document.getElementById('root'))


}