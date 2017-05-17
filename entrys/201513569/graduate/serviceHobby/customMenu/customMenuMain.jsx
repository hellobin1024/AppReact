import React from 'react';
import {render} from 'react-dom';
import CustomMenu from '../../../../../components/basic/CustomMenu.jsx';


Boot();

function Boot() {

    var query = {
        url   : "/bsuims/reactPageDataRequest.do",
        params: {
            reactPageName  : "serviceReactPage",
            reactActionName: "getAuthMenus"
        }
    }
    var data = [
        {selected: true, name: "", src: './images/function1.png', link: ''},
        {selected: true, name: "b", src: './images/function2.png', link: ''},
        {selected: true, name: "c", src: './images/function3.png', link: ''},
        {selected: true, name: "d", src: './images/function4.png', link: ''},
        {selected: true, name: "e", src: './images/function5.png', link: ''},
        {selected: false, name: "修改密码", src: './images/function1.png', link: '', p: '个人信息管理'},
        {selected: false, name: "政策文件", src: './images/function3.png', link: '', p: '个人信息管理'},
        {selected: false, name: "通知浏览", src: './images/function2.png', link: '', p: '个人信息管理'},
        {selected: false, name: "学术规范承诺书", src: './images/function4.png', link: '', p: '个人信息管理'},
        {selected: false, name: "联系方式维护", src: './images/function5.png', link: '', p: '个人信息管理'},
        {selected: false, name: "学籍信息", src: './images/function1.png', link: '', p: '个人信息管理'},
        {selected: false, name: "学生表现信息", src: './images/function1.png', link: '', p: '个人信息管理'},
        {selected: false, name: "报到须知", src: './images/function4.png', link: '', p: '报到注册'},
        {selected: false, name: "病史填写", src: './images/function1.png', link: '', p: '报到注册'},
        {selected: false, name: "病史填写", src: './images/function1.png', link: '', p: '报到注册'},
        {selected: false, name: "免修英语申请", src: './images/function1.png', link: '', p: '报到注册'},
        {selected: false, name: "申请导师", src: './images/function1.png', link: '', p: '培养管理2016'},
        {selected: false, name: "培养方案查询", src: './images/function1.png', link: '', p: '培养管理2016'},
        {selected: false, name: "制定培养计划", src: './images/function1.png', link: '', p: '培养管理2016'},
        {selected: false, name: "查看培养计划", src: './images/function1.png', link: '', p: '培养管理2016'},
        {selected: false, name: "课程查询", src: './images/function1.png', link: '', p: '培养管理2016'},
        {selected: false, name: "打印体检表", src: './images/function5.png', link: '', p: '报到注册'}

    ];


    var unselected = {
        arr: [
            {
                filterField: "menu",
                border     : "none",
                data       : [
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    },
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    },
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    },
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    },
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    },
                    {
                        "menu": "{link:'',src:'./images/function1.png',icon:'add',title:''}|image"
                    }
                ]
            }
        ]
    }


    require(["../../../../../components/basic/CustomMenu.jsx"],function(Component){
        render(
            React.createElement(Component, {query: query, auto: true}), document.getElementById("root"));


    });


}