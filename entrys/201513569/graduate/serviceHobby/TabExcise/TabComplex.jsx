import React from 'react';
import {render} from 'react-dom';
import Tab from '../../../../../components/basic/Tab.jsx';
Boot();
function Boot() {


    var query = {

        url   : "/bsuims/reactPageDataRequest.do",
        params: {
            reactPageName  : "degreeAnonymousThesisReviewResult",
            reactActionName: "deegreeThesisReviewResultUseReact"
        }
    }
    var bean = {
        url   : "/bsuims/reactPageDataRequest.do",
        params: {
            reactPageName  : "degreeAnonymousThesisReviewResult",
            reactActionName: "deegreeThesisReviewPanelUseReact"
        }
    }
    var filterField = {
        "order"        : true,
        "stuNum"       : true,
        "stuName"      : true,
        "grade"        : true,
        "stuTypeName"  : true,
        "stuMajorName" : true,
        "thesisLevel"  : true,
        "commentResult": true,
        "attachs"      : true
    }
    var second = {
        arr: [
            {
                filterField: "perName",
                border     : "none",
                data       : [
                    {
                        "perName": "{link:'',src:'./images/function1.png',icon:'add'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png',icon:'add'}|image"
                    },
                    {

                        "perName": "{link:'',src:'./images/function1.png',icon:'delete'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png',icon:'add'}|image"
                    },
                    {

                        "perName": "{link:'',src:'./images/function1.png',icon:'delete'}|image"
                    },
                    {
                        "perName": "{link:'',src:'./images/function1.png',icon:'delete'}|image"
                    }
                ]
            }
        ]
    }

    var data = [
        {
            title: "tab1", sub:[
                            {
                                "title":"修改密码" ,comp:
                                                        {
                                                            name        : "PanelTable",
                                                            autoComplete: true,
                                                            query       : query,
                                                            bean        : bean,
                                                            filterField : filterField
                                                        }
                            },
                            {"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }}, {"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},{"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},{"title":"修改密码","query":"",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }}
                            ]
        },
        {
            title: "tab2",sub:[
            {"title":"修改密码" ,comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            } }, {"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }},
            {"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }}, {"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }},
            {"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }},{"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }},
            {"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }},{"title":"修改密码","query":"",comp: {
                name        : "PanelTable",
                autoComplete: true,
                query       : query,
                bean        : bean,
                filterField : filterField
            }}
        ]
        },
        {title: "tab3"},
        {title: "tab4"}
    ];


    render(
        <Tab data={data}/>
        , document.getElementById('root'))
}