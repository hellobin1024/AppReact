import React from 'react';
import {render} from 'react-dom';
import IFrame from './IFrame.jsx';
import '../../css/components/basic/zoomer.css';
var ProxyQ=require('../proxy/ProxyQ');
var Zoomer=React.createClass({
    fetch:function(){
        ProxyQ.queryHandle(
            null,
            '/bsuims/reactPageDataRequest.do',
            {
                reactActionName:'getTabInfoReact',
                reactPageName:'registerRulePage'
            },
            null,
            function(response){
                var ob={};
                if(response.campusNum!==undefined&&response.campusNum!==null)
                {
                    ob.campusNum=response.campusNum;
                }
                this.setState(ob);
            }.bind(this)
        );
    },
    getInitialState:function(){
        return ({campusNum: null});
    },
    getZoomerStyle:function(){
        if(this.props.zoomerStyle!==undefined&&this.props.zoomerStyle!==null)
            return this.props.zoomerStyle;
        else
            return {width:"982px",height:"740px"};
    },
    getIframeStyle:function(){
        console.log('zoomer');
        let ob={marginLeft:"-35px"};
        return ob;
    },
    getWidth:function(){
        if(this.props.width!==undefined&&this.props.width!==null)
            return this.props.width;
        else
            return "982px"
    },
    getHeight:function(){
        if(this.props.height!==undefined&&this.props.height!==null)
            return this.props.height;
        else
            return "470px"
    },
    render:function(){
        if(this.state.campusNum==null||this.state.campusNum==undefined)
        {
            if(this.props.auto==true)
            {
                this.fetch();
            }
            return(<div></div>);
        }
        else
        {
            console.log('zoomer.........');
            var campusNum=this.state.campusNum;
            if(campusNum=='08')
            {
                return (
                    <div className="zoommer" ref='zoommer' id='zoommer'>
                        <table border="0" style={{width:"1024px"}}>
                            <tbody>
                            <tr>
                                <td style={{border:"0px"}}>
                                    <img className="my-foto" src={Deploy.getResourceDeployPrefix()+"/"+this.props.src}
                                         data-large={Deploy.getResourceDeployPrefix()+"/"+"images/image-big.jpg"}
                                         data-title="移动鼠标滚轮进行放缩"
                                         data-help="Zoom +/-" title="Title"
                                         ref="myfoto" style={this.getZoomerStyle()}/>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
            }
            else{
                console.log('iframe....');
                return (
                    <div classname="zoommer">
                        <IFrame
                            src={"http://211.86.56.168/propertyms/bsuims/formViewPageOutInit.do?contextName=bsHouseHouseInfoOneCampusMapViewPage&contextPara=[campusNum:"+campusNum+"]"}
                            width={this.getWidth()}
                            height={this.getHeight()}
                            style={{marginLeft:"-35px"}}/>
                    </div>
                );
            }
        }

    },
    componentWillUnmount:function(){
        var $zoomer=$(this.refs.zoommer);
        if(this.state.campusNum=='08')
        {
            if($('.magnifier').length>0)
                $('.magnifier').hide();
            if($('.statusdiv').length>0)
                $('.statusdiv').hide();
            if($('.tracker').length>0)
                $('.tracker').hide();
        }
    },
    componentDidUpdate:function(){

        var myfoto=this.refs.myfoto;
        var $zoomer=$(this.refs.zoommer);
        if(this.state.campusNum=='08')
        {
            if($zoomer.parent('div').css('display')=='none')
            {

                $('.magnifier').hide();
                $('.statusdiv').hide();
                $('.tracker').hide();
            }
            else{
                window.magnifier=$(myfoto).imagezoomsl({
                    zoomrange: [1, 12],
                    zoomstart:1,
                    innerzoom:true,
                    magnifiersize: [630, 740],
                    scrollspeedanimate: 20,
                    loopspeedanimate:5,
                    cursorshadeborder:"10px solid black",
                    magnifierborder:"5px solid black"
                });
            }
        }

    }
});
module.exports=Zoomer;