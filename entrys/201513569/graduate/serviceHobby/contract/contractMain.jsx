import React from 'react';
import {render} from 'react-dom';
import OrdinaryTable from '../../../../../components/forms/OrdinaryTable.jsx';

Boot();

function Boot(){
    render(
        <div style={{paddingLeft:"50px",paddingRight:"50px"}}>
            <OrdinaryTable key={1}
                    query={{
                        url:"/bsuims/reactPageDataRequest.do",
                        params:{
                                reactActionName:"mutexContractT1React",
                                reactPageName:"registerRulePage"
                                }
                         }}
                    autoFetch={true}
                    filterField={{id:"",campusNum:"",classYear:"",operation:""}}
                />
            <OrdinaryTable key={2}
                query={{
                        url:"/bsuims/reactPageDataRequest.do",
                        params:{
                                reactActionName:"mutexContractT2React",
                                reactPageName:"registerRulePage"
                                }
                         }}
                autoFetch={true}
                filterField={{id:"",campusNum:"",classYear:"",operation:""}}
                />
        </div>
        , document.getElementById('root'))

}