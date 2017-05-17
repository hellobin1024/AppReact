import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'
import Nav from '../../../../../components/basic/Nav.jsx';
import IndexScroll from '../../../../../components/basic/IndexScroll.jsx';
import ScaleBar from '../../../../../components/basic/ScaleBar.jsx';
import CustomMenu from '../../../../../components/basic/CustomMenu.jsx';
import HighLight from '../../../../../components/basic/HighLight.jsx';
import Footer from '../../../../../components/basic/Footer.jsx';
import '../../../../../css/serviceHobby/basic/app.css';
import MENU from '../data/menus.json';
import Scales from '../data/scaleBar.json';
import Scrolls from '../data/scrolls.json';
import CommonFunction from './CommonFunction.jsx';
import Brief from './Brief.jsx';


var App =React.createClass({
    app$init:function(){
        var url="/bsuims/reactPageDataRequest.do";
        var params={
            reactPageName:"registerRulePage",
            reactActionName:"getWechatHint"
        };
        var ref=this;
        ProxyQ.queryHandle(
            null,
            url,
            params,
            null,
            function(response){
                if(response.data>0) {
                    var QRModal = this.refs['QRModal'];
                    $(QRModal).modal('show');
                }
            }.bind(this)
        );
    },
    hideModel:function () {

        var url="/bsuims/reactPageDataRequest.do";
        var params={
            reactPageName:"registerRulePage",
            reactActionName:"UpdateWechatHint"
        };
        var ref=this;
        ProxyQ.queryHandle(
            null,
            url,
            params,
            null,
            function(response){
                if(response.data!==null&&response.data!==undefined) {
                    var QRModal = ref.refs['QRModal'];
                    $(QRModal).modal('hide');
                }
            }.bind(this)
        );
    },

    render:function(){

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
                            <Brief data={['欢迎登陆山东大学数字迎新系统，请仔细阅读报道须知和各类通知,','并尽快选择下面的功能按要求完善相关信息和业务申请.']}/>
                        </div>
                    </div>
                    <div className="bottom">
                        <CommonFunction auto={true} candidate={false}/>
                    </div>
                </div>
                {this.props.children}
                <ScaleBar data={Scales}/>
                <Footer/>

                <div className="modal fade bs-example-modal-sm login-container"
                     tabIndex="-1"
                     role="dialog"
                     aria-labelledby="myLargeModalLabel"
                     aria-hidden="true"
                     ref='QRModal'
                     data-backdrop="static"
                     data-keyboard="false"
                     style={{zIndex:1045}}
                    >
                    <div className="modal-dialog modal-sm"
                         style={{ top: '10%', width: '50%',width: '400px', height: '600px'}}>
                        <div className="modal-content"
                             style={{ padding: '30px'}}>

                            <div className="modal-body">
                                <div className="form-group" style={{position: 'relative'}}>
                                    <h3 style={{textAlign:'center'}}>XXXX微信公众号</h3>
                                    <div>
                                        <img style={{ width:'310px'}} src="/images/timg.jpeg"/>
                                    </div>
                                    <div style={{textIndent: '2em'}}><span style={{fontSize: 'medium',textAlign:'center'}}>扫码关注绑定,即可微信扫码登陆！(提示三次后自动消失！)</span></div>
                                    <div><input style={{ marginLeft: '38%', marginTop:'10px'}} type='button' className="modalCloseBtn"  onClick={this.hideModel} defaultValue="以后再说"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    },

    componentWillUnmount:function(){
        var role = session.getAttribute("roleMenu");
        console.log(role);
    },
    componentDidMount:function(){
        this.app$init();
    }

});

export default App;