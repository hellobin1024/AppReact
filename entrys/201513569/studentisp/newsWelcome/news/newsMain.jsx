import React from 'react';
import {render} from 'react-dom';
import News from '../modules/News.jsx';
Boot();

function Boot(){

    render(
        <News query={{
                                 url:"/bsuims/reactPageDataRequest.do",
                                params:{
                                    reactPageName:"groupNewsReactPage",
                                    reactActionName:"listTypeNewsUseReact"
                                }
                             }}
              auto={true}/>
        , document.getElementById('root'))

}