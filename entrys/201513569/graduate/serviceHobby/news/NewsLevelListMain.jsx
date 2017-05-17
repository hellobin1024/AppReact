import React from 'react';
import {render} from 'react-dom';
import LevelListElement from '../../../../../components/compounds/levelListElement/LevelListElement.jsx';


Boot();


function Boot(){



    var containerStyle={textAlign:"center"};
    var divRowStyle = {
        marginTop: 20
    };
    var data$options={
        level:2
    };

    var query={
        url: "/bsuims/reactPageDataRequest.do",
        params:{
            reactPageName:"groupNewsReactPage",
            reactActionName:"listTypeNewsUseReact"
        }
    }

    var branchs=[{
        field:"data",title:"newsTypeName"
    },{
        field:"newsList",title:"title"
    }];
    render(
        <div className="row" style={divRowStyle}>
            <div className="container" style={containerStyle} >
                <LevelListElement  data-options={data$options} query={query}
                                   auto={true} branch={branchs}
                    />
            </div>
        </div>
        , document.getElementById('root'));
}