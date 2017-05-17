import React from 'react';
import {render} from 'react-dom';
import CustomMenu from '../../../../../components/basic/CustomMenu.jsx';


Boot();

function Boot() {


    render(
        <CustomMenu auto={true} query={{
                                                url   : "/bsuims/reactPageDataRequest.do",
                                                params: {
                                                    reactPageName  : "serviceReactPage",
                                                    reactActionName: "getAuthMenus"
                                                    }
                                                }}
                    apply={{
                                                url:"/bsuims/reactPageDataRequest.do",
                                                  params: {
                                                    reactPageName  : "serviceReactPage",
                                                    reactActionName: "updateCustomMenu"
                                                    }
                                                }}
            />
        , document.getElementById('root'));

}