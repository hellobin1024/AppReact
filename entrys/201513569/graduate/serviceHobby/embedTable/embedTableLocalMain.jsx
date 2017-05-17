import React from 'react';
import {render} from 'react-dom';
var ProxyQ = require('../../../../../components/proxy/ProxyQ.js');

Boot();

function Boot() {
    var EmbedTable = ProxyQ.load("EmbedTable");
//import EmbedTable from '../../../../../components/forms/EmbedTable.jsx';
    var additional = {
        arr: [
            {
                filterField: "perName",
                data       : [
                    {
                        "perName": "xch|span|\
                        {\
                            url:'/bsuims/reactPageDataRequest.do',\
                            params:{\
                                reactPageName:'cultivateTutorPage',\
                                reactActionName:'personIntroductionShow',\
                                personId:1142051104\
                            }\
                        }"
                    },
                    {
                        "perName": "xch|span|\
                        {\
                            url:'/bsuims/reactPageDataRequest.do',\
                            params:{\
                                reactPageName:'cultivateTutorPage',\
                                reactActionName:'personIntroductionShow',\
                                personId:1142051104\
                            }\
                        }"
                    },
                    {
                        "perName": "xch|span|\
                        {\
                            url:'/bsuims/reactPageDataRequest.do',\
                            params:{\
                                reactPageName:'cultivateTutorPage',\
                                reactActionName:'personIntroductionShow',\
                                personId:1142051104\
                            }\
                        }"
                    }
                ]
            }
        ]
    }

    var second = {
        arr: [
            {
                filterField: "perName",
                border     : "none",
                data       : [
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png'}|image"
                    }
                ]
            }
        ]
    }


    //var data={
    //    arr:[
    //        {
    //            data:[
    //                {perName:"wjj",personId:1142051104},
    //                {perName:"xch",personId:1142051103},
    //                {perName:"xli",personId:1142051102},
    //                {perName:"pcy",personId:1142051101},
    //                {perName:"gua",personId:1142051106},
    //                {perName:"wa",personId:1142051107},
    //                {perName:"nian",personId:1142051108}
    //                ],
    //            filterField:['perName']
    //        }
    //        ]
    //        }

    render(
        <EmbedTable
            data={second}
            embedCols={4}
            />
        , document.getElementById('root'));
}