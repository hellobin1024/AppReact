

import React from 'react';
import {render} from 'react-dom';
import LevelListElement from '../../components/compounds/levelListElement/LevelListElement.jsx';


Boot()

function Boot()
{

    var containerStyle={textAlign:"center"};
    var divRowStyle = {
        marginTop: 20
    };
        var data$options={
            level:2
        };
        var data=[
            [{content:'baidu',expand:true},{content:'tremendous data'},{content:'customer service'}],
            [{content:'taobao',expand:true},{content:'爬虫'},{content:'黑钱'}],
            [{content:'tenxun',expand:false},{content:'剑灵'},{content:'永恒之塔'}]
        ];

    render(
        <div className="row" style={divRowStyle}>
            <div className="container" style={containerStyle} >
                <LevelListElement data={data} data-options={data$options}
                    />
            </div>
        </div>
        , document.getElementById('root'));


}


