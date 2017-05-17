import React from 'react';
import {render} from 'react-dom';
import Tab from '../../../../../components/basic/Tab.jsx';
import '../../../../../css/components/basic/tab.css';
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
            name: "tab1", sub:[
                            {
                                "name":"盲审" ,comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                                                        }
                            },
                            {
                                "name":"盲审",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                                                        }
                            },
                            {
                                "name":"盲审",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                                                        }
                            },
                            {
                                "name":"盲审",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {
                                "name":"盲审",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {
                                "name":"修改密码",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {
                                "name":"修改密码",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},
                            {
                                "name":"修改密码",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }}
                            ]
        },
        {
            name: "tab2",sub:[
                            {
                                "name":"修改密码1" ,sub:[ {
                                                         "name":"盲审1" ,comp: {
                                                           name        : "PanelTable",
                                                         autoComplete: true,
                                                         query       : query,
                                                          bean        : bean,
                                                        filterField : filterField
                                                        }},
                                                        {
                                                          "name":"盲审2",comp: {
                                                            name        : "PanelTable",
                                                             autoComplete: true,
                                                            query       : query,
                                                            bean        : bean,
                                                             filterField : filterField
                                                        }},
                                                         {
                                                          "name":"盲审3",comp: {
                                                             name        : "PanelTable",
                                                          autoComplete: true,
                                                          query       : query,
                                                          bean        : bean,
                                                          filterField : filterField
                                                      }},

                                                        {
                                                        "name":"盲审4",comp: {
                                                              name        : "PanelTable",
                                                            autoComplete: true,
                                                               query       : query,
                                                             bean        : bean,
                                                          filterField : filterField
                                                        }},
                                                      ]
                            },
                            {
                                "name":"上课与选课",sub:[ {
                                "name":"盲审1" ,comp: {
                                    name        : "PanelTable",
                                    autoComplete: true,
                                    query       : query,
                                    bean        : bean,
                                    filterField : filterField
                                }},
                                {
                                    "name":"盲审2",comp: {
                                    name        : "PanelTable",
                                    autoComplete: true,
                                    query       : query,
                                    bean        : bean,
                                    filterField : filterField
                                }},
                                {
                                    "name":"盲审3",comp: {
                                    name        : "PanelTable",
                                    autoComplete: true,
                                    query       : query,
                                    bean        : bean,
                                    filterField : filterField
                                }},

                                {
                                    "name":"盲审4",comp: {
                                    name        : "PanelTable",
                                    autoComplete: true,
                                    query       : query,
                                    bean        : bean,
                                    filterField : filterField
                                }}
                            ]
                            },

                            {
                                "name":"修改密码3",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},


                            {
                                "name":"课表查看4",comp: {
                                name        : "PanelTable",
                                autoComplete: true,
                                query       : query,
                                bean        : bean,
                                filterField : filterField
                            }},

                            ]
        },
        {
            name: "tab3"
        },
        {
            name: "tab4"
        }
    ];


    render(
        <Tab data={data}/>
        , document.getElementById('root'))
}