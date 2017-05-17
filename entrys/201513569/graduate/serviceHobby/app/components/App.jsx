import React from 'react';
import {render} from 'react-dom';
var Nav = require('../../../../../../components/basic/Nav.jsx');
import IndexScroll from '../../../../../../components/basic/IndexScroll.jsx';
import ScaleBar from '../../../../../../components/basic/ScaleBar.jsx';
var News = require('./News.jsx');
import CustomMenu from '../../../../../../components/basic/CustomMenu.jsx';
import CommonFunction from '../../modules/CommonFunction.jsx';
import HighLight from '../../../../../../components/basic/HighLight.jsx';
import Footer from '../../../../../../components/basic/Footer.jsx';
import Home from './Home.jsx';
import '../../../../../../css/serviceHobby/basic/app.css';
var MENU = require('../../data/menus.json');
var Scales = require('../../data/scaleBar.json');
var Scrolls = require('../../data/scrolls.json');

var App = React.createClass({
    app$init         : function () {

    },
    getRender        : function () {
        if (this.props.children !== undefined && this.props.children !== null)
            return this.props.children;
        else
            return <Home/>
    },
    render           : function () {

        return (
        /**
         * header box part
         */
            <div>
                <Nav logo={Deploy.getResourceDeployPrefix()+"/"+"images/school_logo.png"} data={MENU}/>

                <div className="topbg"></div>

                <div className="keyNavigation">
                    <div className="top">
                        <div className="block">
                            <Brief data={['欢迎登陆山东大学数字迎新系统，请仔细阅读报道须知和各类通知,','并尽快选择下面的功能按要求完善相关信息和业务申请，有√标注的图标表示该业务已经完成。']}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <CommonFunction auto={true}/>
                    </div>
                </div>
                <HighLight type="Panel"
                           bean={{
                                       url:'/bsuims/reactPageDataRequest.do',
                                        params: {
                                            reactActionName: "addApplyInfoInitPanelUseReact",
                                            reactPageName  : "gradGreenWayPage"
                                                }
                                            }}
                           query={{ url:'/bsuims/reactPageDataRequest.do',
                                reactActionName:"",
                                reactPageName:""}}
                           title="绿色通道申请" auto={true}/>

                <IndexScroll data={Scrolls}/>

                <ScaleBar data={Scales}/>
                {this.getRender()}
                <Footer/>
            </div>

        )
    },
    componentDidMount: function () {
        this.app$init();
    }

});

module.exports = App;