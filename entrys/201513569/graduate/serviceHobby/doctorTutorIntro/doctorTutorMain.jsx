import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';

Boot();

function Boot(){
    var title="博导介绍";
    var dataField=[
        {
            field:"doctorList",title:"学博",stacked:true
        },
        {
            field:"masterList",title:"学硕",stacked:true
        },
        {
            field:"professionalDoctorList",title:"专博",stacked:true
        },
        {
            field:"professionalMasterList",title:"专硕",stacked:true
        }
    ]
    var side={
        field:"collegeDoctorTutorList",title:null,
        query:{
            url:"/bsuims/reactPageDataRequest.do",
            params:{
                reactPageName:'infoIntroManagePage',
                reactActionName:'doQueryDoctorTutorUseReact'
            }
        }
    }
    render(
        <OrdinaryTable
            title={title}
            query={{
                url:"/bsuims/reactPageDataRequest.do",
                params:
                {
                    reactPageName:'infoIntroManagePage',
                    reactActionName:'doQueryDoctorTutorUseReact'
                }
            }}
            autoFetch={true}
            dataField={dataField}
            sideField={side}
            />
        , document.getElementById('root'))
}