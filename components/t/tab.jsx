import React from 'react';
import {render} from 'react-dom';
import Mapper from '../../components/basic/Mapper.jsx';
Boot()

function Boot()
{



   var bean={
       url:"/bsuims/reactPageDataRequest.do",
        params:{
        reactActionName:"selectAllTable",
        reactPageName:"processTableRulePage"
}
   }
    render(

        <Mapper bean={bean}/>

        , document.getElementById('root'))


}