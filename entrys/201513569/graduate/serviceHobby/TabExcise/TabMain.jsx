
import React from 'react';
import {render} from 'react-dom';
import Tab from '../../../../../components/basic/Tab.jsx';

Boot();
function Boot(){
    var filterField = {
        "checkM": true,
        "stuNum": true,
        "stuName": true,
        "mustCredit": true,
        "selectCredit": true,
        "totalCredit": true,
        "status": true,
        "avScores": true
    };

    var  query={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactActionName:"getStuListForCredit",
            reactPageName:"newCultivateAchievementProcessPage"
        }
    }
    var bean={
        url:"/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"degreeAnonymousThesisReviewResult",
            reactActionName:"deegreeThesisReviewPanelUseReact"
        }
    }

    var dataTab={
        name        : "PanelTable",
        autoComplete: true,
        query       : query,
        bean        : bean,
        filterField: filterField
            };

    var data=[
        {name: "tab1", comp: dataTab},
        {name:"tab2"},
        {name:"tab3"},
        {name:"tab4"}
    ];



    render(
        <Tab data={data} />
        , document.getElementById('root'))
}