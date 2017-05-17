import React from 'react';
import {render} from 'react-dom';
import EmbedTable from '../../../../../components/forms/EmbedTable.jsx';


Boot();

function Boot(){

    var title="博士生、硕士生导师列表";
    //var url="/ReactJPChatter/person/stuinfo_personBasicInfoUpdate.do"

    render(
        <EmbedTable
            title={title}
            query={{
                url:"/bsuims/reactPageDataRequest.do",
                params:
                {
                    reactPageName:'cultivateTutorPage',
                    reactActionName:'getAllTutorListUseReact'
                }
            }}
            subQuery={{
                url:"/bsuims/reactPageDataRequest.do",
                params:{
                    personId:'',
                    reactPageName:'cultivateTutorPage',
                    reactActionName:"personIntroductionShow"
                }
            }}
            autoFetch={true}
            />
        , document.getElementById('root'))
}