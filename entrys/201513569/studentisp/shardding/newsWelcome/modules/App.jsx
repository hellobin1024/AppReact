import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'
import Nav from '../../../../../components/basic/Nav.jsx';
import IndexScroll from '../../../../../components/basic/IndexScroll.jsx';
import ScaleBar from '../../../../../components/basic/ScaleBar.jsx';
import Footer from '../../../../../components/basic/Footer.jsx';
import CommonFunction from './CommonFunction.jsx';
import Brief from './Brief.jsx';
import News from './News.jsx';
import '../../../../../css/serviceHobby/basic/app.css';
import MENU from '../data/menus.json';
import Scales from '../data/scaleBar.json';
var SyncActions= require('../../../../../components/flux/actions/SyncActions');
var ProxyQ = require('../../../../../components/proxy/ProxyQ');

var App = React.createClass({
    app$init: function () {

    },
    fetch:function(){
        ProxyQ.queryHandle(
            null,
            '/bsuims/reactPageDataRequest.do',
            {
                reactActionName:'getCampusNameAndImgReact',
                reactPageName:'freshmanWelcomeWorkbenchRulePage'
            },
            null,
            function(response){
                var ob={};
                if(response.campusName!==undefined&&response.campusName!==null)
                {
                    ob.campusName=response.campusName;
                };
                if(response.campusNum!==undefined&&response.campusNum!==null)
                {
                    ob.campusNum=response.campusNum;
                };
                if(response.campusImg!==undefined&&response.campusImg!==null)
                {
                    ob.campusImg=response.campusImg;
                };
                if(response.collegeName!==undefined&&response.collegeName!==null)
                {
                    ob.collegeName=response.collegeName;
                };
                if(response.collegeUrl!==undefined&&response.collegeUrl!==null)
                {
                    ob.collegeUrl=response.collegeUrl;
                };

                this.setState(ob);
            }.bind(this)
        );
    },
    getInitialState:function(){
        return ({campusImg: null,campusName:null});
    },
    render: function () {
        if(this.state.campusName==null||this.state.campusName==undefined)
        {
                this.fetch();
            return(<div></div>);
        }else{
            var campusNum=this.state.campusNum;
            var collegeUrl=this.state.collegeUrl;
            return (
            /**
             * header box part
             */
                <div>
                    <Nav logo={Deploy.getResourceDeployPrefix()+"/"+"images/school_logo.png"} data$initialed={true}/>

                    <div className="topbg"></div>

                    <div className="keyNavigation"  style={{width:"100%",minWidth: "1263px", height: "220px",
                    background:"linear-gradient(to right bottom, rgba(172,218,244,0), rgba(0,0,0,0)),url('"+Deploy.getResourceDeployPrefix()+"/images/"+this.state.campusImg+"')",
                    backgroundPosition:"-200px 0px"
                    }}>
                        <div className="top">
                            <div className="block">
                                <ul>
                                    <li>欢迎登陆山东大学数字迎新系统
                                        <a style={{color:"red"}}href={campusNum=='08'?"http://yxwqd.sdu.edu.cn/":"javascript:void(0)"}  target="_blank">  {this.state.campusName}   </a>
                                        <a  style={{color:"red"}} href={collegeUrl!==''&&collegeUrl!==null&&collegeUrl!==undefined?collegeUrl:"javascript:void(0)"}  target="_blank">{this.state.collegeName}</a>，
                                        请仔细阅读报道须知和各类通知,
                                    </li>
                                    <li>并尽快选择下面的功能按要求完善相关信息和业务申请，有√标注的图标表示该业务已经完成。</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <CommonFunction auto={true}/>
                        </div>
                    </div>

                    {this.props.children}
                    <ScaleBar data={Scales}/>
                    <Footer/>
                </div>
             );
             }
    },
    componentDidMount: function () {
        this.app$init();
    }

});

export default App;