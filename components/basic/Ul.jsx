
import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import '../../css/components/basic/Ul.css';
var Ul=React.createClass({
    saveCb:function(){
        if(this.props.candidateCb!==undefined&&this.props.candidateCb!==null)
            this.props.candidateCb(this.state.candidate);

    },
    cancelCb:function(){
       if(this.props.cancelCb!==undefined&&this.props.cancelCb!==null)
            this.props.cancelCb();
    },
    changeCb:function(index,event){
        let target=event.target;
        let selected=target.checked;
        let candidate=this.state.candidate;
        let menu=this.state.menus[index];
        if(selected==true)//如果选中
        {
            candidate[menu.resId]=menu;

        }else{
            delete candidate[menu.resId];
        }
        this.setState({candidate:candidate});
    },
    getInitialState:function(){
        let menus=null;
        if(this.props.menus!==undefined&&this.props.menus!==null)
            menus=this.props.menus;
        let dragEnable=null;
        if(this.props.dragEnable!==undefined&&this.props.dragEnable!==null)
            dragEnable=this.props.dragEnable;
        return ({menus: menus,dragEnable:dragEnable,candidate:{}});
    },
    componentWillReceiveProps:function(props){
        var menus={};
        if(this.state.menus!=props.menus)
            menus=props.menus;
        this.setState({menus: menus,candidate:{}});
    },
    render:function(){
        let ul=null;
        if(this.state.menus!==undefined&&this.state.menus!==null&&this.state.menus.length>0)
        {
            let menus=[];
            let that=this;
            var state=this.state;
            this.state.menus.map(function(menu,i) {
                menus.push(
                    <li key={i}>
                        <div className="menu-area">
                            <img src={Deploy.getResourceDeployPrefix()+"/images/"+menu.img}></img>
                                <span className="menu-label">
                                    {menu.label}
                                </span>
                            <div className="menu-radio">
                                <input type="checkbox"  checked={state.candidate[menu.resId]!==undefined&&state.candidate[menu.resId]!==null?true:false} onChange={that.changeCb.bind(that,i)}/>
                            </div>
                        </div>
                    </li>
                );
            });
            ul=
                <ul>
                    {menus}
                </ul>;
        }



        return(
            <div className="Ul">
                <div className="tools">
                    <div className="button-group">
                        <button className="btn btn-default btn-save" onClick={this.saveCb}>保存</button>
                        <button className="btn btn-default btn-save" onClick={this.cancelCb}>取消</button>
                    </div>
                </div>
                {ul}
            </div>
        );
    }
});
module.exports=Ul;